import React from 'react'
import '/src/Css/Home.css'
const Home = () => {
  return (
    <div className='hole'>
      <div className="main">
        <div className="main_top">
          <div className="main_left">
            <h1>Glow Naturally, Shine Confidently! ✨</h1>
            <h2>Shop premium skincare, makeup, and haircare, 
              all cruelty-free and tailored for you. </h2>
              <button id='explore'>Explore Now</button>

          </div>
          <div className="main_right">
            <img src="./src/assets/main_image.jpg" className='img-fluid' style={{ borderRadius: 50,width: 450}} alt="main_img" srcset="" />
          </div>
        </div>
      </div>
    
      
    </div>
  )
}

export default Home
