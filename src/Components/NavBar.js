import React, { useContext } from "react";
import { UserContext } from "../contexts/";

const Navbar = ({ currentPage, handlePageChange }) => {
  // const [userState, dispatch] = useContext(UserContext);
  
  // const logOutHandler = () =>{
  //   if(userState.loggedIn) {
  //     dispatch({
  //       type: "logout"
  //     })

  //     console.log(userState)
  //   }
  //   else {
  //     return;
  //   }
  
  // }

  return (
    <>
      <div className=" nav nav-tabs d-inline-flex justify-content-between w-100 align-items-center">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
        </a>

        <ul className="height-20 d-flex  justify-content-end align-items-center">
          <li className="nav-item text-white "></li>

          <li className="nav-item h5 mb-0">
            <a
              href="#login"
              onClick={() => handlePageChange("Login")}
              // Check to see if the currentPage is `Login`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Login" ? "nav-link active" : "nav-link"
              }
            >
              log in
            </a>

          </li>
        </ul>
      </div>
    </>
  );
};



export default Navbar;
