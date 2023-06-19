import React from 'react';
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className='container'>
      <h1>Registration</h1>
      <form>
        <input
        type='text'
        name='username'
        required='required'
        placeholder='Username'
        /><br/>
       <input
        type='email'
        name='email'
      
        placeholder='Email'
        /><br/>
        <input
        type='password'
        name='password'
        required='required'     
        placeholder='Password'
        /><br/>
        <input
        type='password'
        name='username'
        required='required'
        placeholder='Confirm-Password'
        /><br/>
        <button type='submit'>
        <Link to="/Home">Submit</Link>  
        </button>   
      </form>
    </div>
  )
}

export default Registration
