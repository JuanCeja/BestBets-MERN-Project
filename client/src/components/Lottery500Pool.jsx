import React, { useEffect, useState } from 'react'
import './lottery-pool.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Lottery500Pool = (props) => {

    const history = useHistory()

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [num3, setNum3] = useState('')
    const [num4, setNum4] = useState('')
    const [num5, setNum5] = useState('')
    const [powerball, setPowerball] = useState('')
    const [allPicks, setAllPicks] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/lotterypick')
            .then(res => {
                console.log(res.data);
                setAllPicks(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const submitPick = (e) => {
        e.preventDefault();

        const newPick = {
            numberOne: num1,
            numberTwo: num2,
            numberThree: num3,
            numberFour: num4,
            numberFive: num5,
            powerball: powerball
        }

        axios.post('http://localhost:8000/api/create/lotterypick', newPick)
            .then(res => {
                console.log(res.data)
                console.log('SUCCESS CLIENT')
                history.push('/lottery/500/pool')
            })
            .catch(err => {
                console.log('error client');
                console.log(err.response.data);

                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <div className='body'>
                <h1>9 ways to win!</h1>
                <img src="/images/lotto-prizes.png" alt="lotto prizes" />
                <h1>Powerball Odds</h1>
                <img src="/images/powerball-odds.png" alt="powerball odds" />
                <h1>Current Entries</h1>
                <table className='lottery-picks-table'>
                    <thead>
                        <tr>
                            <td>Pick 1</td>
                            <td>Pick 2</td>
                            <td>Pick 3</td>
                            <td>Pick 4</td>
                            <td>Pick 5</td>
                            <td>Powerball</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPicks.map((picks, idx) => {
                                return (
                                    <tr key={picks._id}>
                                        <td>{picks.numberOne}</td>
                                        <td>{picks.numberTwo}</td>
                                        <td>{picks.numberThree}</td>
                                        <td>{picks.numberFour}</td>
                                        <td>{picks.numberFive}</td>
                                        <td>{picks.powerball}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <h1>Enter your picks here for a chance to win!</h1>
                <p>Any winnings that are won on the powerball will be evenly split up in 500 ways.
                    If grand prize is won the official ticket submitter will take 10% and also get
                    an additional share when split.
                </p>
                <form onSubmit={submitPick}>
                    {errors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
                    <div>
                        <input onChange={e => setNum1(e.target.value)} className='lotterypick' />
                        <input onChange={e => setNum2(e.target.value)} className='lotterypick' />
                        <input onChange={e => setNum3(e.target.value)} className='lotterypick' />
                        <input onChange={e => setNum4(e.target.value)} className='lotterypick' />
                        <input onChange={e => setNum5(e.target.value)} className='lotterypick' />
                        <input placeholder='Ball' onChange={e => setPowerball(e.target.value)} className='powerball' />
                    </div>
                    <div className='form-btn'>
                        <button>Enter Your Pick</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Lottery500Pool