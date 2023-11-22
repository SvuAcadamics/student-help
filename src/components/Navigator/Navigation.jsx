import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <header>
      <nav>
        <div className='container'>
          <Link to="/">Home</Link>
          <Link to="/syllabus">Syllabus</Link>
          <Link to='/questionpaper'>Question Paper</Link>
          <Link to='/clubs'>Clubs</Link>
        </div>
      </nav>
      </header>
    </>
  )
}
export default Navigation;