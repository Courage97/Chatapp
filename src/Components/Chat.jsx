import React from 'react'
import { FiVideo } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import  Messages from './Messages'
import  Input from './Input'

const Chat = () => {
  return (
    <>
      <div className="chat">
        <div className="chatinfo">
          <span>Israel</span>
          <div className="chaticon">
          <FiVideo  size={25}/>
            <IoPersonAddOutline size={25}/>
            <IoIosMore size={25} />

          </div>
        </div>
        <Messages/>
        <Input/>
      </div>
    </>
  )
}

export default Chat
