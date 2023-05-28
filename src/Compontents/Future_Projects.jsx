import React from 'react'
import Lottie from "lottie-react";
import windmill from './73205-windmill.json'
import solar_houses from './134246-windmills-house-with-solar-panel.json'
function Future_Projects() {
  return <>
     <div className='future_launch'>
      <div className='content-data'>
        <Lottie animationData={windmill} />
      </div>
      <p>Upcoming Launch</p>
      <div className='content-data-information'>
        <div className='launch-content-text'>
          <div className='launch-content-title'>
            <p>Energy Calculator</p>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages
            and web page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <button>
            Get A Quote
          </button>
        </div>
        <div className='launch-content-img'>
          <img src='assets/8.jpg'></img>
        </div>
      </div>
      <div className='content-data2'>
        <Lottie animationData={solar_houses} />
      </div>
    </div>
  </>
}

export default Future_Projects