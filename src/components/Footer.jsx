import React from 'react'
import { UserAuth } from "../utils/AuthContext"
const Footer = () => {
  const { user } = UserAuth();
  let name;
  if (user) {
    if (user.displayName != null) {
      name = user.displayName;
    } else {
      name = user.email;
    }
  }
  return (

      <div className="flex mob:flex-col justify-around w-full shadow h-14 bg-yellow text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40">
        <span className="text-left mob:text-xs mob:text-center">Hey  {user && name}....  Thanks for using Insta Food </span>
        <span className="text-center mob:text-xs">Developed by Sandesh</span>
      </div>

  )
}

export default Footer
