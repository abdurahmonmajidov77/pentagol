import { Routes } from "react-router";
import { DataRouter } from "./data-router";
import { Suspense } from "react";

export function RoutesComponent() {
    return(
        <>
            <Routes>
                {DataRouter.map(elem => 
                    <Route key={elem.id}
                    path={elem.path}
                    element={<Suspense>{elem.Element}</Suspense>}/>
                )}
            </Routes>
        </>
    )
}