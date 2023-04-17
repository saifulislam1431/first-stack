import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-sky-200 shadow-md sticky top-0'>
            <div className='flex justify-between items-center myContainer'>
                <div>
                    <h1 className='text-2xl font-extrabold text-gray-600'>First Stack</h1>
                </div>
                <ul className={`lg:flex absolute lg:static   ${isOpen ? 'flex-col top-20 left-0 p-5 text-lg bg-sky-100 w-full duration-200' : '-top-96  left-0 duration-200'}`}>
                    <li className='ml-5 my-3 lg:my-0'>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                    </li>

                    <li className='ml-5 my-3 lg:my-0'>
                        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'default')}>Products</NavLink>
                    </li>

                    <li className='ml-5 my-3 lg:my-0'>
                        <NavLink to="/review">OrderReview</NavLink>
                    </li>

                    <li className='ml-5 my-3 lg:my-0'>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                    </li>

                    <li className='ml-5 my-3 lg:my-0'>
                        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'default')}>Profile</NavLink>
                    </li>
                    <li className='ml-5 my-3 lg:my-0'>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink>/
                        <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : 'default')}>Resister</NavLink>
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