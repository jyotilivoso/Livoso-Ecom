import React from 'react'

import { useContext, useState } from 'react'
import { ImGrin, ImSearch } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart, } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { getUserData } from '../service/data';
function Header() {
  
  console.log(getUserData())

    
    return (
        <div>
            <header className=' h-16 shadow-md bg-white fixed w-full z-40'>
                <div className="h-full container mx-auto flex items-center px-4 justify-between">
                    <div className=''>

              
                        <Link to={"/"}>
            <Logo w={120} h={60} />
          </Link>
                    </div>

                    <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full '>
                        <input type="text" placeholder='Search product here  ' className='w-full outline-none pl-4' />
                        <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center  justify-center rounded-r-full text-white' >
                            <ImSearch />
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center'>
                      <Link to="/login" className='bg-red-600 text-white rounded-full hover:bg-red-700  px-3 py-1'>Login</Link>
                               
                </div>

                {/* <div className='flex gap-4 justify-center'>
          <div className=' cursor-pointer relative group justify-center'>
            {
              user?._id && (
                <div className='text-3xl 'onClick={()=>{setmenudisplay(prev=>!prev)}}>
              {
                user?.profilepic ? (
                  <img src={user?.profilepic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (<FaRegUserCircle />)
              }
            </div>
              )
            }
            {
              menudisplay && (
                <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded '>
                <nav>
                  {
                    user?.role === ROLE.ADMIN && (<Link to={"admin-penal/all-product"} className='whitespace-nowrap hidden md:block hover:bg-slate-100'>Admin penal</Link>
                    )
                  }
                </nav>
    
                </div>
              )
            }
          </div>
          <Link to={"/Cart"} className='text-2xl  relative'>
            <span><FaShoppingCart /></span>
            {
              user?._id && (
                <div className=' flex bg-red-600 text-white w-5 h-5 rounded-full p-1 items-center justify-center absolute -top-2 -right-3  '>
                <p className='text-sm'>{context?.countProduct}</p>
              </div>
              )
            }
          
          </Link>
          <div>
            {
              user?._id ? (
                <button onClick={hendelLogout} className='bg-red-600 text-white rounded-full hover:bg-red-700  px-3 py-1'>Logout</button>
              ) : (
                <Link to={"/Login"} className='bg-red-600 text-white rounded-full hover:bg-red-700  px-3 py-1'>login</Link>

              )
            }
          </div>
        </div> */}
        </div>
    </header >
    </div >
  )
}

export default Header
