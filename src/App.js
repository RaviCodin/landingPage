import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/Components/Home/Home.js';
import Contect from '../src/Components/Contect/Contect';
import Header from '../src/Components/Header/Header.js';
import Footer from '../src/Components/Footer/Footer.js';
import WebFont from 'webfontloader';


function App() {
  WebFont.load({
  google: {
    families: [ 'Poppins','sans-serif']
  }
});

  return (
    <BrowserRouter>
    <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contect" element={<Contect />} />

      </Routes>
    <Footer />

    </BrowserRouter>
  );
}

export default App;
