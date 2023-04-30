import { useRef, useState } from "react"
import axios from "axios"
import { IMAGE_URL } from "../../../utils"

function AdminNews() {
    const [modal, setModal] = useState(false)
    const [image, SetImage] = useState(null)
    const title = useRef()
    const text = useRef()
    const date = useRef()
    const [imgLoading, SetImgLoading] = useState(false)
    const UploadImage = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "fzgqhpkb")
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
        <div className="AdminNews main-box">
            <span className="main-btn-back">
                <button className="main-button" onClick={modalOpen}>+ Add News</button>
            </span>
            {modal ? <div className="overlay" onClick={modalClose}></div> :null}
            {modal ? <form className="main-modal">
                <h1>Add News</h1>
                <h4>Enter New's title</h4>
                <input type="text" ref={title} placeholder="New's title" required/>
                <h4>Enter New's text</h4>
                <input type="text" ref={text} placeholder="New's text" required/>
                <h4>Enter New's date</h4>
                <input type="datetime-local" ref={date} required/>
                <h4>Select New's Photo</h4>
                {imgLoading ? <p>Loading ...</p> : <input onChange={UploadImage} type="file" required/>}
                <button>+ Add News</button>
            </form> :null}
            <ul className="main-ul">
                <li className="main-li">
                    <img src="https://picsum.photos/300" alt="img" />
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate in laborum molestiae molestias, corporis quas fugit aliquam sit! Beatae.</p>
                    <p>12.02.1022</p>
                    <span>
                        <button className="main-edit">Edit</button>
                        <button className="main-del">Delete</button>
                    </span>
                </li>
            </ul>
        </div>
    )
}
export default AdminNews