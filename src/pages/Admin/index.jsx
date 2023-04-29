import AdminLigas from "./Ligas"
import AdminSidebar from "./Sidebar"
import "./style.css"

function Admin() {
    return(
        <div className="Admin">
            <AdminSidebar/>
            <div className="AdminMain">
                {window.localStorage.getItem("SetMain") == "Ligas" ? <AdminLigas/> : null}
            </div>
        </div>
    )
}
export default Admin