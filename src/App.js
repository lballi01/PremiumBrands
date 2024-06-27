import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';

function App() {
  return (
    <div  className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
    </div>
  );
}

export default App;
