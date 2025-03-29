import { useState } from 'react'

const Statistics = ({good, total, ...props}) =>
    <>
        <div>good {good}</div>
        <div>neutral {props.neutral}</div>
        <div>bad {props.bad}</div>
        <div>all {total}</div>
        <div>average {(good - props.bad)/total}</div>
        <div>positive {good*100/total} %</div>
    </>

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total = good + neutral + bad
  return (
    <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <h1>statistics</h1>
            {total === 0 ? <div>No feedbacks</div>
                : <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
            }
    </div>
  )
}

export default App
