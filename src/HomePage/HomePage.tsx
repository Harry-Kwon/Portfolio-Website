import Container from '@mui/material/Container';
import Header from '../Header/Header';
import Title from './Title/Title';
import Featured from './Portfolio/Featured';
import Footer from 'Footer/Footer';

const HomePage = () => {
  return(
    <div>
      <Header/>
      <main>
        <Title/>
        <Featured/>
        <Footer/>
      </main>
    </div>
  )
};

export default HomePage;