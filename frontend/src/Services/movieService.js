import React from 'react';
import axios from 'axios';

export const addMovie= (movieDetails)=>{
 
   return new Promise(async(resolve, reject)=>{
    return await axios.post('http://localhost:5001/api/movie/addMovie',movieDetails)
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




export const listMovies= (movieDetails)=>{
 
   return new Promise(async(resolve, reject)=>{
    return await axios.get('http://localhost:5001/api/movie/listMovies')
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
