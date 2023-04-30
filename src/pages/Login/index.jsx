import { useNavigate } from 'react-router';
import './style.css';
import axios from 'axios';
import { API_URL } from '../../utils';
import { useRef } from 'react';

function Login() {
  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const HandleBack = () => {
      navigate('/')
  }
  const HandleSubmit = async(e) => {
    e.preventDefault()
    try {
      const body = {
        username: username.current.value,
        password: password.current.value
      }
      console.log(body);
      const res = await axios.post(`${API_URL}/auth`,body, {headers: {'ngrok-skip-browser-warning': 'true'}})
      console.log(res);
      window.localStorage.setItem("AuthToken", res.data.token)
      navigate("/admin")
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className="Login">
        <i onClick={HandleBack} className='fa-solid fa-arrow-left'></i>
        <form className="LoginBox" onSubmit={HandleSubmit}>
            <h1>Sign In</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero?</p>
            <input ref={username} type="text" placeholder='Enter Name'/>
            <input ref={password} type="text" placeholder='Enter Password'/>
            <button type='submit'>Sign In</button>
        </form>
    </div>
  );
}

export default Login;
