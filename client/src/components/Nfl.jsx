import React from 'react'
import './sports-page.css'

const Nfl = (props) => {
    return (
        <div className='main'>
            <h1>NFL</h1>
            <div className='info'>
                <h3>Upcoming Games</h3>
                <p>Latest NFL Betting Odds, News, & Predictions. View NFL lines for mainline markets, alternate markets, player props & more!</p>
            </div>
            <h2>August 4th</h2>
            <div>
                <div className='game-info'>
                    <div className='header'>
                        <p><strong>GAMES</strong></p>
                        <p><strong>MONEYLINE</strong></p>
                    </div>
                    <div className='individual-game-row'>
                        <p className='game-time'>5:00 PM</p>
                        <div className='teams-info'>
                            <p>Jacksonville Jaguars</p>
                            <p>Las Vegas Raiders</p>
                        </div>
                        <div className='moneyline-info'>
                            <p>No moneylines available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nfl