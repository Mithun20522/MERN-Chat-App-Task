import React from 'react'

const Register = () => {
  return (
    <div className='max-w-lg mx-auto p-3 mt-20'>
        <h1 className='text-3xl text-center mb-5'>Register Here</h1>
        <form className='flex flex-col gap-5'>
            <input 
            type="text" 
            name='username' 
            placeholder='john' 
            className='border  placeholder:text-slate-500 p-3 rounded-md text-center' 
            />
            <input 
            type="email" 
            name='email' 
            placeholder='john@example.com' 
            className='border placeholder:text-slate-500 p-3 rounded-md text-center' 
            />
            <input 
            type="password" 
            name='password' 
            placeholder='*********' 
            className='border placeholder:text-slate-500 p-3 rounded-md text-center'  
            />
            <button className='p-3 text-white font-semibold bg-slate-600 hover:bg-slate-800 rounded-md'>Register</button>
        </form>
    </div>
  )
}

export default Register