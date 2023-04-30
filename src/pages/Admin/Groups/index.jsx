import { useRef, useState } from "react"
import axios from "axios"
import { IMAGE_URL } from "../../../utils"

function AdminGroups() {
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
        <div className="AdminGrous main-box">
            <span className="main-btn-back">
                <button className="main-button" onClick={modalOpen}>+ Add Group</button>
            </span>
            {modal ? <div className="overlay" onClick={modalClose}></div> :null}
            {modal ? <form className="main-modal">
                <h1>Add Group</h1>
                <h4>Enter Group's title</h4>
                <input type="text" ref={title} placeholder="Group's title" required/>
                <h4>Select Group Photo</h4>
                {imgLoading ? <p>Loading ...</p> : <input onChange={UploadImage} type="file" required/>}
                <button>+ Add Group</button>
            </form> :null}
            <ul className="main-ul">
                <li className="main-li">
                    <img src="https://picsum.photos/300" alt="" />
                    <h2>Barcelona</h2>
                    <span>
                        <button className="main-edit">Edit</button>
                        <button className="main-del">Delete</button>
                    </span>
                </li>
                <li className="main-li">
                    <img src="https://picsum.photos/300" alt="" />
                    <h2>Real Madrid</h2>
                    <span>
                        <button className="main-edit">Edit</button>
                        <button className="main-del">Delete</button>
                    </span>
                </li>
            </ul>
        </div>
    )
}
export default AdminGroups