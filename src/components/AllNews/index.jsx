import './style.css';
import { useNavigate } from 'react-router'

function AllNews() {
  const navigate = useNavigate()
  const HandleLi = () => {
    navigate('/more')
  }
  const HandleAll = () => {
    
  }
  return (
    <div className="AllNews">
      <h1>Barcha yangiliklar</h1>
      <ul>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
        <li onClick={HandleLi}>
          <img src="https://picsum.photos/300" alt="" />
          <h3>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</h3>
          <p>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</p>
          <h5>12.05.2021  12:54</h5>
        </li>
      </ul>
      <button onClick={HandleAll}>Barchasini ko'rish</button>
    </div>
  );
}

export default AllNews;
