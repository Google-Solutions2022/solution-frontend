import React from 'react'
import './style.css'
import svg2 from './pic/2.svg'
import gif1 from './pic/5482-connect.gif'
import dhruv from './pic/3.svg'
import dhvani from './pic/7.jpg'


const Home = () => {
  return (
    <>
    <div className="kw">
    <header id="home" className="hero-area">    
      <div className="overlay">
        <span></span>
        <span></span>
      </div>
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="index.html" className="navbar-brand"><img src="" alt=""/></a>       
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#services">About</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">Services</a>
              </li>                            
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#showcase">Showcase</a>
              </li>       
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">Pricing</a>
              </li>     
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#team">Team</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">Contact</a>
              </li> 
              
            </ul>
          </div>
        </div>
      </nav>  
      <div className="container">      
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title"><b>ONECONNECT</b></h2>
              <p><i>ONE PLATFORM FOR ALL PROBLEMS!</i></p>
              <div className="header-button">
                <a href="" rel="nofollow" target="_blank" className="btn btn-border-filled">Get started</a>
                <a href="" rel="nofollow" target="_blank" className="btn btn-border page-scroll">Know more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img src={svg2} alt=" "/>
            </div>            
          </div>
        </div> 
      </div>             
    </header>
    
    <section id="services" className="section">
      <div className="container">

        <div className="row">
          
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-layers"></i>
              </div>
              <h4>Law and documents</h4>
              <p>Get assistance with documents and legal proceedings with our esteemed lawyers in a quick online consultancy.</p>
              <br></br><br></br>
            </div>
          </div>
         
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-link"></i>
              </div>
              <h4>Quick reach: Fire and Police</h4>
              <p>Simply drop a message and swift services to combat the emergency (fire/police/ambulance) at your doorstep!</p>
              <br></br>
            </div>
          </div>
         
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="services-item text-center">
              <div className="icon">
                <i className="lni-heart"></i>
              </div>
              <h4>Medical assistance at your home</h4>
              <p>Looking for medical assistance? Consult our doctors in online mode and book an offline appointment too if required.</p>
            </div>
          </div>
         

        </div>
      </div>
    </section>
    
    <section id="business-plan">
      <div className="container">

        <div className="row">
          
          <div className="col-lg-6 col-md-12 pl-0 pt-0 pr-5">
            <div className="business-item-img">
              <img src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png " className="img-fluid" alt=""/>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-12 pl-4">
            <div className="business-item-info">
              <h3>Making it easy</h3>
              <p>Bring together law, medical and emergency services,  this is one platform solving many problems!</p>

              <a className="btn btn-common" href="#">LOGIN/SIGNUP</a>
            </div>
          </div>
         

        </div>
      </div>
    </section>
    
    <section id="features" className="section">
      <div className="container">
       
        <div className="row">
          <div className="col-lg-12">
            <div className="features-text section-header text-center">  
              <div>   
                <h2 className="section-title">Services We Provide</h2>
                <div className="desc-text">
                  <p>An initiative to bring together services under one platform online! Law, emergency and medical assistance under one roof!</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
       
        <div className="row featured-bg">
         
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            
            <div className="feature-item featured-border1">
               <div className="feature-icon float-left">
                 <i className="lni-layers"></i>
               </div>
               <div className="feature-info float-left">
                 <h4>Documents</h4>
                 <p>Digitally save your documents for quick hassle-free access in the future  </p>
               </div>
            </div>
            
          </div>
          
          
         
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            
            <div className="feature-item featured-border2">
               <div className="feature-icon float-left">
                 <i className="lni-briefcase"></i>
               </div>
               <div className="feature-info float-left">
                 <h4>Consult a lawyer</h4>
                 <p>Book an online one-to-one consultancy with one of our lawyers and get useful guidance on the go</p>
               </div>
            </div>
            
          </div>
          
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
             
            <div className="feature-item featured-border1">
               <div className="feature-icon float-left">
                 <i className="lni-invention"></i>
               </div>
               <div className="feature-info float-left">
                 <h4>Emergency? We are only a message away</h4>
                 <p>Drop a messsage on our emergency portal and you will be assured of swift assistance. We will pass your message to police, fire and medical departments in a click</p>
               </div>
            </div>
           
          </div>
          
          <div className="col-lg-6 col-md-6 col-xs-12 p-0">
            
            <div className="feature-item featured-border2">
               <div className="feature-icon float-left">
                <i className="lni-user"></i>
               </div>
               <div className="feature-info float-left">
                 <h4>Medical appointment</h4>
                 <p>Wish to see a doctor? Book an online one-to-one appointment with our experienced doctors today. </p>
               </div>
            </div>
           
          </div>
           
          
      
             

        </div>
        
      </div>
    </section>
    
   
    
    <section id="pricing" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pricing-text section-header text-center">  
              <div>   
                <h2 className="section-title">Book a consultancy now!</h2>
                <div className="desc-text">
                  <p>See a lawyer and get your documents ready!</p>  
                  <p>See a doctor and get your medicines ready!</p>
                </div>
              </div> 
            </div>
          </div>

        </div>
       
        <div className="row pricing-tables">
         
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3>Services for Free of cost</h3>
                <h1><span>$</span>00</h1>
                <ul>
                  <li>Free consultancy</li>
                  <li>New user signup</li>
                  <li>One-to-one video call</li>
                  <li> <br></br></li>
                  <li> <br></br></li>
                  
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-border">Purchase</a>
              </div>
            </div>
          </div>
           
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3> Consult Lawyer Online</h3>
                <h1><span>$</span>29.99</h1>
                <ul>
                  <li>One-to-one video meet</li>
                  <li>Add relatives too</li>
                  <li>Get legal advice</li>
                  <li>Get your documents ready</li>
                  <li> <br></br></li>
                  <li></li>
                  <li></li>  
                        
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-common">Purchase</a>
              </div>
            </div>
          </div>
         
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="pricing-table text-center">
              <div className="pricing-details">
                <h3>Consult Doctor Online</h3>
                <h1><span>$</span>19.99</h1>
                <ul>
                  <li>One-to-one video meet</li>
                  <li>Online consultation at home</li>
                  <li>Medicines on the go</li>
                  <li>Book offline appointment if required</li>
                  
                  
                </ul>
              </div>
              <div className="plan-button">
                <a href="#" className="btn btn-border">Purchase</a>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    </section>


    < div class="container">
    <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h4 class="font-cond-l fg-accent lts-md mgb-10" contenteditable="false">Not Yet Convinced?</h4>
        <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">Read Customer Reviews</h1>
    </div>
    <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" Got my documents gathered and prepared at the comfort of my home. Great platform, brilliant online support, proved helpful indeed! "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">John Stewart</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Businessman - New York</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" Consulted a doctor on this website, and I must say the online consultancy proved exceptionally effective, much beyond expectation. "</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Ariana Menage</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist - Los Angeles</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p class="fs-110 font-cond-l" contenteditable="false">" I got all my paperwork done at ease. <br/> I would highly recommend this website. <br/> It is a wonderful initiative!"<br/><br/></p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Sean Carter</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager - Chicago</small>
        </li>
      </ul>
    </div>




   
    <section id="team" className="section">
      <div className="container">
        <div className="">
     
        <div className="row">
          <div className="col-lg-12">
            <div className="team-text section-header text-center">  
              <div>   
                <h2 className="section-title">Meet Our Team</h2>
                <div className="desc-text">
                  <p>Google Solution Challenge 2022</p>  
                  <p>Team: ACCESS DENIED</p>
                </div>
              </div> 
            </div>
          </div>
        </div>
       
        <div className="row">
        
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <div className="team-thumb">
                <img src={dhruv} className="img-fluid" alt=""/>
              </div>

              <div className="team-details">
              <div className="team-social-icons">
                  <ul className="social-list">
                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div> 
                <div className="team-inner text-center">
                  <h5 className="team-title">Dhruv Panchal</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <div className="team-thumb">
                <img src={dhvani} className="img-fluid" alt=""></img>
              </div>

              <div className="team-details">
              <div className="team-social-icons">
                  <ul className="social-list">
                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div>
                <div className="team-inner text-center">
                  <h5 className="team-title">Dhvani Shah</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
         
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <div className="team-thumb">
                <img src="https://icons-for-free.com/iconfiles/png/512/guy+man+user+icon-1320166734617071245.png" alt="Feature 03"/>
              </div>

              <div className="team-details">
              <div className="team-social-icons">
                  <ul className="social-list">
                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div>
                <div className="team-inner text-center">
                  <h5 className="team-title">Harsh Mavani</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
         
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="single-team">
              <div className="team-thumb">
                <img src="https://icons-for-free.com/iconfiles/png/512/boy+guy+man+icon-1320166733913205010.png" alt="Feature 01"/>
              </div>

              <div className="team-details">
                <div className="team-social-icons">
                  <ul className="social-list">
                    <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                    <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                    <li><a href="#"><i className="lni-google-plus"></i></a></li>
                  </ul>
                </div>
                <div className="team-inner text-center">
                 
                  <h5 className="team-title">Mohit Agrawal</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
         
 

        </div>
        </div>
      </div>
    </section>












    


   
    
    <a href="#" className="back-to-top">
      <i className="lni-chevron-up"></i>
    </a> 
    </div>
	</>
  )
}

export default Home