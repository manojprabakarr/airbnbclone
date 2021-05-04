import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from '@material-ui/core'

function Header() {
    return (
        <>
        <div className="header">
            <img className="headericon" src="https://www.citypng.com/public/uploads/preview/-31600816888bquu10q2fb.png" alt=""/>

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
