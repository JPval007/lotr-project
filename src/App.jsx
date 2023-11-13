import React, { useState } from 'react'
import './App.css'
import Dashboard from './Dashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* <header>
        this is the header
      </header> */}
      <main>
        <img src='https://wallpapers.com/images/hd/lotr-landscape-artwork-44crsr9vijwvjrqd.jpg'
        alt='lord of the rings landscape with mountain background' className='bg-image' />
        <Dashboard />
      </main>
    </div>
  )
}

export default App
