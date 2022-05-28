import React from 'react'
import './sports-page.css'
import { Link } from 'react-router-dom'

const NBA = (props) => {
    return (
        <div className='main'>
            <h1>NBA</h1>
            <div className='info'>
                <h3>Upcoming Games</h3>
                <p>Latest NBA Betting Odds, News, & Predictions. View NBA lines for mainline markets, alternate markets, player props & more!</p>
            </div>
            <h2>Today(March 31st)</h2>
            <div>
                <div className='game-info'>
                    <div className='header'>
                        <p><strong>GAMES</strong></p>
                        <p><strong>MONEYLINE</strong></p>
                    </div>
                    <div className='individual-game-row'>
                        <p className='game-time'>4:00 PM</p>
                        <div className='teams-info'>
                            <p>Cleveland Cavaliers</p>
                            <p>Dallas Mavericks</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'nba/cavaliers/mavericks'}>
                                <div className='moneyline-odds'>
                                    <p>+116</p>
                                    <img src="/images/fanduel.webp" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-122</p>
                                    <img src="/images/4winds.jpg" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>4:30 PM</p>
                        <div className='teams-info'>
                            <p>Detroit Pistons</p>
                            <p>Philadelphia 76ers</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/nba/76ers/pistons'}>
                                <div className='moneyline-odds'>
                                    <p>+435</p>
                                    <img src="/images/10bet.webp" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-549</p>
                                    <img src="/images/sports-illustrated.jpg" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>4:30 PM</p>
                        <div className='teams-info'>
                            <p>Portland Trailblazers</p>
                            <p>New Orleans Pelicans</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/nba/trailblazers/pelicans'}>
                                <div className='moneyline-odds'>
                                    <p>+850</p>
                                    <img src="/images/10bet.webp" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-1111</p>
                                    <img src="/images/bet365.webp" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>7:00 PM</p>
                        <div className='teams-info'>
                            <p>Golden State Warrios</p>
                            <p>Phoenix Suns</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/nba/warriors/suns'}>
                                <div className='moneyline-odds'>
                                    <p>+168</p>
                                    <img src="/images/img1.jpg" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-185</p>
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

export default NBA