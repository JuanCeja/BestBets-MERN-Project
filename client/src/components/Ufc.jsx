import React from 'react'
import {Link} from 'react-router-dom'

const Ufc = () => {
    return (
        <div className='main'>
            <h1>UFC</h1>
            <div className='info'>
                <h3>Upcoming Games</h3>
                <p>Latest UFC Betting Odds, News, & Predictions. View UFC lines for mainline markets, alternate markets, player props & more!</p>
            </div>
            <h2>This Month(April 09th)</h2>
            <h1>Main Card</h1>
            <div>
                <div className='game-info'>
                    <div className='header'>
                        <p><strong>MATCHES</strong></p>
                        <p><strong>MONEYLINE</strong></p>
                    </div>
                    <div className='individual-game-row'>
                        <p className='game-time'>7:00 PM</p>
                        <div className='teams-info'>
                            <p>Alexander Volkanovski</p>
                            <p>The Korean Zombie</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/ufc/volkanovski/zombie'}>
                                <div className='moneyline-odds'>
                                    <p>-670</p>
                                    <img src="/images/4winds.jpg" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>+550</p>
                                    <img src="/images/fox-bet.jfif" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>7:00 PM</p>
                        <div className='teams-info'>
                            <p>Aljamain Sterling</p>
                            <p>Petr Yan</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/ufc/sterling/yan'}>
                                <div className='moneyline-odds'>
                                    <p>+360</p>
                                    <img src="/images/10bet.webp" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-450</p>
                                    <img src="/images/ceasers.png" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>7:00 PM</p>
                        <div className='teams-info'>
                            <p>Gilbert Burns</p>
                            <p>Khamzat Chimaev</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/ufc/burns/chimaev'}>
                                <div className='moneyline-odds'>
                                    <p>+410</p>
                                    <img src="/images/fanduel.webp" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>-500</p>
                                    <img src="/images/betfair.jpg" alt="fanduel" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='game-info'>
                    <div className='individual-game-row'>
                        <p className='game-time'>7:00 PM</p>
                        <div className='teams-info'>
                            <p>Mackenzie Dern</p>
                            <p>Tecia Torres</p>
                        </div>
                        <div className='moneyline-info'>
                            <Link to={'/ufc/dern/torres'}>
                                <div className='moneyline-odds'>
                                    <p>-108</p>
                                    <img src="/images/fanduel.webp" alt="fanduel" />
                                </div>
                                <div className='moneyline-odds'>
                                    <p>+105</p>
                                    <img src="/images/img3.png" alt="fanduel" />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Ufc