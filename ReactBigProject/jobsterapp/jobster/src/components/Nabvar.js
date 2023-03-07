import React, { useState } from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import { useDispatch,useSelector } from 'react-redux';
import { logOutUser, toggleSidebar } from '../features/user/userSlice';





const Nabvar = () => {

 const [showLogout,setShowLogot]=useState(false)
  const {user}=useSelector(store=>store.user)
   const dispatch=useDispatch()

  const toggle=()=>{
     dispatch(toggleSidebar())
  }

  return ( <Wrapper>
    <div className='nav-center'>
      <button
        type='button'
        className='toggle-btn'
        onClick={toggle}
      >
        <FaAlignLeft />
      </button>
      <div>
        <Logo />
        <h3 className='logo-text'>dashboard</h3>
      </div>
      <div className='btn-container'>
        <button
          type='button'
          className='btn'
          onClick={() =>setShowLogot(!showLogout)}
        >
          <FaUserCircle />
          {user?.name}
          <FaCaretDown />
        </button>
        <div className={showLogout? 'dropdown show-dropdown':"dropdown"}>
          <button
            type='button'
            className='dropdown-btn'
            onClick={() => {
              dispatch(logOutUser())
            }}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  </Wrapper>
  )
}

export default Nabvar