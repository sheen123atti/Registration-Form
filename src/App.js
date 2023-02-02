import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')  
  const [number,setNumber] = useState('')
  const [gender,setGender] = useState('')
  const [username,setUsername] = useState('')

  const [emptyError,setEmptyError] = useState('')
  const [nameError,setNameError] = useState('')
  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')
  const [numberError,setNumberError] = useState('')
  const [genderError,setGenderError] = useState('')

  const resetErrorDefault = () => {
    setEmptyError('')
    setNameError('')
    setEmailError('')
    setPasswordError('')
    setNumberError('')
    setGenderError('')
  }

  const gratitude = () => {
    setUsername('Thanks for registering ' + email.substr(0,email.indexOf('@')))
  }

  const handler = (e) => {
    e.preventDefault()
    resetErrorDefault()
    const isValid = validate()
    if (isValid) {
      setName('')
      setEmail('')
      setPassword('')
      setNumber('')
      setGender('')
    }
    gratitude()
  }

  const validate = () => {
    if (name === '' || email === '' || password === '' || number === '' || gender === ''){
      setEmptyError('Fill all the fields')
      setUsername('')
      return false
    }
    if (!name.match(/^[A-Za-z0-9- ]+$/)) {
      setNameError('Name is not alphanumeric')
      setUsername('')
      return false
    }
    if (!email.includes('@' || '.')){
      setEmailError('Enter valid email address')
      setUsername('')
      return false
    }
    if (password.length < 8){
      setPasswordError('Password must contain atleast 8 letters')
      setUsername('')
      return false
    }
    if (number.length !== 10 || !number.match(/^[0-9]+$/)){
      setNumberError('Enter a valid phone number')
      setUsername('')
      return false
    }
    if (!gender.match(/male|female|other/i)){
      setGenderError('Please identify as female, male or other')
      setUsername('')
      return false
    }
  }

  return (
    <div className="App">
      <header className='header'>
        Student Registration Form
      </header>
      <div className='container'>
        <form onSubmit={handler}>
          <label>Name</label>
          <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br/>
          <span>{nameError}</span> <br/>
          <label>Email</label>
          <input type='text' placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br/>
          <span>{emailError}</span> <br/>
          <label>Password</label>
          <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br/>
          <span>{passwordError}</span> <br/>
          <label>Phone Number</label>
          <input type='text' placeholder='Enter Phone Number' value={number} onChange={(e)=>{setNumber(e.target.value)}} /> <br/>
          <span>{numberError}</span> <br/>
          <label>Gender</label>
          <select name='gender' value={gender} onChange={(e)=>{setGender(e.target.value)}}>
            <option value='select gender'>Select Gender</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='other'>Other</option>
          </select> <br/>
          <span>{genderError}</span> <br/><br/>
          <button type='submit'>Submit</button> <br/><br/>
          <span>{emptyError}</span>
        </form>
      </div>
      <div className='thank'>
          <p>{username}</p>
      </div>
    </div>
  );
}

export default App;
