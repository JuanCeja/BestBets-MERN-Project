import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

const Main = (props) => {
    return (
        <div>
            <div className='sections'>
                <h2>Top 3 Winners For This Month</h2>
                <img className='section-img' src="/images/Trophy.jpg" alt="trophy" />
                <div className='top-winners-table'>
                    <table>
                        <thead>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td><strong>Ammount</strong></td>
                                <td><strong>Winning Percentage</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Billy Walters</td>
                                <td>$3,500,000</td>
                                <td>73%</td>
                            </tr>
                            <tr>
                                <td>Tony 'The Lizard' Bloom</td>
                                <td>$751,000</td>
                                <td>82%</td>
                            </tr>
                            <tr>
                                <td>Parlay Patz</td>
                                <td>$619,000</td>
                                <td>79%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='betting-section'>
                <h2>Sports Betting</h2>
                <img className='section-img' src="/images/sports-betting.png" alt="sports betting" />
                <div className='sports-betting-imgs'>
                    <div className='sports-logo'>
                        <Link to={'/nfl'}><img src="/images/nfl.jpg" alt="nfl" /></Link>
                        <p>NFL</p>
                    </div>
                    <div className='sports-logo'>
                        <Link to={'/ufc'}><img src="/images/ufc.jpg" alt="ufc logo" /></Link>
                        <p>UFC</p>
                    </div>
                    <div className='sports-logo'>
                        <Link to={'/nba'}><img src="/images/nba.jpg" alt="nba logo" /></Link>
                        <p>NBA</p>
                    </div>
                    <div className='sports-logo'>
                        <Link to={'/boxing'}><img src="/images/boxing.jpg" alt="boxing gloves" /></Link>
                        <p>Boxing</p>
                    </div>
                </div>
            </div>
            <div className='powerball-section'>
                <h2>Join a Powerball Pool</h2>
                <img className='section-img' src="/images/lotto.jpg" alt="powerball" />
                <div className='powerball-links'>
                    <Link to={'/lottery/500/pool'}>500 pool</Link>
                    <Link to={'/lottery/500/pool'}>1500 pool</Link>
                    <Link to={'/lottery/500/pool'}>2500 pool</Link>
                    <Link to={'/lottery/500/pool'}>5000 pool</Link>
                </div>
            </div>
        </div>
    )
}

export default Main