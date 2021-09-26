import axios from 'axios'
import React, { useState } from 'react'
import { Placeholder } from 'react-bootstrap'



const Home=(props)=>{

console.log(props)
return(
    <div>
       <h1>Home Page123</h1>
       <p>{props.user.currentUser?props.user.currentUser.email:"Not logged in"}</p>
    </div>
)

}
export const getServerSideProps=async({req})=>{
    try{
        console.log(req.headers.cookie)
        let result=await axios.get('http://auth-serv:3002/api/auth/currentUser',{headers:req.headers})
        return {props:{user:result.data}}
    }
    catch(err){
        console.log(err)
        return {props:{err:"ERROR"}}
        
    }
    


    
}

export default Home