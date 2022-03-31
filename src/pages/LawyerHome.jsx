import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LawNav from '../components/lawyer/LawNav'
import './CSS/LawyerHome.css'
import Login from '../pages/Login'
import LawDoc from '../components/lawyer/LawDoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import AuthContext from '../context/auth/AuthContext';

const LawyerHome = (props) => {

  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    if (user == null) {
      loadUser();
    }
    // console.log("user from LawyerHome is: ", user);
  }, [user])

  useEffect(() => {
    // console.log(isAuthenticated)
    if (isAuthenticated === false) {
      props.history.push("/login");
    }

  });


  const [side, setSide] = useState(false);
  const open = () => {
    const navOpt = document.getElementById("navOpt");
    if (!side) {
      navOpt.classList.add("active");
      // console.log("set Active");
      setSide(true);
    }
    else {
      navOpt.classList.remove("active");
      // console.log("remove Active");
      setSide(false);
    }
  }
  return (
    <div className="main_law">
      <div className="toggle_side">
        <div className='toggle_Logo' onClick={open}>
          {!side && (
            <FontAwesomeIcon icon={faBars} />
          )}
          {side && (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>
      </div>
      <div className="law_nav" id="navOpt">
        <LawNav />
      </div>
      <div className="law_content">
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/documents" exact element={<LawDoc props={user} />} />
          
        </Routes>
      </div>
    </ div>
  )
}

export default LawyerHome