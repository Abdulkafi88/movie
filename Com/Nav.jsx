import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <header className="main-header">
    <div className="container">
      <div className="logo"><Link to={'Home'}>FLIXX</Link></div>
      <nav>
        <ul>
          <li>
            {/* <a class="nav-link" href="/">Movies</a> */}
            <Link className='nav-link' to={'Home'}>Home</Link>
          </li>
          <li>
          <Link className='nav-link' to={'Popular'}>Popular</Link>
          </li>
          <li>
          <Link className='nav-link' to={'TopRated'}>Top Rated</Link>
          </li>
          <li>
          <Link className='nav-link' to={'upcoming'}>upcoming</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  )
}

export default Nav