import './style.css';
import NavImg from '../../images/NavImg.png'

function Navbar() {
  return (
    <div className="Navbar">
        <img src={NavImg} alt="NavbarImg" />
        <div className="light">O</div>
    </div>
  );
}

export default Navbar;
