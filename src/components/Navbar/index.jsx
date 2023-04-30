import './style.css';
import NavImg from '../../images/NavImg.png'
import { useRef } from 'react';

function Navbar() {
  const Changer = useRef()
  const Recent = useRef()
  const ModeChanger = () => {
    document.documentElement.style.setProperty("--white", "#1d1d1d")
    document.documentElement.style.setProperty("--greds", "#3F534C")
    document.documentElement.style.setProperty("--card", "#000000")
    document.documentElement.style.setProperty("--black", "#fff")
    Changer.current.style.display = 'none'
    Recent.current.style.display = 'flex'
  }
  const ModeRecent = () => {
    document.documentElement.style.setProperty("--white", "#ffffff")
    document.documentElement.style.setProperty("--greds", "#DAE9E0")
    document.documentElement.style.setProperty("--card", "#F4F5F7")
    document.documentElement.style.setProperty("--black", "#000000")
    Recent.current.style.display = 'none'
    Changer.current.style.display = 'flex'
  }
  return (
    <div className="Navbar">
        <img src={NavImg} alt="NavbarImg" />
        <div className="NavBox">
          <button ref={Changer} onClick={ModeChanger} className="light"><i className='fa-solid fa-moon'></i></button>
          <button ref={Recent} onClick={ModeRecent} className="dark"><i className='fa-solid fa-sun'></i></button>
        </div>
    </div>
  );
}

export default Navbar;
