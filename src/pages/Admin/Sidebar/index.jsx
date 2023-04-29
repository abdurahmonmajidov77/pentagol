import { NavLink } from "react-router-dom"
import "./style.css"

function AdminSidebar() {
    const SetMain = async(e) => {
        await window.localStorage.setItem("SetMain", e.target.id)
        window.location.reload()
    }
    return(
        <div className="AdminSidebar">
            <img src="https://picsum.photos/300" alt="img" />
            <NavLink to="/">Home</NavLink>
            <p id="Ligas" onClick={SetMain}>Ligas</p>
            <p id="Matches" onClick={SetMain}>Matches</p>
            <p id="News" onClick={SetMain}>News</p>
            <p id="Points" onClick={SetMain}>Points</p>
        </div>
    )
}
export default AdminSidebar