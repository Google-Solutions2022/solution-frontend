import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LawNav from '../components/LawNav'
import './CSS/LawyerHome.css'
import Login from '../pages/Login'

const LawyerHome = () => {
  return (
    <div className="main_law">
      <div className="law_nav">
        <LawNav />
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