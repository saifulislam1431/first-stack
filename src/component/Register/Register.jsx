import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Register = () => {
    const { user, newUser } = useContext(AuthContext);
    const [isShow, setIsShow] = useState(false);
    const [getError, setGetError] = useState('')

    const [type, setIsType] = useState('password')

    const navigate = useNavigate();

    const handleTypeText = () => {
        setIsType('text');

    }
    const handleTypePass = () => {
        setIsType('password');

    }
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        newUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                verifyEmail(res.user)
                console.log(loggedUser);
                toast.success('Account created successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                updateName(res.user , name);
                form.reset();
                setGetError('')
                navigate('/')
            })
            .catch(error => {
                setGetError(error.message);

            })

        const verifyEmail = (user) => {
            sendEmailVerification(user)
                .then(() => {
                    toast.success('Email verification sent!', {
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

        }
    }
    const updateName = (currenUser, name) => {
        updateProfile(currenUser, {
            displayName: name
        })
            .then(() => {
                console.log("User name updated")
            })
            .catch((error) => {
                setGetError(error.message);
            })
    }
    return (
        <main>
            <section>
                <div className="hero min-h-screen bg-base-200 myContainer">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold"><span className='text-sky-800'>Register</span> now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <input type="text"
                                        name='username'
                                        placeholder="username" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name='email'
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
                                </div>
                                <div className="form-control my-5">
                                    <button className="btn btn-info text-white ">Register</button>
                                </div>
                                <p className='text-red-500 font-medium'>{getError}</p>
                                <p className='font-semibold text-slate-600 mb-3'>Already have an account? <Link to="/login" className='font-bold underline text-green-700 '>LogIn</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;