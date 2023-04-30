import './style.css';
import { useNavigate } from 'react-router';
import LastNews from '../../components/LastNews';

function More() {
    const navigate = useNavigate()
    const HandleLink = () => {
        navigate('/admin')
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
        </div>
        <LastNews/>
    </div>
  );
}

export default More;
