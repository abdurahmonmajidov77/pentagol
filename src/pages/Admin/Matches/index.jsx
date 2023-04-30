import { useRef, useState } from "react"
import axios from "axios"
import { IMAGE_URL } from "../../../utils"

function AdminMatches() {
    const [modal, setModal] = useState(false)
    const [image, SetImage] = useState(null)
    const [goal, setGoal] = useState("0:0")
    const [imgLoading, SetImgLoading] = useState(false)
    const UploadImage = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("", "")
        SetImgLoading(true)
        const postImage = async() => {
            try {
                const response = await axios.post(`${IMAGE_URL}`, formData)
                SetImage(response?.data.secure_url)
                SetImgLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        postImage()
    }
    const modalOpen = () => {setModal(true)}
    const modalClose = () => {setModal(false)}
    return(
        <div className="AdminMatches main-box">
            <span className="main-btn-back">
                <button className="main-button" onClick={modalOpen}>+ Add Match</button>
            </span>
            {modal ? <div className="overlay" onClick={modalClose}></div> :null}
            {modal ? <form className="main-modal">
                <h1>Add Match</h1>
                <h4>Enter more parametrs</h4>
                <span>
                    <select>
                        <option value="Premier">Real Madrid</option>
                        <option value="Premier">Real Madrid</option>
                    </select>
                    <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)}/>
                    <select>
                        <option value="Premier">Barcelona</option>
                        <option value="Premier">Barcelona</option>
                    </select>
                </span>
                <h4>Select Liga</h4>
                <select>
                    <option value="Premier">Premier</option>
                    <option value="Premier">Premier</option>
                </select>
                <button>+ Add Match</button>
            </form> :null}
            <ul className="main-ul">
                <li className="main-li">
                    <span>
                        <img src="https://picsum.photos/300" alt="img" />
                        <h2>Barcelona</h2>
                        <p>0 : 0</p>
                        <h2>Real Madrid</h2>
                        <img src="https://picsum.photos/300" alt="img" />
                    </span>
                    <h2>Premier Liga</h2>
                    <span>
                        <button className="main-edit">Edit</button>
                        <button className="main-del">Delete</button>
                    </span>
                </li>
                <li className="main-li">
                    <span>
                        <img src="https://picsum.photos/300" alt="img" />
                        <h2>Barcelona</h2>
                        <p>0 : 0</p>
                        <h2>Real Madrid</h2>
                        <img src="https://picsum.photos/300" alt="img" />
                    </span>
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

export default AdminMatches