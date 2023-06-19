import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='container'>
      
      <h1>LOGIN</h1>
      <form>
        <input
        type='email'
        name='email'
        required='required'
        placeholder='Email...'
        />
        <br/>
        <input
        type='password'
        name='password'
        required='required'
        placeholder='Password..,'
        /><br/>
        <button type='submit'>
        <Link to="Home">Login</Link>
        </button>
      </form>
      <button>   <Link to="Registration">----SignUp----</Link></button>
   
    </div>
  )
}

export default Login
