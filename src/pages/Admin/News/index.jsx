import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { IMAGE_URL } from "../../../utils"
import { useDispatch, useSelector } from "react-redux"
import { DeleteNews, GetNews, PostNews, PutNews } from "../../../redux/news"

function AdminNews() {
    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [image, SetImage] = useState(null)
    const title = useRef()
    const text = useRef()
    const date = useRef()
    const id = useRef()
    const [titleEdit, setTitleEdit] = useState()
    const [textEdit, setTextEdit] = useState()
    const [dateEdit, setDateEdit] = useState()
    const [imgLoading, SetImgLoading] = useState(false)
    const dispatch = useDispatch()
    const dataNews = useSelector(state => state.news)
    useEffect(() => {
        dispatch(GetNews())
    }, [])
    console.log(dataNews);
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
    const modalClose = () => {setModal(false);setModalEdit(false)}
    //CRUD
    const Add = async(e) => {
        e.preventDefault();
        const body = {
          name: title.current.value,
          text: text.current.value,
          date: date.current.value,
          imgPath: image
        }
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        await dispatch(PostNews({body, config}))
        modalClose()
        dispatch(GetNews())
    }
    const Del = async() => {
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        const setid = id.current.value
        await dispatch(DeleteNews({setid,config}))
        modalClose()
        dispatch(GetNews())
    }
    const Edit = async(e) => {
        e.preventDefault();
        const body = {
            name: titleEdit,
            text: textEdit,
            date: dateEdit,
            imgPath: image
        }
        const setid = id.current.value
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        await dispatch(PutNews({setid,body, config}))
        modalClose()
        dispatch(GetNews())
    }
    //
    return(
        <div className="AdminNews main-box">
            <span className="main-btn-back">
                <button className="main-button" onClick={modalOpen}>+ Add News</button>
            </span>
            {modal || modalEdit ? <div className="overlay" onClick={modalClose}></div> :null}
            {modal ? <form className="main-modal" onSubmit={Add}>
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
            {modalEdit ? <form className="main-modal" onSubmit={Edit}>
                <h1>Edit News</h1>
                <h4>Edit New's title</h4>
                <input type="text" value={titleEdit} placeholder="New's title" required onChange={(e) => setTitleEdit(e.target.value)}/>
                <h4>Edit New's text</h4>
                <input type="text" value={textEdit} placeholder="New's text" required onChange={(e) => setTextEdit(e.target.value)}/>
                <h4>Edit New's date</h4>
                <input type="datetime-local" value={dateEdit} required onChange={(e) => setDateEdit(e.target.value)}/>
                <h4>Edit New's Photo</h4>
                {imgLoading ? <p>Loading ...</p> : <input onChange={UploadImage} type="file" required/>}
                <button>+ Edit News</button>
            </form> :null}
            <ul className="main-ul">
                {dataNews.getNews.Success == true ? 
                dataNews.getNews.Data.length > 0 ?
                dataNews.getNews.Data.map(e => 
                <li className="main-li">
                    <img src={e.img} alt="img" />
                    <h2>{e.title}</h2>
                    <p>{e.text}</p>
                    <p>{e.date}</p>
                    <span>
                        <button value={e.id} className="main-edit" onClick={(el) => {id.current.value = el.target.value;setModalEdit(true);}}>Edit</button>
                        <button value={e.id} className="main-del" onClick={(el) => {id.current.value = el.target.value;Del();}}>Delete</button>
                    </span>
                </li>
                ) : <h2>No news here yet</h2>
            : dataNews.getNews.Loading == true ?  <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataNews.getNews.Error == true ? <h2 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h2> : null}
            </ul>
        </div>
    )
}
export default AdminNews