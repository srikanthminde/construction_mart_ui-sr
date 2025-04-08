
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../user/loginSlice";
import { clearCart } from "./cartSlice";
import './style.css';

function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  function uselogout() {
    dispatch(clearCart());
    dispatch(logout());
    navigate("/");
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className= {darkMode ? "dark-mode" : "light-mode "}>
      <nav style={{width:"auto"}} className=  {`navbar navbar-expand-lg  navbar-p-3 mb-2   bg-info ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Link className="navbar-brand" to="/">
          {/* <img
            src="https://constructionmart.in/wp-content/uploads/2024/03/CMART2.png"
            alt=""
            width="180px"
          /> */}
        </Link>
       
          {/* <span className="navbar-toggler-icon"></span> */}
              
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active ">
              <Link className={`nav-link ${darkMode ? 'text-light' : 'text-dark' }`} to="/dashboard">
                Home
              </Link>
            </li>

            <li className="nav-item active">
              <Link className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} to="/About">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} to="/wishlist">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn btn-warning">
          <Link className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} to="/cart">
            <i className="bi bi-cart3"></i>
            Cart
            <span className="badge rounded-pill text-bg-dark">
              {cartItems.length}
            </span>
            
          </Link>
        </div>
        &nbsp;  
        <button className={`  ${darkMode ? 'text-light btn btn-dark' : 'text-dark btn btn-light'}`} onClick={toggleDarkMode}>
                {darkMode ? (<i class="bi bi-moon-stars-fill"></i>) : (<i className="bi bi-brightness-high-fill"></i> )}</button>
        &nbsp;
        <div>
          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={uselogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-info">
              Login
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;


