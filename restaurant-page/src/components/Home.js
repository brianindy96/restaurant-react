import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-title">
          <h1>Welcome to our Restaurant</h1>
        </div>
      </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quod? Ipsam cum suscipit inventore, quaerat animi eius unde deleniti iure aliquid sequi, eos facere veritatis, commodi minus minima fugiat at. Perspiciatis animi dolores aspernatur, maiores iste, perferendis rerum aperiam atque laborum illo ab, dolor ea debitis impedit labore cum eveniet.</p>
        <button className="learn-btn">
          <a href="#second">Learn More</a>
        </button>
    </div>
  )
}

export default Home