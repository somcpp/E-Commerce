import React, { useEffect } from 'react'
import { selectLoggedInUser,signOutAsync } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'
const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);

    useEffect(() => {
        dispatch(signOutAsync())
    })
  return (
    <div>
      {!user && <Navigate to='/login' replace={true}></Navigate>}
    </div>
  )
}

export default Logout
