import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { IMAGE_URL } from "../../../utils"
import { useDispatch, useSelector } from "react-redux"
import { DeleteMatch, GetMatch, PostMatch, PutMatch } from "../../../redux/match"

function AdminMatches() {
    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [goal, setGoal] = useState("0:0")
    const id = useRef()
    const title = useRef()
    const modalOpen = () => {setModal(true)}
    const modalClose = () => {setModal(false);setModalEdit(false)}
    const dispatch = useDispatch()
    const dataMatch = useSelector(state => state.match)
    //CRUD
    useEffect(() => {
        dispatch(GetMatch())
    }, [])
    console.log(dataMatch);
    const Add = async(e) => {
        e.preventDefault();
        const body = {
          name: title.current.value
        }
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        await dispatch(PostMatch({body, config}))
        modalClose()
        dispatch(GetMatch())
    }
    const Del = async(e) => {
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        const setid = e.current.value
        await dispatch(DeleteMatch({setid,config}))
        modalClose()
        dispatch(GetMatch())
    }
    const Edit = async(e) => {
        e.preventDefault();
        const body = {
          name: title.current.value
        }
        const setid = id.current.value
        const config ={headers: {
            'ngrok-skip-browser-warning': 'true',
            'Authorization': `Bearer ${window.localStorage.getItem("AuthToken")}`,
            'Content-Type': 'application/json'
        }}
        await dispatch(PutMatch({setid, body, config}))
        modalClose()
        dispatch(GetMatch())
    }
    //
    return(
        <div className="AdminMatches main-box">
            <span className="main-btn-back">
                <button className="main-button" onClick={modalOpen}>+ Add Match</button>
            </span>
            {modal || modalEdit ? <div className="overlay" onClick={modalClose}></div> :null}
            {modal ? <form className="main-modal" onSubmit={Add()}>
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
            {modalEdit ? <form className="main-modal" onSubmit={Edit()}>
                <h1>Edit Match</h1>
                <h4>Edit more parametrs</h4>
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
                <h4>Edit Liga</h4>
                <select>
                    <option value="Premier">Premier</option>
                    <option value="Premier">Premier</option>
                </select>
                <button>+ Edit Match</button>
            </form> :null}
            <ul className="main-ul">
                {dataMatch.getMatch.Success == true ? 
                dataMatch.getMatch.Data.length > 0 ?
                dataMatch.getMatch.Data.map(e => 
                <li className="main-li">
                    <span>
                        <img src={e.img} alt="img" />
                        <h2>{e.title}</h2>
                        <p>{e.text}</p>
                        <h2>{e.title}</h2>
                        <img src={e.img} alt="img" />
                    </span>
                    <h2>{e.liga}</h2>
                    <span>
                        <button value={e.id} className="main-edit" onClick={(el) => {setModalEdit(true);id.current.value = el.target.value;}}>Edit</button>
                        <button value={e.id} className="main-del" onClick={(el) => {id.current.value = el.target.value;Del()}}>Delete</button>
                    </span>
                </li>
                ) : <h2>No Match here yet</h2>
            : dataMatch.getMatch.Loading == true ?  <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataMatch.getMatch.Error == true ? <h2 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h2> : null}
            </ul>
        </div>
    )
}

export default AdminMatches