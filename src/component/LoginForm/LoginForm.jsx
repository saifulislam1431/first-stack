import React from 'react';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const handleLogIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       

    }
    const handleGoogleLogIn = () =>{

    }
    const handleGithubLogIn = () =>{
        
    }
    const handleTwitterLogIn = () =>{
        
    }
    const handleFacebookLogIn = () =>{
        
    }
    return (
        <main>
            <section>
                <div className="hero min-h-screen bg-base-200 myContainer">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" 
                                    name='email'
                                    placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                    name='password'
                                    placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <span className="label-text-alt link link-hover mt-2 font-semibold text-red-400">Forgot password?</span>
                                    </label>
                                </div>
                                <div className="form-control mt-4">
                                    <button className="btn btn-info text-white ">Login</button>
                                </div>
                                <p className='font-semibold text-slate-600 mb-3'>Don't have an account? <Link to="/register" className='font-bold underline text-green-700 '>Register</Link></p>
                                <div>
                                    <hr className='border-gray-300 my-2' />
                                    <p className='text-lg font-bold text-sky-400 mb-4 text-center'>Or login with:</p>
                                    <div className='flex items-center justify-evenly mt-6'>
                                        <button onClick={handleGoogleLogIn}><img src={google} alt="" /></button>
                                        <button onClick={handleFacebookLogIn}><img src={facebook} alt="" /></button>
                                        <button onClick={handleTwitterLogIn}><img src={twitter} alt="" /></button>
                                        <button onClick={handleGithubLogIn}><img src={github} alt="" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoginForm;