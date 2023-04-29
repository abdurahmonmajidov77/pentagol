import { NavLink } from "react-router-dom"
import "./style.css"
import mainImg from "../../../images/NavImg.png"

function AdminSidebar() {
    const SetMain = async(e) => {
        await window.localStorage.setItem("SetMain", e.target.id)
        window.location.reload()
    }
    return(
        <>
            <div className="AdminSidebar">
                <img src={mainImg} alt="img" />
                <NavLink className="SidebarText" to="/">Home</NavLink>
                <p className="SidebarText" id="Ligas" onClick={SetMain}>Ligas</p>
                <p className="SidebarText" id="Matches" onClick={SetMain}>Matches</p>
                <p className="SidebarText" id="News" onClick={SetMain}>News</p>
                <p className="SidebarText" id="Points" onClick={SetMain}>Points</p>
            </div>
            <div className="AdminTop">
                <h1>{window.localStorage.getItem("SetMain")}</h1>
            </div>
        </>
    )
}
export default AdminSidebar