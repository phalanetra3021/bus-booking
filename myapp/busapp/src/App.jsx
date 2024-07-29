import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from'./components/navbar/Navbar'
import Footer from './components/footer/Footer'
import HomeContainer from './components/homecontainer/HomeContanier'
import Theme from './components/theme/Theme';
import HeroSection from './components/homecontainer/Heros';
import Login from './components/login/Login';
import Services from './components/adash/Service';
import SearchBar from './Searchbar';
import BusResults from './Busresults';
import BusBooking from './Busbooking';
// import SearchBar from './Searchbar';



function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        
         <Routes>
          
          <Route path="/" element={<HeroSection/>}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/search" element={<SearchBar/>}></Route>
          <Route path="/results" element={<BusResults />} ></Route>
          <Route path='/book' element = {<BusBooking />}></Route>
          </Routes> 
          <Footer/>
          {/* <Theme/> */}
          {/* <Services/> */}
         
          {/* <Login/> */}
          
        </div>
      </Router>
    </>
  );
}

export default App;
