import { Slab } from 'react-loading-indicators'
import DodTitle from './MyComponents/dodTitle.tsx'
import Arc_Logo from './MyComponents/arc_logo.tsx'

function App() {

  return (
    <div className='wrapper'>
      <div className='container'>
      <div  className='logo_wrap'>
        <Arc_Logo />
        <DodTitle />
      </div>
      <Slab color="#031ce3" size="medium" text="A web-based workshop facilitator under construction." textColor="" />
      <p className='credits credits_1'>
        Designer Developer: <a target='_blank' href='https://sumitsute.com'>sumit sute</a>
      </p>
      <p className='credits credits_2'>
        With Design Support  From: <a target='_blank' href='https://sumitsute.com'>1. , 2. ,  3. </a>
      </p>
    </div>
    </div>
  )
}

export default App
