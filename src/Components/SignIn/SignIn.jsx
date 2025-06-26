import React, { use, } from 'react';
import signinLottie from '../../assets/sign in.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Context/AuthContext';
import SignInSocial from '../../Pages/shared/SignInSocial';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {
 const {SignInUser} = use(AuthContext);

 const location = useLocation();
 console.log('signin the page',location);
 const navigate = useNavigate();
 const from = location.state || '/';

   const handleSignIn = e => {
     e.preventDefault ();
     const form= e.target;
     const email = form.email.value;
     const password= form.password.value;
     console.log(email, password);

    //  sign in user
    SignInUser(email, password)
    .then(result => {
      console.log(result);
      navigate(from);
    })
    .catch(error => {
      console.log(error)
    })
     

   }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">

          <Lottie style={{ width: "300px" }} animationData={signinLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <h1 className='text-2xl font-bold'>Sign in Now</h1>
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
            <SignInSocial from={from}> </SignInSocial>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;