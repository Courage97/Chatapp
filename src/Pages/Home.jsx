import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container1">
          <Sidebar/>
          <Chat/>
        </div>
      </div>
    </>
  )
}

export default Home
