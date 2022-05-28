import React from 'react'
import { Link } from 'react-router-dom'

const Boxing = (props) => {
    return (
        <div className='main'>
            <h1>Boxing</h1>
            <div className='info'>
                <h3>Upcoming Matches</h3>
                <p>Latest Boxing Betting Odds, News, & Predictions. View NBA lines for mainline markets, alternate markets, player props & more!</p>
            </div>
            <h2>Tomorrow(April 2nd)</h2>
            <div>
                <div className='game-info'>
                    <div className='header'>
                        <p><strong>MATCHES</strong></p>
                        <p><strong>MONEYLINE</strong></p>
                    </div>
                    <div className='individual-game-row'>
                        <p className='game-time'>9:00 AM</p>
                        <div className='teams-info'>
                            <p>Erica Alvarez</p>
                            <p>Gerogia O'Connor</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'boxing/alvarez/oconnor'}>
                                <div className='moneyline-odds'>
                                    <p>+1100</p>
                                    <img src="/images/10bet.webp" alt="10bet" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-2200</p>
                                    <img src="/images/img2.jpg" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>9:00 AM</p>
                        <div className='teams-info'>
                            <p>Ester Konecna</p>
                            <p>April Hunter</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/boxing/ester/hunter'}>
                                <div className='moneyline-odds'>
                                    <p>+1220</p>
                                    <img src="/images/fanduel.webp" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-1600</p>
                                    <img src="/images/sports-illustrated.jpg" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>10:00 AM</p>
                        <div className='teams-info'>
                            <p>Lukas Ndafoluma</p>
                            <p>Bradley Rea</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/nba/trailblazers/pelicans'}>
                                <div className='moneyline-odds'>
                                    <p>+1280</p>
                                    <img src="/images/img7.webp" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-2000</p>
                                    <img src="/images/fanduel.webp" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>1:00 PM</p>
                        <div className='teams-info'>
                            <p>Zak Chelli</p>
                            <p>Florian Marku</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/nba/warriors/suns'}>
                                <div className='moneyline-odds'>
                                    <p>+1280</p>
                                    <img src="/images/img1.jpg" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-2000</p>
                                    <img src="/images/img5.jpg" alt="fanduel" />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Boxing