import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
        <div className="header">
          <Link to="/">
            <img className="headericon" src="https://img.pngio.com/airbnb-logo-png-logo-black-transparent-airbnb-329-troy-airbnb-png-logo-329_329.png" alt=""/></Link>

            <div className="headerleft">
            <input type="text" />
              <SearchIcon />

            </div>

            <div className="headerright">
            <p>Become a host</p>
            <LanguageIcon />
            <div className="headerright2">
            <ExpandMoreIcon />
            <Avatar />


            </div>
           

            </div>
            
           
        </div>
       

        
         <div className="headerhover">
         <a href="/signup">Signup</a>
         <a href="/signup">Login</a>
         
         <a href="/signup">Host Your Home</a>
         <a href="/signup">Host Your Experience </a>
         <a href="/signup">Help</a>

       </div>
       
       </>
    )
}

export default Header
