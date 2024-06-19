import React from 'react'
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { PiFileImage } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";

const Input = () => {
  return (
    <>
      <div className="input">
        <input type="text" placeholder='Messages...' />
        <div className="send">
        <MdOutlineKeyboardVoice size={25} />
        <input type="file" id='file' style={{display:'none'}} />
        <label htmlFor="file">
        <PiFileImage size={25} />
        </label>
        <button type='submit'><LuSendHorizonal size={25} /></button>
        </div>
      </div>
    </>
  )
}

export default Input
