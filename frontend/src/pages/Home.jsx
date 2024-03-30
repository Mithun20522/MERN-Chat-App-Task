import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/register');
  }
  return (
    <section className='flex justify-center items-center w-full h-screen'>
      <button onClick={handleClick} className='bg-slate-700  text-white  font-medium px-5 py-2 hover:bg-slate-900 rounded-md'>Start your conversation</button>
    </section>
  )
}

export default Home