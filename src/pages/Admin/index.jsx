import { useNavigate } from "react-router"
import AdminGroups from "./Groups"
import AdminLigas from "./Ligas"
import AdminMatches from "./Matches"
import AdminNews from "./News"
import AdminSidebar from "./Sidebar"
import "./style.css"
import { useEffect } from "react"

function Admin() {
    const navigate = useNavigate() 
    useEffect(() => {  
        !window.localStorage.getItem("AuthToken") ? navigate("/sign") : null
    })
    return(
        <div className="Admin">
            <AdminSidebar/>
            <div className="AdminMain">
                {window.localStorage.getItem("SetMain") == "Ligas" ? <AdminLigas/> :
                window.localStorage.getItem("SetMain") == "Matches" ? <AdminMatches/> : 
                window.localStorage.getItem("SetMain") == "Groups" ? <AdminGroups/> : 
                window.localStorage.getItem("SetMain") == "News" ? <AdminNews/>
                : null}
            </div>
        </div>
    )
}
export default Admin