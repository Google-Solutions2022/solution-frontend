import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Home from "./pages/Home" ;
import Login from "./pages/Login" ;
import Register from "./pages/Register" ;
import AuthHome from "./pages/AuthHome" ;
import AboutUs from "./pages/AboutUs" ;
import NotFound from './pages/NotFound';
import LawyerHome from './pages/LawyerHome';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="nav">
        <Navbar />
      </div>
        <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/authHome" exact element={<AuthHome />} />
        <Route path="/aboutUS" exact element={<AboutUs />} />
        <Route path="/notFound" exact element={<NotFound />} />
        <Route path="/lawyerHome/*" exact element={<LawyerHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;