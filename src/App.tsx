import { useState } from 'react'
import DodLogo from '../public/Dof D.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={DodLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>DoD Facilitator Site</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is a <code>boilterplate</code> and a work in progress.
        </p>
      </div>
      <p className="read-the-docs">
        Designer Developer: <a target='_blank' href='https://sumitsute.com'>sumit sute</a>
      </p>
    </>
  )
}

export default App
