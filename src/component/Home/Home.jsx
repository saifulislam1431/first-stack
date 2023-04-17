import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from "../../assets/onur-binay-9jLI9Ux6IFo-unsplash.jpg";

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1621319332247-ce870cdad56c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-sky-300">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/login" className="btn btn-info"><span className='text-white'>Get Started</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;