import AllNews from '../../components/AllNews';
import Footer from '../../components/Footer';
import LastNews from '../../components/LastNews';
import Main from '../../components/Main';
import TopNews from '../../components/TopNews';
import './style.css';

function Home() {
  return (
    <div className="Home">
        <Main/>
        <TopNews/>
        <LastNews/>
        <AllNews/>
        <Footer/>
    </div>
  );
}

export default Home;
