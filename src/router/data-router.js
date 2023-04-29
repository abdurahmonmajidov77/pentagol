import { lazy } from "react";
const Admin = lazy(() => import("../pages/Admin/index"))

export const DataRouter = [
    {
        id: 1,
        path: "/admin",
        Element: <Admin/>
    }
]