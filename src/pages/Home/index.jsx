import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import './style.css';

function Home() {
  return (
    <div className="Home">
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default Home;
