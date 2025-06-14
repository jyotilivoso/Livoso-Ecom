import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from '../pages/Home'
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Service from "../pages/Service";
import Hero from "../pages/Hero";
import StatsCard from "../pages/StatsCard";
import Amitav from "../pages/Amitav";
import TaskCreate from "../pages/TaskCreate";
import Alltask from "../pages/Alltask";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />

            },
            {
                path: "Login",
                element: <Login />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "Amu",
                element: <Amitav />
            },
            {
                path: "create-task",
                element: <TaskCreate />
            },
            {
                path: "all-task",
                element: <Alltask />
            },
           
            // {
            //     path: "service",
            //     element: <Service/>
            // },
            // {
            //     path: "Hero",
            //     element: <Hero/>
            // },
            // {
            //     path: "hh",
            //     element: < StatsCard />
            // },
           

        ]
    }
])
export default router