import { faGavel, faHospitalUser, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './CSS/Home.css'
import instaLogo from './images/icons/instagram.png'
import githubLogo from './images/icons/github.png'
import linkedinLogo from './images/icons/linkedin.png'

const Home = () => {
  return (
    <div className='Home_Page'>
    {/* header_landing */}
      <header>
        <div className="overlay"></div>
        <div className="home_landing">
          <div className="landing_container">
            <div className="colLanding txt_land">
              <div className="text_landing">
              <h1 className='land_heading'> OneConnect </h1>
              <p className='land_p'><br />One Platform For All Services <br /><br />An initiative to bring together lawyers, doctors &amp; emergency services one more step closer to you!</p>
              </div>
              <div className="landing_opt">
                <div className="landing_btns">
                  <button className="btn_landing btn">
                    Emergency
                  </button>
                  <button className="btn_landing btn">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="colLanding img_land">
              <div className="landing_image">
                <img src="https://preview.uideck.com/items/slick/business/img/intro.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* services  */}
      <div className="services">
        <div className="services_container container">
          <div className="card_service card">
            <div className="service_card_img">
              <div className="service_img">
                <FontAwesomeIcon icon={faGavel} />
              </div>
            </div>
            <div className="service_card_cont">
              <div className="service_head">
                <h4>Law &amp; Documents </h4>
              </div>
              <div className="service_txt">
              Get assistance with documents and legal proceedings from our esteemeted lawyers in a quick online consultancy.
              </ div>
            </div>
          </div>
          <div className="card_service card">
            <div className="service_card_img">
              <div className="service_img">
                <FontAwesomeIcon icon={faHospitalUser} />
              </div>
            </div>
            <div className="service_card_cont">
              <div className="service_head">
                <h4>Medical assistance at home</h4>
              </div>
              <div className="service_txt">
              Looking for medical assistance?<br />Consult our doctors,<br /> book an online appointment. 
              </div>
            </div>
          </div>
          <div className="card_service card">
            <div className="service_card_img">
              <div className="service_img">
                <FontAwesomeIcon icon={faLink} />
              </div>
            </div>
            <div className="service_card_cont">
              <div className="service_head">
                <h4>Quick reach: <br /> Fire &amp; Police</h4>
              </div>
              <div className="service_txt">
              Simply drop a message and swift services to combat the emergency (fire, police &amp; ambulance) at your doorstep.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team section  */}
      <div className="team_section">
        <div className="team_container container">
          <div className="team_heading">
            <h3>Team Members</h3>
          </div>
          <div className="content_team">
            <div className="team_card card">
              <div className="team_content">
                <div className="mem_img">
                  <img src="https://img.etimg.com/thumb/msid-74074353,width-1200,height-900,imgsize-572331,overlay-etpanache/photo.jpg" alt="" />
                </div>
                <div className="team_contentBx">
                  <h3>Mohit Agrawal <br /> <span> CreativeDesigner </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={githubLogo} alt="github" /></a>
                </li>
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={linkedinLogo} alt="linkedin" /></a>
                </li>
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={instaLogo} alt="instagram" /></a>
                </li>
              </ul>
            </div>
            <div className="team_card card">
              <div className="team_content">
                <div className="mem_img">
                  <img src="https://img.etimg.com/thumb/msid-74074353,width-1200,height-900,imgsize-572331,overlay-etpanache/photo.jpg" alt="" />
                </div>
                <div className="team_contentBx">
                  <h3>Dhavni Shah <br /> <span> CreativeDesigner </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={githubLogo} alt="github" /></a>
                </li>
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={linkedinLogo} alt="linkedin" /></a>
                </li>
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={instaLogo} alt="instagram" /></a>
                </li>
              </ul>
            </div>
            <div className="team_card card">
              <div className="team_content">
                <div className="mem_img">
                  <img src="https://img.etimg.com/thumb/msid-74074353,width-1200,height-900,imgsize-572331,overlay-etpanache/photo.jpg" alt="" />
                </div>
                <div className="team_contentBx">
                  <h3>Dhruv Panchal <br /> <span> CreativeDesigner </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={githubLogo} alt="github" /></a>
                </li>
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={linkedinLogo} alt="linkedin" /></a>
                </li>
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={instaLogo} alt="instagram" /></a>
                </li>
              </ul>
            </div>
            <div className="team_card card">
              <div className="team_content">
                <div className="mem_img">
                  <img src="https://img.etimg.com/thumb/msid-74074353,width-1200,height-900,imgsize-572331,overlay-etpanache/photo.jpg" alt="" />
                </div>
                <div className="team_contentBx">
                  <h3>Harsh Mavani <br /> <span> CreativeDesigner </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={githubLogo} alt="github" /></a>
                </li>
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={linkedinLogo} alt="linkedin" /></a>
                </li>
                <li className='socialItems' >
                  <a href="/"><img className='socialLogo' src={instaLogo} alt="instagram" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      





      










    </ div>
    





  )
}

export default Home