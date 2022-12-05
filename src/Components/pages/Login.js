import React, { useState, useContext } from 'react';
import { UserContext } from "../../contexts"
// import jwt_decode from "jwt-decode"


import { validateEmail } from '../../utils/helpers';


const Login = ({handlePageChange}) => {
  
  // const [ userState, dispatch ] = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("tried to submit")
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if(!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    }
  }
 
  return (
    <section className="diagonal-bar d-flex justify-content-around align-items-center p-5 vh-100">
      <form className=" card-border card p-5 d-flex" id="logInForm" onSubmit ={handleSubmit}>
        <h1 className= "text-center pb-4" data-testid='h1tag'>Log in</h1>
        
        <label className="p-2" htmlFor="email">Email address :</label>
        <input className="m-2" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur ={handleChange}
          type="email" 
          name="email" />

        <label className="p-2" htmlFor="name">Password :</label>
        <input className="m-2" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur ={handleChange}
          type="password" 
          name="name"/>


        <button className="btn m-2">login</button>
        
        <p>{errorMessage}</p>

     
      </form>
    </section>
  )
}

export default Login