import { faGavel, faHospitalUser, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './CSS/Home.css'
import instaLogo from './images/icons/instagram.png'
import githubLogo from './images/icons/github.png'
import linkedinLogo from './images/icons/linkedin.png'
import review from './images/12.png'

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
      <img className='review' src={review} alt="instagram"></img>
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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PGES8eCc07z9vQSWY_slW69pnZLl-kLV0A" alt="" />
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
                  <img src="https://previews.123rf.com/images/pandavector/pandavector1607/pandavector160700160/60027009-m%C3%A4dchen-symbol-flach-einzelbild-menschen-symbol-aus-der-gro%C3%9Fen-avatar-collection-vektorgrafik.jpg" alt="" />
                </div>
                <div className="team_contentBx">
                  <h3>Dhvani Shah <br /> <span> CreativeDesigner </span></h3>
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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7whgAuoZM_uRgW9ig8HPRHkOvsmCd06wU8jZ5WyzBu0gY5yW1F3gYdA3ieuBeOyNnEH8" alt="" />
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
                  <img src="data:image/jpeg;base64,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" alt="" />
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