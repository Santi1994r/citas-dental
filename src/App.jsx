
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import GeneralOdoltology from './components/GeneralOdoltology/GeneralOdoltology'
import OurServices from './components/OurServices/OurServices'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Navbar from './components/Navbar/Navbar';
import { Context } from './components/Context/Context';


function App() {
  return (
    <Context>
      <Navbar />
      <Header />
      <OurServices />
      <WhyChooseUs />
      <GeneralOdoltology />
      <Footer />
    </Context>
  );
}

export default App;
