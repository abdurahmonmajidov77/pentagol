import "../index"

function AdminLigas() {
    return(
        <div className="AdminLigas main-box">
            <span className="main-btn-back">
                <button className="main-button">+ Add Liga</button>
            </span>
            <ul className="main-ul">
                <li className="main-li">
                    <img src="https://picsum.photos/300" alt="img" />
                    <h2>Premier Liga</h2>
                    <span>
                        <button className="main-edit">Edit</button>
                        <button className="main-del">Delete</button>
                    </span>
                </li>
                <li className="main-li">
                    <img src="https://picsum.photos/300" alt="img" />
                    <h2>Premier Liga</h2>
                    <span>
                        <button className="main-edit">Edit</button>
                        <button className="main-del">Delete</button>
                    </span>
                </li>
                <li className="main-li">
                    <img src="https://picsum.photos/300" alt="img" />
                    <h2>Premier Liga</h2>
                    <span>
                        <button className="main-edit">Edit</button>
                        <button className="main-del">Delete</button>
                    </span>
                </li>
                <li className="main-li">
                    <img src="https://picsum.photos/300" alt="img" />
                    <h2>Premier Liga</h2>
                    <span>
                        <button className="main-edit">Edit</button>
                        <button className="main-del">Delete</button>
                    </span>
                </li>
            </ul>
        </div>
    )
}
export default AdminLigas