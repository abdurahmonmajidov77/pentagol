import { lazy } from "react";
import Login from "../pages/Login";
import More from "../pages/More";
const Home = lazy(() => import ("../pages/Home"))
const Admin = lazy(() => import ("../pages/Admin/index"))

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
        path: "/signinintoadmin",
        Element: <Login/>
    }
    ,
    {
        id: 4,
        path: "/more",
        Element: <More/>
    }
]