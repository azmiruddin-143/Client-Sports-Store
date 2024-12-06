import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componenets/MainRoot/Root';
import Home from './Componenets/HomePages/Home';
import AllSports from './Componenets/AllSports/AllSports';
import AddEquipment from './Componenets/AddEquipment/AddEquipment';
import MyEquipment from './Componenets/MyEquipment/MyEquipment';
import Details from './Componenets/Details/Details';
import Login from './Componenets/LoginPage/Login';
import Register from './Componenets/RegisterPage/Register';
import AuthProvider from './Componenets/AuthProvider/AuthProvider';
import PrivateRoot from './Componenets/PrivateRoot/PrivateRoot';
import Update from './Componenets/UpdateCard/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1 className='text-red-700 text-4xl'>Error 404</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/sportslimit')
      },
      {
        path: "/allSportsEquipment",
        element: <AllSports></AllSports>,
        loader: () => fetch('http://localhost:5000/sportsall')
      },
      {
        path: "/addEquipment",
        element: <PrivateRoot><AddEquipment></AddEquipment></PrivateRoot>
      },
      {
        path: "/myEquipmentList",
        element: <PrivateRoot><MyEquipment></MyEquipment></PrivateRoot>
      },
      {
        path: "/details/:id",
        element: <PrivateRoot><Details></Details></PrivateRoot>,
        loader: ({ params }) => fetch(`http://localhost:5000/sportsall/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/myequipment/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>
)
