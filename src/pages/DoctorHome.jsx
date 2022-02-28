import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import DoctorNav from '../components/doctorUser/DoctorNav'
import './CSS/DoctorHome.css'
import Login from '../pages/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const LawyerHome = () => {
  const [side, setSide] = useState(false);
  const open = () => {
    const navOpt = document.getElementById("navOpt");
    if (!side) {
      navOpt.classList.add("active");
      console.log("set Active");
      setSide(true);
    }
    else {
      navOpt.classList.remove("active");
      console.log("remove Active");
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
        <DoctorNav />
      </div>
      <div className="law_content">
        <Routes>
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </div>
    </ div>
  )
}

export default LawyerHome