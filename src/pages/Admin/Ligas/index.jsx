import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { IMAGE_URL } from "../../../utils"
import { DeleteLiga, GetLiga, PostLiga, PutLiga } from "../../../redux/liga"
import { useDispatch, useSelector } from "react-redux"


function AdminLigas() {
    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [image, SetImage] = useState(null)
    const [titleEdit, setTitleEdit] = useState()
    const title = useRef()
    const id  = useRef()
    const [imgLoading, SetImgLoading] = useState(false)
    const dispatch = useDispatch()
    const dataLiga = useSelector(state => state.liga)
    useEffect(() => {
        dispatch(GetLiga())
    }, [])
    const UploadImage = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("ml_default", "fzgqhpkb")
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
    const modalClose = () => {setModal(false);setModalEdit(false);SetImgLoading(false)}
    const Add = async(e) => {
        e.preventDefault();
        const body = {
          name: title.current.value,
          imgPath: image
        }
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        await dispatch(PostLiga({body, config}))
        modalClose()
        dispatch(GetLiga())
    }
    const Del = async(e) => {
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        const setid = e.current.value
        await dispatch(DeleteLiga({setid,config}))
        modalClose()
        dispatch(GetLiga())
    }
    const Edit = async(e) => {
        e.preventDefault();
        const body = {
          name: titleEdit,
          imgPath: image
        }
        const setid = id.current.value
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        await dispatch(PutLiga({setid,body, config}))
        modalClose()
        dispatch(GetLiga())
    }
    return(
        <div className="AdminLigas main-box">
            <span className="main-btn-back">
                <button className="main-button" onClick={modalOpen}>+ Add Liga</button>
            </span>
            {modal || modalEdit ? <div className="overlay" onClick={modalClose}></div> :null}
            {modal ? <form className="main-modal" onSubmit={Add}>
                <h1>Add Liga</h1>
                <h4>Enter Liga's title</h4>
                <input type="text" ref={title} placeholder="Liga's title" required/>
                <h4>Enter Liga's photo</h4>
                {imgLoading ? <p>Loading ...</p> : <input type="file" required onChange={UploadImage}/>}
                <button>+ Add liga</button>
            </form> :null}
            {modalEdit ? <form className="main-modal" onSubmit={Edit}>
                <h1>Edit Liga</h1>
                <h4>Edit Liga's title</h4>
                <input type="text" value={titleEdit} onChange={(e) => setTitleEdit(e.target.value)} placeholder="Liga's title" required/>
                <h4>Edit Liga's photo</h4>
                {imgLoading ? <p>Loading ...</p> : <input type="file" required onChange={UploadImage}/>}
                <button>+ Edit liga</button>
            </form> :null}
            <ul className="main-ul">
                {dataLiga.getLiga.Success == true ? 
                dataLiga.getLiga.Data.length > 0 ?
                dataLiga.getLiga.Data.map(e => 
                <li className="main-li">
                    <img src={e.img} alt="img" />
                    <h2>{e.title}</h2>
                    <span>
                        <button value={e.id} className="main-edit" onClick={(el) => {id.current.value = el.target.value;setModalEdit(true);}}>Edit</button>
                        <button value={e.id} className="main-del" onClick={(el) => {id.current.value = el.target.value;Del()}}>Delete</button>
                    </span>
                </li>
                ) : <h2>No Liga here yet</h2>
            : dataLiga.getLiga.Loading == true ?  <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataLiga.getLiga.Error == true ? <h2 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h2> : null}
            </ul>
        </div>
    )
}
export default AdminLigas