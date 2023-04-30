import { useRef, useState } from "react"
import "../index"
import axios from "axios"
import { IMAGE_URL } from "../../../utils"


function AdminLigas() {
    const [modal, setModal] = useState(false)
    const [image, SetImage] = useState(null)
    const title = useRef()
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
        <div className="AdminLigas main-box">
            <span className="main-btn-back">
                <button className="main-button" onClick={modalOpen}>+ Add Liga</button>
            </span>
            {modal ? <div className="overlay" onClick={modalClose}></div> :null}
            {modal ? <form className="main-modal">
                <h1>Add Liga</h1>
                <h4>Enter Liga's title</h4>
                <input type="text" ref={title} placeholder="Liga's title" required/>
                <h4>Enter Liga's photo</h4>
                {imgLoading ? <p>Loading ...</p> : <input on type="file" required onChange={UploadImage}/>}
                <button>+ Add liga</button>
            </form> :null}
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