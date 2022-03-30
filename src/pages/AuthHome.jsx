import React, { useContext, useEffect } from 'react'
import './CSS/AuthHome.css'
import AuthContext from '../context/auth/AuthContext';
import { Link } from 'react-router-dom';






const AuthHome = (props) => {


  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    if (user == null) {
      loadUser();
    }
    console.log("user from authHome is: ", user);
  }, [user])

  useEffect(() => {
    // console.log(isAuthenticated)
    if (isAuthenticated === false) {
      props.history.push("/login");
    }

  });









  return (
    <>
      <div>AuthHome</div>
      <br /><br />
      <Link to="/lawyerHome">
        <button >Go to Legal Work</button>
      </Link>



    </>



  )
}

export default AuthHome