import React from 'react';
import Form from './Form';
import './App.css';


function App() {

  const [data, setData] = React.useState({
    email:"",
    password:"",
    confirmPassword:"",
    isChecked:false
  })

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setData(prevData => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value      
    }))
  }
  // console.log(data)

  function handleSubmit(event){
    event.preventDefault();

    if (data.password === data.confirmPassword){
          console.log("Successfully signed up")
        } else {
          console.log("Passwords do not match")
          return
        }
    
    if (data.isChecked){
      console.log("Thanks for signing to our newsletter!")
    }
  }

  return (
      <div className='form--container'>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Email address"
            className='form--input'
            name='email'
            onChange={handleChange} 
            value={data.email}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className='form--input'
            name='password'
            onChange={handleChange}
            value={data.password}
          />
          <input 
            type="password" 
            placeholder="Confirm password"
            className='form--input'
            name='confirmPassword' 
            onChange={handleChange}
            value={data.confirmPassword}
          />
          <br />
          <div className='form--marketing'>
            <input 
              type="checkbox" 
              id="marketing"
              name="isChecked" 
              onChange={handleChange}
              checked={data.isChecked}
            />
            <label htmlFor="marketing"className='label'>I want to join the newsletter</label>
          </div>
          <br />
          <button className='form--button'>Sign up</button>
        </form>
      </div>
  );
}

export default App;
