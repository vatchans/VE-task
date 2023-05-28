import React from 'react'
import Carousel from 'react-carousel-elasticss'
function Testimonial() {
  return <>
    <div className='testimonial' id='testimonial'>
      <p>What Our Clients Say</p>
      <div className='reviews'>
        <Carousel itemsToShow={1}>
          <div className='review'>
            <img src='assets/15.png'></img>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <span>~Danny</span>
          </div>
          <div className='review'>
            <img src='assets/15.png'></img>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <span>~Marry</span>
          </div>
          <div className='review'>
            <img src='assets/15.png'></img>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <span>~John doe</span>
          </div>
          <div className='review'>
            <img src='assets/15.png'></img>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <span>~Danny</span>
          </div>
          <div className='review'>
            <img src='assets/15.png'></img>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            <span>~Harry poter</span>
          </div>
        </Carousel>
      </div>
    </div>
  </>
}

export default Testimonial
