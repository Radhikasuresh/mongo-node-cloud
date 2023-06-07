import React from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()
  return (
    <Base
    title={"Welcome to Students application"}
    description={"This is a student data application"}
    >
     <h1>Please navigate to students app</h1>
     <button 
     className='buttonn'
     onClick={()=>navigate("/login")}>Login to the Website</button>
    </Base>
  )
}

export default Dashboard