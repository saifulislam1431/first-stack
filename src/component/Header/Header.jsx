import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { toast } from 'react-toastify';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [getError, setGetError] = useState('');

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successfully!', {
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
                toast.error('Logout Successfully!', {
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

    return (
        <nav className='bg-sky-200 bg-opacity-50 shadow-md sticky top-0 z-50'>
            <div className='flex justify-between items-center myContainer'>
                <div>
                    <h1 className='text-2xl font-extrabold text-gray-600'>First Stack</h1>
                </div>
                <ul className={`lg:flex absolute lg:static   ${isOpen ? 'flex-col top-20 left-0 p-5 text-lg bg-sky-100 w-full duration-200' : '-top-96  left-0 duration-200'}`}>
                    <li className='ml-5 my-3 lg:my-0'>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                    </li>

                    {
                        user && <li className='ml-5 my-3 lg:my-0'>
                            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : 'default')}>Products</NavLink>
                        </li>
                    }

                    {
                        user && <li className='ml-5 my-3 lg:my-0'>
                            <NavLink to="/review" className={({ isActive }) => (isActive ? 'active' : 'default')}>OrderReview</NavLink>
                        </li>
                    }

                    {
                        user && <li className='ml-5 my-3 lg:my-0'>
                            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                        </li>
                    }

                    <li className='ml-5 my-3 lg:my-0'>
                        {
                            user && <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'default')}>Profile</NavLink>
                        }
                    </li>
                    <li className='ml-5 my-3 lg:my-0'>
                        {
                            user ? <>
                                <span className='inline-flex items-center gap-2'>

                                    {user.displayName}
                                    <ArrowLeftOnRectangleIcon onClick={handleLogOut}
                                        className='h-6 w-6 cursor-pointer text-blue-800'
                                    />

                                </span>



                            </>
                                :
                                <>

                                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink>/
                                    <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : 'default')}>Resister</NavLink>
                                </>
                        }
                    </li>

                </ul>

                <div className='lg:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>

                        {
                            isOpen ? <XMarkIcon className="h-8 w-8 text-red-600" /> : <Bars3BottomRightIcon className="h-8 w-8 text-blue-800" />
                        }

                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;