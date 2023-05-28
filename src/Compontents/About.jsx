import React from 'react'

function About() {
  return <>
      <div className='about-us' id='About'>
      <p>Efficient Energy —<span id='title'>The Way It Should Be.</span></p>
      <div className='content-container'>
        <div className='contents'>
          <div className='cards'>
            <div className='card-img'>
              <img src='assets/3.png'></img>
            </div>
            <p className='card-title'>
              Loreum Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
              book.
            </p>
          </div>
          <div className='cards' id='environment'>
            <div className='card-img'>
              <img src='assets/5.png'></img>
            </div>
            <p className='card-title'>
              Loreum Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
              book.
            </p>
          </div>
          <div className='cards' id='energy'>
            <div className='card-img'>
              <img src='assets/4.png'></img>
            </div>
            <p className='card-title'>
              Loreum Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
              book.
            </p>
          </div>
          <div className='cards'>
            <div className='card-img'>
              <img src='assets/6.png'></img>
            </div>
            <p className='card-title'>
              Loreum Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
              book.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default About