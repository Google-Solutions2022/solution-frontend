import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home" ;
import Login from "./pages/Login" ;
import Register from "./pages/Register" ;
import AuthHome from "./pages/AuthHome" ;
import AboutUs from "./pages/AboutUs" ;
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/authHome" exact element={<AuthHome />} />
        <Route path="/aboutUS" exact element={<AboutUs />} />
        <Route path="/notFound" exact element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;