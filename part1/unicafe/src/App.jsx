import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Stat = ({name, value}) => <div>{name} {value}</div>

const Percent = ({name, value}) => <div>{name} {value} %</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    const handleClick = (value,setValue) => setValue(value + 1)
    const calcTotal = () => good + neutral + bad
    const total = calcTotal()
  return (
    <div>
            <Header text="give feedback" />
            <button onClick={() => handleClick(good,setGood)}>good</button>
            <button onClick={() => handleClick(neutral,setNeutral)}>neutral</button>
            <button onClick={() => handleClick(bad,setBad)}>bad</button>
            <Header text="statistics" /> 
            {total === 0 ? 
                <div>No feedbacks</div>
                : (
                    <> 
                        <Stat name="good" value={good} />
                        <Stat name="neutral" value={neutral} />
                        <Stat name="bad" value={bad} />
                        <Stat name="all" value={bad + neutral + good} />
                        <Stat name="average" value={(good - bad)/total} />
                        <Percent name="positive" value={good*100/total} />
                    </>
                    )
            }
    </div>
  )
}

export default App
