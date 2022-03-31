import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './CSS/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="App_Navbar">
            <div className="top_nav">
                <div className="left_s">
                <Link to="/"> 
                <div className="nav_logo">
                        
                        <div className="Logo_name">
                          OneConnect 
                        </div>
                        
                    </div>
                </Link>
                </div>
                <div className="right_s">
                    <div className="emergency right_opt">
                        <div className="notify">
                            <Link to="/SOS">
                            <button className="btn btn_emer">Emergency</button>
                            </Link>
                        </div>
                    </div>
                    <div className="user right_opt">
                        {/* <div className="nav_user">
                            <div className="noti_logo logo_user">
                                <FontAwesomeIcon icon={faCircleUser} />
                            </div>
                        </div> */}
                        <div className="auth_navbar">
                            <div className="nav_login_button">
                            
                                <Link to="/login"  >
                                    <button className="btn btn_login">Login / SignUp</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar