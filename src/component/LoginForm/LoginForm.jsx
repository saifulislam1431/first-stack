import React, { useContext, useRef, useState } from 'react';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const { user, signUser, forgetPassword, googleSignIn, githubSignIn } = useContext(AuthContext);

    const [isShow, setIsShow] = useState(false);

    const [type, setIsType] = useState('password')

    const [getError, setGetError] = useState('');
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleTypeText = () => {
        setIsType('text');

    }
    const handleTypePass = () => {
        setIsType('password');

    }

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                toast.success('Welcome Back!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                form.reset();
                setGetError('')
                navigate('/')
            })
            .catch(error => {
                setGetError(error.message);

            })




    }
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                toast.success('Welcome Back!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                form.reset();
                setGetError('')
            })
            .catch(error => {
                setGetError(error.message);

            })

    }
    const handleGithubLogIn = () => {
        githubSignIn()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            toast.success('Welcome Back!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            form.reset();
            setGetError('')
        })
        .catch(error => {
            setGetError(error.message);

        })

    }
    const handleTwitterLogIn = () => {

    }
    const handleFacebookLogIn = () => {

    }
    const passResetEmail = () => {
        const email = emailRef.current.value;
        forgetPassword(email)
            .then(() => {
                toast.success('Password reset email sent!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch(error => {
                setGetError(error.message);
            })

    }
    return (
        <main>
            <section>
                <div className="hero min-h-screen bg-base-200 myContainer">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold"><span className='text-sky-800'>Login</span> now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name='email' ref={emailRef}
                                        placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='flex items-center'>
                                        <input type={type}
                                            name='password'
                                            placeholder="password" className="input input-bordered" required />
                                        <span onClick={() => setIsShow(!isShow)} className='relative right-8'>
                                            {
                                                isShow ? <EyeSlashIcon className='h-6 w-6 text-sky-600' onClick={handleTypePass} /> : <EyeIcon className='h-6 w-6 text-sky-600' onClick={handleTypeText} />
                                            }

                                        </span>
                                    </div>

                                    <label className="label">
                                        <span onClick={passResetEmail} className="label-text-alt link link-hover mt-2 font-semibold text-red-400">Forgot password?</span>
                                    </label>
                                </div>
                                <p className='text-red-600 font-medium'>{getError}</p>
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