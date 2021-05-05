import React from 'react'
import './searchpage.css'
import {Button} from '@material-ui/core'
import SearchResult from './Searchresult'

function Searchpage() {
    return (
        <div className="searchpage">
            <div className="searchpageinfo">
                <p>32 stays. 26 may to 30 may . 2 guest</p>
               
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>

            </div>
            <div className="searchpageresult">
            <SearchResult
        src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        desc="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
        star="4.7"
        price="$80/night"
        total="$240 total"
      />
      <SearchResult
        src="https://images.pexels.com/photos/1743228/pexels-photo-1743228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        desc="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
        star="4.6"
        price="$70/night"
        total="$240 total"
      />
      <SearchResult
        src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        desc="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
        star="4.2"
        price="$100/night"
        total="$300 total"
      />
      <SearchResult
        src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        desc="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
        star="4.5"
        price="$60/night"
        total="$180 total"
      />
      <SearchResult
        src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        desc="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Free parking . Washing Machine"
        star="4.7"
        price="$90/night"
        total="$270 total"
      />

            </div>
            
        </div>
    )
}

export default Searchpage
