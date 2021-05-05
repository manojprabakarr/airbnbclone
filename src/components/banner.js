import React,{useState} from 'react'
import {Button} from '@material-ui/core'
import './banner.css'
import Search from './Search'
import {useHistory} from 'react-router-dom'

function Banner() {
  const History =useHistory();
 const [show, setshow] = useState(false);
    return (
        <div className="banner">

            <div className="bannersearch">
              {show && <Search/>}
            <Button
          onClick={()=>setshow(!show)}
          className="bannerbutton"
          variant="outlined"
        >
          {show ? "Hide" : "Search dates"}
        </Button>
      </div>
      <div className="bannerinfo">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button  variant="outlined"
        onClick={()=>History.push("/search")}>
          Explore nearby
        </Button>
            </div>
            
        </div>
    )
}

export default Banner
