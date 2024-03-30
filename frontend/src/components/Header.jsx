import React from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
 const handleLogOut = async() => {
    try {
        const res = await fetch('http://localhost:4000/api/user/logout', {
            method: 'POST'
        });
        const data = await res.json();
        if(res.ok){
            toast.success(data.message);
            setTimeout(() => {
                navigate('/login');
            }, 500);
        }
        else{
            toast.error(data.message);
            return;
        }
    } catch (error) {
        toast.error(error.message);
    }
 }
  return (
    <header className='flex justify-end p-5'>
        {/* <button onClick={handleLogOut} className='px-3 py-1  mr-7 rounded-md bg-slate-700 hover:bg-slate-900 text-white font-semibold text-sm'>Log out</button> */}
        <Toaster/>
    </header>
  )
}

export default Header