import React, { useState } from 'react'
import { Placeholder } from 'react-bootstrap'
import Axios from 'axios'
import { auth_domain } from '../Global/Endpoint'
import {useRouter} from 'next/router'

const Signin=(props)=>{
    const router=useRouter()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [errors,setErrors]=useState([])
const submit=async(e)=>{
    try {
        e.preventDefault()
    const register=await Axios.post(`/api/auth/signin`,{email:email,password:password})
    router.push('/')
    } catch (error) {
        setErrors([...error.response.data.error])
    }
    
}

return(
    <div>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email"></input>
        <br />
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"></input>
        <br />
        {errors.length>0?errors.map((err)=>{
            return(<p>{err.param}: {err.msg} </p>)
        }):null}
        <button onClick={submit}>SUBMIT</button>
    </div>
)

}


export default Signin