import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../Base/Base'
import Students from './Students'

function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const handleLogin = async()=>{
        const userInfo = {
            email,
            password,
        }
const res = await fetch(`https://cloud-mongo-qveq.vercel.app/users/login`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json"
    }
});

   const data = await res.json();
   console.log(data.data.token)
  localStorage.setItem("token", data.data.token)
   navigate("/students")
    }
  return (
 <Base
 title={"Login Page"}
 description={"Please login to continue"}
 >
        <TextField  label="Email" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Email'
         type="email"
         value= {email}
         onChange={(e)=>setEmail(e.target.value)}
         />
        <TextField  label="Password" variant="outlined" fullWidth sx={{ m: 1 }} 
         placeholder='Enter Password'
         type="Password"
         value ={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
        <Button
        type="submit"
        variant="contained"
        onClick={handleLogin}
        >Login</Button>
   </Base>

  )
}

export default LoginPage