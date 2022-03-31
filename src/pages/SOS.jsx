import { faGavel, faHospitalUser, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './CSS/SOS.css'


const SOS = () => {
  return (
    <div className='Home_Page'>
    {/* header_landing */}
      <header>
        <div className="overlay"></div>
        <div className="home_landing">
          <div className="landing_container">
            <div className="colLanding txt_land">
              <div className="text_landing">
                <h1 className='land_heading'> EMERGENCY <br /></h1>
                <p className='land_p'>We care for you!<br />REACH US OUT NOW</p>
              </div>
              <div className="landing_opt">
                <div className="landing_btns">
                  <button className="btn_landing btn">
                    Ambulance
                  </button>
                  <button className="btn_landing btn">
                    Fire brigade
                  </button>
                  <button className="btn_landing btn">
                    Police
                  </button>
                </div>
              </div>
            </div>
            <div className="colLanding img_land">
              <div className="landing_image">
                <img src="" />
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
              <FontAwesomeIcon icon={faLink} />
              </div>
            </div>
            <div className="service_card_cont">
              <div className="service_head">
                <h4>Fire</h4>
              </div>
              <div className="service_txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quod.
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
                <h4>Medical aid</h4>
              </div>
              <div className="service_txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tenetur.
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
                <h4>Police</h4>
              </div>
              <div className="service_txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, expedita?
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team section  */}
      
    </ div>
  )
}

export default SOS