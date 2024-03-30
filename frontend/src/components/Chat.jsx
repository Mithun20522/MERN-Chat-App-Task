import React from 'react'
import Conversation from './Conversation'


const Chat = () => {
  const arr = [{message:"hello how are you?"}, {message:"Im fine at wysa"}, {message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium facere praesentium mollitia quis officia vero cupiditate omnis quibusdam quia fuga quasi placeat dolorum vel ut, labore illum voluptatem sed beatae."}];
  return (
    <section>
        <Conversation arr ={arr}/>
    </section>
  )
}

export default Chat