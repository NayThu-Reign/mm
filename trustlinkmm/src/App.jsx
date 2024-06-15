import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Login from './pages/Login'
import Login from './pages/Login'

// import Home from './pages/Home'
import Layout from './Layout'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'
import CustomizedTable from './pages/CustomizedTable'
import ViewTickets from './pages/ViewTickets'
import Profile from './pages/Profile'
import UpdateProfile from './pages/UpdateProfile'
import ChangePassword from './pages/ChangePassword'
import ProtectedRoute from './providers/ProtectedRoute'
import SubmitTicket from './pages/SubmitTicket'
import TicketDetail from './pages/TicketDetail'
import StatusReport from './pages/StatusReport'
import MainDropdown from './pages/MainDropdown'

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
        path: "/view-tickets",
        element: (
          <ProtectedRoute>
            <ViewTickets />
          </ProtectedRoute>
        )
      },
      {
        path: "/tickets/detail/:id",
        element: (
          <TicketDetail />
        )
      },
      {
        path: "/table",
        element: <CustomizedTable />
      },
      {
        path: "/submit-tickets",
        element: <SubmitTicket />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/work_report",
        element: <StatusReport />
      },

      {
        path: "/drop-down",
        element: <MainDropdown />
      },
      // {
      //   path: "/view-tickets",
      //   element: <ViewTickets />
      // },
      // {
      //   path: "/client/profile",
      //   element: <Profile />,
      //   children: [
      //     // {
      //     //   path: "/client/",
      //     //   element: <Profile />
      //     // },
      //     {
      //       path: "/client/update-profile",
      //       element: <UpdateProfile />
      //     },
      //     {
      //       path: "/client/change-password",
      //       element: <ChangePassword />
      //     },

      //   ]
      // }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} />
}