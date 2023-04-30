import { useNavigate } from 'react-router';
import './style.css';
import axios from 'axios';
import { API_URL } from '../../utils';

function Login() {
    const navigate = useNavigate()
    const HandleBack = () => {
        navigate('/')
    }
    const HandleSubmit = async() => {
      const res = await axios.post(`${API_URL}/auth`, {headers: {'ngrok-skip-browser-warning': 'true'}})
      console.log(res);
      window.localStorage.setItem("AuthToken", res)
    }
  return (
    <div className="Login">
        <i onClick={HandleBack} className='fa-solid fa-arrow-left'></i>
        <form className="LoginBox" onSubmit={HandleSubmit}>
            <h1>Sign In</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero?</p>
            <input type="text" placeholder='Enter Name'/>
            <input type="text" placeholder='Enter Password'/>
            <button type='submit'>Sign In</button>
        </form>
    </div>
  );
}

export default Login;
