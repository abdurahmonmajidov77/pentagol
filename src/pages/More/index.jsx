import './style.css';
import { useNavigate } from 'react-router';
import LastNews from '../../components/LastNews';

function More() {
    const navigate = useNavigate()
    const HandleLi = () => {
        navigate('/more')
    }
  return (
    <div className="More">
        <div className="MoreMain">    
            <div className="MoreBox">
                <h4>2 soat oldin</h4>
                <h1>Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib boradi: bo'g'inlar oldidagi barcha maketlar</h1>
                <img src="https://picsum.photos/300" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur inventore ullam voluptatibus dignissimos, autem cum suscipit sunt sapiente quod perferendis modi accusantium, ipsum repellat similique atque unde, alias voluptas!</p>
            </div>
            <div className="MoreTable">
                <div className="MoreMainTap">
                    <h3>Asosiy</h3>
                    <ul>
                        <li onClick={HandleLi}>
                            <h4>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h4>
                            <p>12.05.2021  12:54</p>
                        </li>
                        <li onClick={HandleLi}>
                            <h4>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h4>
                            <p>12.05.2021  12:54</p>
                        </li>
                        <li onClick={HandleLi}>
                            <h4>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h4>
                            <p>12.05.2021  12:54</p>
                        </li>
                        <li onClick={HandleLi}>
                            <h4>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h4>
                            <p>12.05.2021  12:54</p>
                        </li>
                    </ul>
                </div>
                <div className="MoreMainTap">
                    <h3>Asosiy</h3>
                    <ul>
                        <li onClick={HandleLi}>
                            <h4>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h4>
                            <p>12.05.2021  12:54</p>
                        </li>
                        <li onClick={HandleLi}>
                            <h4>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h4>
                            <p>12.05.2021  12:54</p>
                        </li>
                        <li onClick={HandleLi}>
                            <h4>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h4>
                            <p>12.05.2021  12:54</p>
                        </li>
                        <li onClick={HandleLi}>
                            <h4>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</h4>
                            <p>12.05.2021  12:54</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <LastNews/>
    </div>
  );
}

export default More;
