import React from 'react'
import './CSS/Footer.css'

const Footer = () => {
    return (

        <div>
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" Style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;">
                                    <h3 className="f-title f_600 t_color f_size_18">Connect with OneConnect now!</h3>
                                    <div className="f_social_icon">
                                        <a href="/" className="fab fa-facebook"> </a>
                                        <a href="/" className="fab fa-twitter"> </a>
                                        <a href="/" className="fab fa-linkedin"> </a>
                                        <a href="/" className="fab fa-pinterest"> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">© OneConnect <br /> All rights reserved</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer