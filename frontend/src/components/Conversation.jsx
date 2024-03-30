import React from 'react'

const Conversation = ({arr}) => {
  return (
    arr.map((item, idx) => (
        <div key={idx} className='max-w-sm rounded-2xl mx-auto p-5 space-y-2 bg-[#fff] mt-5 overflow-hidden'>
          <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" className='w-10 h-10 rounded-full' />
          <p className='text-sm inline-block'>{item.message}</p>
      </div>
    ))
  )
}

export default Conversation