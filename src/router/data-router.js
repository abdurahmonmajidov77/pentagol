import { lazy } from "react";
import Login from "../pages/Login";
import More from "../pages/More";
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
    },
    {
        id: 3,
<<<<<<< HEAD
        path: "/signinintoadmin",
=======
        path: "/sign",
>>>>>>> 45851b50fd2f3a23c0adfdb3675df60d0bda28ac
        Element: <Login/>
    }
    ,
    {
        id: 4,
        path: "/more",
        Element: <More/>
    }
]