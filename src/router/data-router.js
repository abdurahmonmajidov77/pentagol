import { lazy } from "react";
const Home = lazy(() => import ("../pages/Home"))
const Admin = lazy(() => import ("../pages/Admin/index"))
const Login = lazy(() => import("../pages/Login/index"))
const More = lazy(() => import("../pages/More"))
const Home = lazy(() => import("../pages/Home/index"))
export const DataRouter = [
    {
        id: 1,
        path: "/admin",
        Element: <Admin/>
    },
    {
        id: 2,
        path: "/",
        Element: <Home/>
<<<<<<< HEAD
    },
    {
        id: 3,
        path: "/sign",
        Element: <Login/>
    }
    ,
    {
        id: 4,
        path: "/more",
        Element: <More/>
=======
>>>>>>> 4b711196beb20e9f027ca6e1036233d31b359d49
    }
]