import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>About
        <Link to="/Home">Home</Link>
{/* <Link to="/About">About</Link> */}
<Link to="/Contact">Contact</Link>
<Link to="/Services">Services</Link>
    </div>
  )
}

export default About