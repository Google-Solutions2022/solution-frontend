import React from 'react'
import './CSS/Login.css'
import logo from "./images/img-01.png"
import { MdArrowRightAlt, MdEmail } from "react-icons/md";
import { BsLockFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../utils/lotties/animi.json'


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


const Login = (props) => {







  return (

    <div class="limiter">

      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" >


            {<Lottie
              options={defaultOptions}
              height={400}
              width={400}
            />


              || <img src={logo} alt="IMG" ></img>}

          </div>

          <form class="login100-form validate-form">
            <span class="login100-form-title">
              ACCESS DENIED WEBSITE
            </span>

            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input
                class="input100"
                type="text"
                name="email"
                placeholder="Email"            
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <MdEmail />
              </span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Password is required">
              <input class="input100" type="password" name="pass" placeholder="Password" />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <BsLockFill />
              </span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn" >
                Login
              </button>
            </div>

            <br></br>
            <br></br>

            <div class="text-center ">
              <span class="txt1">
                Forgot
              </span>
              <a class="txt2" href="#">
                Username / Password?
              </a>
            </div>

            <div class="">
              <a class="txt2" href="#">
                <Link to='/register' >
                  Create your Account <MdArrowRightAlt />
                </Link>

              </a>
            </div>
          </form>
        </div>


      </div>


    </div>




  )
}

export default Login;