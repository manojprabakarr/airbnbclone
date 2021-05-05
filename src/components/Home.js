import React from 'react'
import Banner from './banner'
import Card from './Card'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="homesection">
            
           <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          desc="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://images.pexels.com/photos/5240582/pexels-photo-5240582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Unique stays"
          desc="Spaces are more than just a place to sleep."
        />
        <Card
          src="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Entire homes"
          desc="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="homesection">
        <Card
          src="https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Penthouse in London"
          desc="Enjoy the amazing sights of London with this stunning penthouse"
          price="$140/night"
        />
        <Card
          src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Living room flats in Bournemouth"
          desc="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="$340/night"
        />
        <Card
          src="https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Bedroom apartment"
          desc="Superhost with great amenities and an extraordinary shopping complex nearby"
          price="$75/night"
        />
           </div>
    </div>
            
       
    )
}

export default Home
