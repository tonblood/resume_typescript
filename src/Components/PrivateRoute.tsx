import React from 'react'
import Resume from './Resume/Resume'
import {Outlet, Navigate} from 'react-router'

const Auth = () =>{
  const user = localStorage.getItem('user')
  if(user){
    return true
  }
  else return false
}
const PrivateRoute =() =>{
  const isAuth = Auth();
  return isAuth ? <Outlet/> : <Navigate to="/" />
}

export default PrivateRoute