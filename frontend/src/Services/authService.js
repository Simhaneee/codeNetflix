import React from 'react';
import axios from 'axios';

export const registerUser= (userDetails)=>{
 
   return new Promise(async(resolve, reject)=>{
    return await axios.post('http://localhost:5001/api/users/register',userDetails)
    .then((response)=>{
     if(response.status==200){
        resolve(response.data)
     }else{
        reject(response.message)
     }
    })
    .catch((err)=>{
        reject(err)
    })
   })
}

export const signInUser= (userSignInDetails)=>{
 
   return new Promise(async(resolve, reject)=>{
    return await axios.post('http://localhost:5001/api/users/signIn',userSignInDetails)
    .then((response)=>{
     if(response.status==200){
        resolve(response.data)
     }else{
        reject(response.message)
     }
    })
    .catch((err)=>{
        reject(err)
    })
   })
}


