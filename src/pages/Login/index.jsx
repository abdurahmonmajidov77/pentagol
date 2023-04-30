import { useNavigate } from 'react-router';
import './style.css';

function Login() {
    const navigate = useNavigate()
    const HandleBack = () => {
        navigate('/')
    }
  return (
    <div className="Login">
        <i onClick={HandleBack} className='fa-solid fa-arrow-left'></i>
        <form className="LoginBox">
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
