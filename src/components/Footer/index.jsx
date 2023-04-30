import './style.css';
import FooterImg from '../../images/NavImg.png'

function Footer() {
  return (
    <div className="Footer">
        <ul>
            <li>
                <img src={FooterImg} alt="FooterImg" />
            </li>
            <li>
                <h4>Main</h4>
                <h4>Match center</h4>
                <h4>Football</h4>
                <h4>Tennis</h4>
                <h4>Cybersport</h4>
            </li>
            <li>
                <h4>Main</h4>
                <h4>Match center</h4>
                <h4>Football</h4>
                <h4>Tennis</h4>
                <h4>Cybersport</h4>
            </li>
            <li>
                <h4>Main</h4>
                <h4>Match center</h4>
                <h4>Football</h4>
                <h4>Tennis</h4>
                <h4>Cybersport</h4>
            </li>
            <li>
                <div className="FootBrandBox">
                    <i className='fa-brands fa-twitter'></i>
                    <i className='fa-brands fa-youtube'></i>
                    <i className='fa-brands fa-vkontakt'>VK</i>
                </div>
                <div className="FootBrandBox">
                    <i className='fa-brands fa-skype'></i>
                    <i className='fa-brands fa-instagram'></i>
                    <i className='fa-brands fa-facebook'></i>
                    <i className='fa-brands fa-telegram'></i>
                </div>
            </li>
        </ul>
        <h1>© 2023 Footboll. All rights reserved</h1>
    </div>
  );
}

export default Footer;
