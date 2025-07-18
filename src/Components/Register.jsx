import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../assets/register.json'
import { AuthContext } from './Context/AuthContext';
const Register = () => {
  const {createUser} = use(AuthContext);
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // createUser 
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  } 
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
             <Lottie style={{width:"300px"}} animationData={registerLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <h1 className='text-2xl font-bold'>Please Register</h1>
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
            
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;