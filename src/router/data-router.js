import { lazy } from "react";
const Home = lazy(() => import ("../pages/Home"))
const Admin = lazy(() => import ("../pages/Admin/index"))
const Login = lazy(() => import("../pages/Login/index"))
const More = lazy(() => import("../pages/More"))
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
        path: "/sign",
        Element: <Login/>
    }
    ,
    {
        id: 4,
        path: "/more",
        Element: <More/>
    }
]