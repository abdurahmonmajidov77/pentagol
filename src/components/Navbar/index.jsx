import './style.css';
import NavImg from '../../images/NavImg.png'

function Navbar({HandleChanger}) {
  return (
    <div className="Navbar">
        <img src={NavImg} alt="NavbarImg" />
        <button onClick={HandleChanger} className="light"><i className='fa-solid fa-moon'></i></button>
    </div>
  );
}

export default Navbar;
