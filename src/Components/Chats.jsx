import React from 'react'
import About from '../assets/about.jpg';

const Chats = () => {
  return (
    <div>
      <div className="userchat">
          <img src={About} alt="" />
          <div className="userchatinfo">
            <span>Israel</span>
            <p>Hi</p>
          </div>
        </div><div className="userchat">
          <img src={About} alt="" />
          <div className="userchatinfo">
            <span>Israel</span>
            <p>How are you?</p>
          </div>
        </div>
        <div className="userchat">
          <img src={About} alt="" />
          <div className="userchatinfo">
            <span>Israel</span>
            <p>Keep doing great</p>
          </div>
        </div>
        <div className="userchat">
          <img src={About} alt="" />
          <div className="userchatinfo">
            <span>Israel</span>
            <p>HELLO</p>
          </div>
        </div>
    </div>
  )
}

export default Chats
