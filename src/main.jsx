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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1 className='text-red-700 text-4xl'>Error 404</h1>,
    children: [
      {
        path:"/",
        element : <Home></Home>
      },
      {
        path:"/allSportsEquipment",
        element : <AllSports></AllSports>
      },
      {
        path:"/addEquipment",
        element : <AddEquipment></AddEquipment>
      },
      {
        path:"/myEquipmentList",
        element : <MyEquipment></MyEquipment>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
