import { lazy } from "react";
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
    }
]