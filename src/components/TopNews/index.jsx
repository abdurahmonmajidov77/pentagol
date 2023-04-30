import { useNavigate } from 'react-router';
import './style.css';

function TopNews() {
    const navigate = useNavigate()
    const HandleMore = (e) => {
        console.log(e.target.id)
        navigate('/more')
    }
  return (
    <div className="TopNews">
        <div className="TopNewsBox">
            <ul>
                <li onClick={HandleMore} id={1}>
                    <img src="https://picsum.photos/300" alt="" />
                    <div className="TopNewsItemTexts">
                        <h3>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h3>
                        <p>2 soat oldin</p>
                    </div>
                </li>
                <li>
                    <img src="https://picsum.photos/300" alt="" />
                    <div className="TopNewsItemTexts">
                        <h3>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h3>
                        <p>2 soat oldin</p>
                    </div>
                </li>
                <li>
                    <img src="https://picsum.photos/300" alt="" />
                    <div className="TopNewsItemTexts">
                        <h3>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h3>
                        <p>2 soat oldin</p>
                    </div>
                </li>
                <li>
                    <img src="https://picsum.photos/300" alt="" />
                    <div className="TopNewsItemTexts">
                        <h3>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h3>
                        <p>2 soat oldin</p>
                    </div>
                </li>
                <li>
                    <img src="https://picsum.photos/300" alt="" />
                    <div className="TopNewsItemTexts">
                        <h3>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h3>
                        <p>2 soat oldin</p>
                    </div>
                </li>
                <li>
                    <img src="https://picsum.photos/300" alt="" />
                    <div className="TopNewsItemTexts">
                        <h3>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h3>
                        <p>2 soat oldin</p>
                    </div>
                </li>
                <li>
                    <img src="https://picsum.photos/300" alt="" />
                    <div className="TopNewsItemTexts">
                        <h3>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h3>
                        <p>2 soat oldin</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="TopNewsTable">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
  );
}

export default TopNews;
