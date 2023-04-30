import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { IMAGE_URL } from "../../../utils"
import { useDispatch, useSelector } from "react-redux"
import { DeleteGroup, GetGroup, PostGroup } from "../../../redux/group"

function AdminGroups() {
    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [image, SetImage] = useState(null)
    const title = useRef()
    const [imgLoading, SetImgLoading] = useState(false)
    const dispatch = useDispatch()
    const dataGroup = useSelector(state => state.group)
    useEffect(() => {
        dispatch(GetGroup())
    }, [])
    console.log(dataGroup);
    const modalOpen = () => {setModal(true)}
    const modalClose = () => {setModal(false);setModalEdit(false)}
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
    const Add = async(e) => {
        e.preventDefault();
        const body = {
          name: title.current.value,
          img: image
        }
        const config = {
            headers:{
                Authorization: `Bearer ${window.localStorage.getItem("AuthToken")}` 
            }
        }
        await dispatch(PostGroup({body, config}))
        modalClose()
        dispatch(GetGroup())
    }
    const Del = async(e) => {
        const config = {
            headers:{
                Authorization: `Bearer ${window.localStorage.getItem("AuthToken")}` 
            }
        }
        const id = e.target.value
        await dispatch(DeleteGroup({id,config}))
        modalClose()
        dispatch(GetGroup())
    }

    return(
        <div className="AdminGrous main-box">
            <span className="main-btn-back">
                <button className="main-button" onClick={modalOpen}>+ Add Group</button>
            </span>
            {modal || modalEdit ? <div className="overlay" onClick={modalClose}></div> :null}
            {modal ? <form className="main-modal" onSubmit={Add}>
                <h1>Add Group</h1>
                <h4>Enter Group's title</h4>
                <input type="text" ref={title} placeholder="Group's title" required/>
                <h4>Select Group Photo</h4>
                {imgLoading ? <p>Loading ...</p> : <input onChange={UploadImage} type="file"/>}
                <button>+ Add Group</button>
            </form> :null}
            {modalEdit ? <form className="main-modal">
                <h1>Edit Group</h1>
                <h4>Edit Group's title</h4>
                <input type="text" ref={title} placeholder="Group's title" required/>
                <h4>Edit Group Photo</h4>
                {imgLoading ? <p>Loading ...</p> : <input onChange={UploadImage} type="file" required/>}
                <button>+ Edit Group</button>
            </form> :null}
            <ul className="main-ul">
                {dataGroup.getGroup.Success == true ? 
                dataGroup.getGroup.Data.length > 0 ?
                dataGroup.getGroup.Data.map(e => 
                <li className="main-li" key={e.id}>
                    <img src={e.imgPath} alt="img" />
                    <h2>{e.name}</h2>
                    <span>
                        <button value={e.id} className="main-edit" onClick={() => setModalEdit(true)}>Edit</button>
                        <button value={e.id} className="main-del" onClick={Del}>Delete</button>
                    </span>
                </li>
                ) : <h2>No Groups here yet</h2>
            : dataGroup.getGroup.Loading == true ?  <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataGroup.getGroup.Error == true ? <h2 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h2> : null}
            </ul>
        </div>
    )
}
export default AdminGroups