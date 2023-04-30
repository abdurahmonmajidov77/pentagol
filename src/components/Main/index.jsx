import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetLiga } from '../../redux/liga'
import './style.css'

function Main() {
    const dispatch = useDispatch()
    const dataLiga = useSelector(state => state.liga)
    useEffect(() => {
        dispatch(GetLiga())
    },[])
  return (
    <div className="Main">
        <div className="MainBox">
            <div className="MainBoxHeader">
                <ul>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>Italiya. Seriya A</h4>
                    </li>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>Premier Liga</h4>
                    </li>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>LaLiga</h4>
                    </li>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>Bundesliga</h4>
                    </li>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>Ligue 1 </h4>
                    </li>
                </ul>
            </div>
            <div className="MainBoxBody">
                <ul>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                </ul>
            </div>
        </div>
        <div className="MainBox">
            <div className="MainBoxHeader">
                <ul>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>Italiya. Seriya A</h4>
                    </li>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>Premier Liga</h4>
                    </li>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>LaLiga</h4>
                    </li>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>Bundesliga</h4>
                    </li>
                    <li>
                        <img src="https://picsum.photos/300" alt="" />
                        <h4>Ligue 1 </h4>
                    </li>
                </ul>
            </div>
            <div className="MainBoxBody">
                <ul>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                    <li>
                        <div className="MainItemBox">
                            <img src="https://picsum.photos/301" alt="" />
                            <h4>Barcelona</h4>
                            <h4>3:0</h4>
                            <h4>Liverpool</h4>
                            <img src="https://picsum.photos/302" alt="" />
                        </div>
                        <h5>11.11.2021 23:59</h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Main;
