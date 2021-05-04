import React from 'react'
import {Button} from '@material-ui/core'
import './banner.css'

function Banner() {
    return (
        <div className="banner">

            <div className="bannersearch">
            <Button
         
          className="bannerbutton"
          variant="outlined"
        >
         dates
        </Button>
      </div>
      <div className="bannerinfo">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button  variant="outlined">
          Explore nearby
        </Button>
            </div>
            
        </div>
    )
}

export default Banner
