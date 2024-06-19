import React from 'react'
import About from '../assets/about.jpg';

const Message = () => {
  return (
    <>
      <div className="message owner">
        <div className="message-info">
        <img src={About} alt="" />
        <span>Just now</span>
        </div>
        <div className="message-content owner">
          <p>Hello</p>
          <img src={About} alt="" />
        </div>
      </div>
    </>
  )
}

export default Message
