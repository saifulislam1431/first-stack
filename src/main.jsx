import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import LoginForm from './component/LoginForm/LoginForm';
import AuthProviders from './AuthProviders/AuthProviders';
import Products from './component/Products/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element: <LoginForm></LoginForm>
      },
      {
        path: "/products",
        element: <Products></Products>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
