import React from 'react'
import Header from '../components/Header'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='homepage min-h-screen'>
      <Header/>
      <Chat/>
    </div>
  )
}

export default Home