import React from 'react'
import '../login/sear.css'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div>
        <section id="SearchPhead">
            <div className="SearchPheadings mt-[1vw] mb-[1vw]">
                <Link to="/"><img className='w-[4vw] h-[4vw] rounded-full mr-20 transform translate-y-[-10px]  border-2 border-gray-900' 
                src="/image/logo.jpg" 
                alt="Logo" /></Link>
                <h1><Link to="/">Home</Link></h1>
                <h1><Link to="/search">Search</Link></h1>
                <h1></h1>
                <h1></h1>
                <h1></h1>
            </div>
           
        </section>
        <div className=''></div>
    </div>
  )
}

export default TopBar