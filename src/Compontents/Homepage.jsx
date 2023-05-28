import React from 'react'
function Homepage() {
    let queries = {
        xs: '(max-width: 320px)',
        sm: '(max-width: 720px)',
        md: '(max-width: 1024px)'
        }
     let media_screen_width = window.matchMedia(queries.md);
  return <>
   <div className='Home_page' id='Home'>
      <div className='Navbar'>
        <div className='logo'>
          <img src='assets/1.png' alt="logo"></img>
        </div>
        {media_screen_width.matches?<><i className="fa-solid fa-bars"></i></>:
        <div className='Nav-items'>
          <a href='#About' style={{textDecoration:"none"}}><p>About us</p></a>
          <a href='#Services'><p>Services</p></a>
          <a href='#Blog'><p>Blog</p></a>
          <a href='#Contact'><p>Contact Us</p></a>
          <button>Get A Quote</button>
        </div>
}
      </div>
      <div className='content'>
        <svg xmlns="http://www.w3.org/2000/svg" id='infinity' viewBox="0 0 16 16">
          <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z" />
        </svg>
        <div className='Text'>
          <div className='text-content'>
            <p><span className='alternative-color'>Responsible</span>&nbsp;
              Consumption&nbsp;<span className='alternative-color'>And</span> Production</p>
          </div>
        </div>
        <p>Connecting world to green energy solutions and carbon free future.</p>
      </div>
    </div>
  </>
}

export default Homepage