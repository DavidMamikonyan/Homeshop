import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Events from './Pages/events/Events'
import Hotel from './Pages/hotel/Hotel';
import Travel from './Pages/travel/Travel';
import Tickets from './Pages/tickets/Tickets';
import Museum from './Pages/museum/Museum';

function App() {
  return (
    <Router className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/tickets' element={<Tickets />} /> 
          <Route path='/museum' element={<Museum />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
