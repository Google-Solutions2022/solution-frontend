import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './CSS/Navbar.css'

const Navbar = () => {
    return (
        <div className="App_Navbar">
            <div className="top_nav">
                <div className="left_s">
                    <div className="nav_logo">
                        <div className="Logo_name">
                            One Connect
                        </div>
                    </div>
                </div>
                <div className="right_s">
                    <div className="emergency right_opt">
                        <div className="notify">
                            <button className="btn btn_emer">Emergency</button>
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
                                <button className="btn btn_login">Login / SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar