import { Navigate } from 'react-router-dom'
import { selectLoggedInUser } from '../authSlice'
import {useSelector} from 'react-redux'
import { selectUserInfo } from '../../user/userSlice'

const ProtectedAdmin = ({children}) => {
    const user = useSelector(selectUserInfo);
    if(!user) {
        return <Navigate to="/login" replace={true}></Navigate>;
    }
    if(user && user.role!=='admin') {
        return <Navigate to="/" replace={true}></Navigate>
    }
    return children;
}

export default ProtectedAdmin
