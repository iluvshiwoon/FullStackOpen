import { useState } from 'react'

const StatisticLine = ({text, value}) => 
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>

const Statistics = ({good, total, ...props}) =>
    <table>
        <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={(good - props.bad)/total} />
            <StatisticLine text="positive" value={good*100/total + " %"} />
        </tbody>
    </table>

const Button = ({func,value,text}) => <button onClick={() => func(value + 1)}>{text}</button>

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total = good + neutral + bad
  return (
    <div>
            <h1>give feedback</h1>
            <Button func={setGood} value={good} text="good" />
            <Button func={setNeutral} value={neutral} text="neutral" />
            <Button func={setBad} value={bad} text="bad" />
            <h1>statistics</h1>
            {total === 0 ? <div>No feedbacks</div>
                : <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
            }
    </div>
  )
}

export default App
