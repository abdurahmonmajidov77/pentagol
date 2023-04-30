import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import TopNews from '../../components/TopNews';
import './style.css';

function Home() {
  return (
    <div className="Home">
        <Main/>
        <TopNews/>
        <Footer/>
    </div>
  );
}

export default Home;
