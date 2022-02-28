import React, { useContext, useEffect, useState } from 'react'
import './CSS/Register.css'
import logo from "./images/img-01.png"
import { MdArrowRightAlt, MdEmail } from "react-icons/md";
import { BsLockFill } from "react-icons/bs";
import { Link, Navigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../utils/lotties/animi.json'
import AuthContext from '../context/auth/AuthContext';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


const Register = (props) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "null",
    gender: "null",
    dob: "",
    phoneNumber: ""
  });

  const [isLoading, setIsLoading] = useState(false);


  const authContext = useContext(AuthContext);




  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const handleSelectChange = e => {
  //   setUser({ ...user, role: e.target.value });
  // };


  const { isAuthenticated, register } = authContext;

  // console.log(isAuthenticated);

  const { name, email, password, confirmPassword, role, gender, dob } = user;



  useEffect(() => {
    if (isAuthenticated === true) {
      // props.history.push("/authHome");
      Navigate('/authHome');
    }

    // if (error) {
    //   // setAlert(error, "danger");
    //   // clearErrors();
    //   alert(error);
    // }
    // const M = window.M;
    // M.FormSelect.init(document.querySelector("select"));
  }, [isAuthenticated]);




  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");

    } else if (role === "null") {
      alert("Please select a role");

    } else if (gender === "null") {
      alert("Select your gender first");
    }
    else {
      setIsLoading(true);
      register(user);
      
      console.log("register");
      // console.log(user);
      setIsLoading(false);
    }
  };

  return (

    <div className="limiter">

      <div className="container-login100">
        <div className="wrap-login100">

          <div className="login100-pic js-tilt" >


            {
              <Lottie
                options={defaultOptions}
                height={400}
                width={400}
              />
              ||
              <img src={logo} alt="IMG" ></img>
            }

          </div>

          <form className="login100-form validate-form" onSubmit={onSubmit} >
            <span className="login100-form-title">
              ACCESS DENIED WEBSITE
            </span>


            <div className="wrap-input100 validate-input" data-validate="Valid name is required: Dhruv Panchal">
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="name"
                onChange={onChange}
                required
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <MdEmail />
              </span>
            </div>


            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                onChange={onChange}
                required
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <MdEmail />
              </span>
            </div>


            <div className="wrap-input100 validate-input" data-validate="Valid gender is required: male/female">
              <input
                className="input100"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <MdEmail />
              </span>
            </div>






            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                required
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <BsLockFill />
              </span>
            </div>


            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input
                className="input100"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={onChange}
                required
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <BsLockFill />
              </span>
            </div>


            <div className="wrap-input100 validate-input" data-validate="Date is required">
              <input
                className="input100"
                type="date"
                name="dob"
                placeholder="BirthDate"
                onChange={onChange}
                required
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                {/* <BsLockFill /> */}
              </span>
            </div>



            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz" style={{ width: "110%" }} >
              <select
                required
                className="input100"
                value={role}
                onChange={(e) => { setUser({ ...user, role: e.target.value }); }}
              >
                <option value="null" defaultValue>
                  Choose your role
                </option>
                <option value="user">Consumer</option>
                <option value="lawyer">Lawyer</option>
                <option value="doctor">Doctor</option>
              </select>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <MdEmail />
              </span>
            </div>


            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz" style={{ width: "110%" }} >
              <select
                required
                className="input100"
                value={gender}
                onChange={(e) => { setUser({ ...user, gender: e.target.value }); }}
              >
                <option value="null" defaultValue>
                  choose your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <MdEmail />
              </span>
            </div>



            <div className="container-login100-form-btn">

              {
                isLoading 
                ?
                  // <button className="login100-form-btn" disabled >
                  //   Loading..
                  // </button>
                  console.log("...Loading")
                  :
                  <button className="login100-form-btn"  >
                    Sign Up
                  </button>

              }



            </div>

            <br></br>
            <br></br>


            <div className="">
              <a className="txt2" href="#">
                <Link to='/login' >
                  Already have an account <MdArrowRightAlt />
                </Link>

              </a>
            </div>
          </form>
        </div>


      </div>


    </div>




  )
}

export default Register;