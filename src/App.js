import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div  className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <ContactUs />
    </div>
  );
}

export default App;
