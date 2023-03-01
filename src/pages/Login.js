import React,{useState} from 'react'
import { Avatar,} from '@mui/material'
import {Person,RemoveRedEye} from "@mui/icons-material"
const Login = () => {
  const [type, setType] = useState(false);
  return (
    <div className='login'>
    
        <div className='form'>
        <h1 className='heading-login'>Sign In</h1>
          <Avatar src='https://cdn-icons-png.flaticon.com/512/295/295128.png'
            sx={{ width: 90, height: 90 }}

          />
          <div className='form-group mt-4'>
            <input type={"text"} placeholder="Email..." />
            <Person />
          </div>
          <div className='form-group mt-4'>
            <input type={ type?"password":"text"} placeholder="Password..." />
       
            <RemoveRedEye onClick={() => setType(!type)} />
         
            
          </div>
         <button className='btn-login'>Sign In</button>
     
    </div>
        
    </div>
  )
}

export default Login