import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './pages/Login'

// import Home from './pages/Home'
import Layout from './Layout'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'
import CustomizedTable from './pages/CustomizedTable'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/table",
        element: <CustomizedTable />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} />
}