import React from "react";
import { useSelector , useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js"
import {logout} from "../../store/AuthSlice.js"

function LogoutBtn(){

       const dispatch = useDispatch()
       const logoutHandler = ()=>{
              authService.logout().then(()=>{
                     dispatch(logout())
              })
       }

       return (
              <button 
              className="inline-block px-6 py-2 duration-200 hover:bg-pink-800 rounded-full"
              onClick={logoutHandler}
              >
                     Logout
              </button>
       )
}

export default LogoutBtn