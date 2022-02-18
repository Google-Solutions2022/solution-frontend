import { faComments, faFileLines, faHeadset, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/LawNav.css'

const LawNav = () => {

  return (

    

    <div>
      <ul className="law_nav_opts" id="navOpt">
        <li className="law_opt active">
          <Link to="/LawyerHome" className="navbar_opt">
            <div className="opt_logo"><FontAwesomeIcon icon={faHouse} /></div>
            <div className="opt_text">Home</div>
          </Link>
        </li>
        <li className="law_opt">
          <Link to="/LawyerHome" className="navbar_opt">
            <div className="opt_logo"><FontAwesomeIcon icon={faHeadset} /></div>
            <div className="opt_text">Live Consultancy</div>
          </Link>
        </li>
        <li className="law_opt">
          <Link to="/LawyerHome" className="navbar_opt">
            <div className="opt_logo"><FontAwesomeIcon icon={faComments} /></div>
            <div className="opt_text">Ask Questions</div>
          </Link>
        </li>
        <li className="law_opt">
          <Link to="/LawyerHome" className="navbar_opt">
            <div className="opt_logo"><FontAwesomeIcon icon={faFileLines} /></div>
            <div className="opt_text">Documents</div>
          </Link>
        </li>
        <li className="law_opt">
          <Link to="/LawyerHome" className="navbar_opt">
            <div className="opt_logo"><FontAwesomeIcon icon={faRightFromBracket} /></div>
            <div className="opt_text">Log Out</div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LawNav