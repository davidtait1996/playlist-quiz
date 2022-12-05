import React, { useState, useContext } from 'react'
import { UserContext } from "../contexts"

import NavBar from './NavBar'
import Footer from './Footer'
import Login from './pages/Login'
import Home from './pages/Home'


const Container = () => {
  const [currentPage, setCurrentPage] = useState('Login');
  // const [userState, dispatch] = useContext(UserContext);

  const redirectLoggedOut = () => {
    return <Home />;
  }


  const renderPage = () => {
    if(currentPage === 'Login') {
      return <Login handlePageChange={handlePageChange}/>;
    }
    else if(currentPage === 'Home') {
      // if(!userState.loggedIn) {
      //   return <Login handlePageChange={handlePageChange}/>;
      // }
      return <Home />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
        <Footer />
    </div>
  )
}

export default Container