import React from 'react'

const Conversation = ({messages}) => {
  return (
    messages.map((msg, idx) => (
        <div key={idx} className='max-w-sm w-fit -ml-1 rounded-2xl mx-auto p-5 space-y-2 bg-[#fff] mt-5 overflow-hidden'>
          {/* <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" className='w-10 h-10 rounded-full' /> */}
          <p className='text-lg inline-block font-semibold'>{msg}</p>
      </div>
    ))
  )
}

export default Conversation