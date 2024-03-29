import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('http://localhost:4000/api/user/login',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json();
      if(res.ok){
        setLoading(false);
        toast.success(data.message);
        setTimeout(() => {
          navigate('/');
        }, 500);
      }
      else{
        setLoading(false);
        toast.error(data.message);
        return;
      }
      
    } catch (error) {
      toast.error(error.message);
    }
  }
  
  return (
    <div className='max-w-lg mx-auto p-3 mt-20'>
        <h1 className='text-3xl text-center mb-5'>Login Here</h1>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <input 
            type="email" 
            id='email' 
            placeholder='john@example.com' 
            onChange={handleChange} 
            className='border focus:outline-none placeholder:text-slate-500 p-3 rounded-md text-center' 
            />
            <input 
            type="password" 
            id='password' 
            placeholder='*********' 
            onChange={handleChange} 
            className='border focus:outline-none placeholder:text-slate-500 p-3 rounded-md text-center'  
            />
            <button disabled={loading} className='p-3 text-white font-semibold bg-slate-700 hover:bg-slate-900 rounded-md'>
            {
            loading ? 'loading...' : 'Log in'
          }
            </button>
        </form>
        <Toaster/>
    </div>
  )
}

export default Login