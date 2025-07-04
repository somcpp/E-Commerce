import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import UserProfile from '../features/user/components/userProfile'

const UserProfilePage = () => {
  return (
    <div>
      <Navbar>
        <h1 className='mx-auto text-2xl'>My Profile</h1>
        <UserProfile></UserProfile>
      </Navbar>
    </div>
  )
}

export default UserProfilePage
