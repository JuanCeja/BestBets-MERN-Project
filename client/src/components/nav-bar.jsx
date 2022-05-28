import React from 'react'
import { Link } from 'react-router-dom'
import './nav-bar.css'


const Navbar = (props) => {
    return (
        <div>
            <div className='nav-bar'>
                <div className='left-nav'>
                    <Link to={'/lottery/500/pool'}>My Bets</Link>
                    <Link to={'/'}>Home</Link>
                </div>
                <div className='title'>
                    <h1>Best-<span style={{color: 'red'}}>Bets</span></h1>
                    <p>online-betting</p>
                </div>
                <div className='right-nav'>
                    <select name="language" id="language">
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                    </select>
                    <Link>REGISTER</Link>
                    <Link>MY ACCOUNT</Link>
                </div>
            </div>

            <div className='all-content'>
                <div className='header-imgs'>
                    <img src="/images/img1.jpg" alt="sport-book icon" />
                    <img src="/images/img2.jpg" alt="sport-book icon" />
                    <img src="/images/img3.png" alt="sport-book icon" />
                    <img src="/images/img4.jpg" alt="sport-book icon" />
                    <img src="/images/img5.jpg" alt="sport-book icon" />
                    <img src="/images/img6.png" alt="sport-book icon" />
                    <img src="/images/img7.webp" alt="sport-book icon" />
                    <img src="/images/img8.jpg" alt="sport-book icon" />
                </div>
            </div>

        </div>
    )
}

export default Navbar