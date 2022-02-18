import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LawNav from '../components/lawyer/LawNav'
import './CSS/LawyerHome.css'
import Login from '../pages/Login'
import LawDoc from '../components/lawyer/LawDoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const LawyerHome = () => {
  const [bar, setBar] = useState("active");
  const [cross, setCross] = useState("disable");
  // const [nav, setNav] = useState("active");
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const navOpt = document.getElementById("navOpt");
  const [toogleMode, setToogleMode] = useState(false);


  const toggleNav = () => {
    if (bar === "active" && cross === "disable") {
      setBar("disable");
      setCross("active");
      navOpt.classList.toggle("active");
      open.className.toggle("active");
      close.classList.add("active");
    }
    else if (bar === "disable" && cross === "active") {
      setBar("active");
      setCross("disable");
      navOpt.classList.remove("active");
      open.classList.add("active");
      close.classList.remove("active");
    }
  }

  return (
    <div className="main_law">
      <div className="toggle_side">
        {/* <div className="toggle_logo" onClick={toggleNav}> */}

        <div className='toggle_Logo'>

          {!toogleMode && (
            <FontAwesomeIcon id='close' className="toggle" icon={faXmark} onClick={() => setToogleMode(true)} />
          )}
          {toogleMode && (
            <FontAwesomeIcon id='close' className="toggle" icon={faBars} onClick={() => setToogleMode(false)} />
          )}


        </div>
        {/* <FontAwesomeIcon id='open' className="toggle active" icon={faBars} />
        <FontAwesomeIcon id='close' className="toggle" icon={faXmark} /> */}
        {/* </div> */}
      </div>
      {/* <div className="law_nav" id="navOpt">
        <LawNav />
      </div> */}
      {
        !toogleMode && (
          <div className="law_nav" id="navOpt">
            <LawNav />
          </div>
        )
      }
      <div className="law_content">
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/documents" exact element={<LawDoc />} />
        </Routes>
      </div>
    </ div>
  )
}

export default LawyerHome