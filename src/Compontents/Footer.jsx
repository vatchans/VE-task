import React from 'react'

function Footer() {
  return <>
      <div className='Footer'>
      <div className='About'>
        <img src='assets/1.png'>
        </img>
        <p>It is a long established fact that a
          reader will be distracted by the
          readable content of a page when
          looking at its layout.</p>

        <div className='Social-Links'>
          <p>SOCIAL LINKS</p>
          <hr style={{ marginTop: "1px", borderTop: "2px solid #1d6126" }}></hr>
          <div className='Links'>
            <a><img src='assets/21.png'></img></a>
            <a href='https://www.linkedin.com/company/vedic-energie/' target='_blank'><img src='assets/23.png'></img></a>
            <a><img src='assets/24.png'></img></a>
            <a><img src='assets/22.png'></img></a>
          </div>
        </div>
      </div>
      <div className='Quick-links'>
        <div className='quick-link-title'>
          <p>QUICK LINK</p>
          <hr style={{ borderTop: "2px solid #1d6126" }}></hr>
        </div>
        <a href='#Home'>Home</a>
        <a href='#About'>About Us</a>
        <a href='#testimonial'>Testimonial</a>
        <a href='#Blog'>Blog</a>
        <a>Our Team</a>
        <a>Careers</a>
      </div>
      <div className='Our-services'>
        <div className='Our-services-title'><p>SERVICES</p>
          <hr style={{ borderTop: "2px solid #1d6126" }}></hr></div>
        <a>Energy Calculation</a>
        <a>Energy Demand Management</a>
        <a>Energy Supply Solution</a>
        <a>Renewable Energy Solution</a>
        <a>Reduce Energy Bills</a>
        <a>Energy Saving</a>
      </div>
      <div className='Contact-address'>
        <p>CONTACT</p>
        <hr style={{ borderTop: "2px solid #1d6126" }}></hr>
        <div className='contact-details'>
          <img src='assets/25.png'></img>
          <span>31 Steeplebush Ave Unit 1
            Brampton, ON L6R 3B4
          </span>
        </div>
        <div className='contact-details'>
          <img src='assets/27.png'></img><span><a href='mailto:contact@vedicenergie.com' >contact@vedicenergie.com</a>
          </span>
        </div>
        <div className='contact-details'>
          <img src='assets/26.png'></img>
          <span><a href="tel:+919843937773">+91 98439 37773</a>
        </span>
        </div>
        <div className='Map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5838302425245!2d-79.74646372391608!3d43.76073827109718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b17d90a10ac51%3A0x6c42e67a6acfcccc!2s31%20Steeplebush%20Ave%20Unit%201%2C%20Brampton%2C%20ON%20L6R%203B4%2C%20Canada!5e0!3m2!1sen!2sin!4v1685262754354!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div className='copyrightes'>
      <p>COPYRIGHT © 2023 VEDIC ENERGIES | ALL RIGHTS RESERVED | PRIVACY | SITEMAP | LEGAL | COPYRIGHT | ACCESSIBILITY</p>
    </div>
  </>
}

export default Footer