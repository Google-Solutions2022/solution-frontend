import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Home from "./pages/Home" ;

import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthHome from "./pages/AuthHome";
import AboutUs from "./pages/AboutUs";
import NotFound from './pages/NotFound';
import LawyerHome from './pages/LawyerHome';
import DoctorHome from './pages/DoctorHome';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import SOS from './pages/SOS';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/authHome" exact element={<AuthHome />} />
          <Route path="/aboutUS" exact element={<AboutUs />} />
          <Route path="/notFound" exact element={<NotFound />} />
          <Route path="/lawyerHome/*" exact element={<LawyerHome />} />
          <Route path="/doctorHome/*" exact element={<DoctorHome />} />
          <Route path="/SOS/*" exact element={<SOS />} />
        </Routes>
        <div className='foot'>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;