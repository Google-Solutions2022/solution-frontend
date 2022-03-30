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
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" Style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
                                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                    <p>Don't miss out, join us today!</p>
                                    <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate={true} _lpchecked="1">
                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                        <p className="mchimp-errmessage" Style="display: none;"></p>
                                        <p className="mchimp-sucmessage" Style="display: none;"></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" Style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;">
                                    <h3 className="f-title f_600 t_color f_size_18">Our branches</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="/">Mumbai</a></li>
                                        <li><a href="/">Bangalore</a></li>
                                        <li><a href="/">Surat</a></li>
                                        <li><a href="/">Paris</a></li>
                                        <li><a href="/">Singapore</a></li>
                                        <li><a href="/">Canada</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" Style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
                                    <h3 className="f-title f_600 t_color f_size_18">Reach out to us</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Term &amp; conditions</a></li>
                                        <li><a href="/">Our team</a></li>
                                        <li><a href="/">Documentation</a></li>
                                        <li><a href="/">Support Policy</a></li>
                                        <li><a href="/">Privacy</a></li>
                                    </ul>
                                </div>
                            </div>
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