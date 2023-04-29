import { Route, Routes } from "react-router";
import { DataRouter } from "./data-router";
import { Suspense } from "react";
import Loader from "../commons/loader";

export function RoutesComponent() {
    return(
        <>
            <Routes>
                {DataRouter.map(elem => 
                    <Route key={elem.id}
                    path={elem.path}
                    element={<Suspense fallback={<Loader/>}>{elem.Element}</Suspense>}/>
                )}
            </Routes>
        </>
    )
}