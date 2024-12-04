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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1 className='text-red-700 text-4xl'>Error 404</h1>,
    children: [
      {
        path:"/",
        element : <Home></Home>,
        loader : () => fetch('http://localhost:5000/sportslimit')
      },
      {
        path:"/allSportsEquipment",
        element : <AllSports></AllSports>,
        loader : () => fetch('http://localhost:5000/sportsall')
      },
      {
        path:"/addEquipment",
        element : <AddEquipment></AddEquipment>
      },
      {
        path:"/myEquipmentList",
        element : <MyEquipment></MyEquipment>
      },
      {
        path:"/details/:id",
        element : <Details></Details>,
        loader : ({params}) => fetch(`http://localhost:5000/sportsall/${params.id}`)

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
