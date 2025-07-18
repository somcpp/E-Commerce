import './App.css';
import CartPage from './pages/cartPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Checkout from './pages/Checkout'
import ProductDetailPage from './pages/ProductDetailsPage'
import Protected from './features/auth/components/protected';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';
import { PageNotFound } from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import { UserOrdersPage } from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync, fetchLoggedInUserOrderAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
ForgotPasswordPage
import AdminProudctFormPage from './pages/AdminProductFormPage'
import { AdminOrderPage } from './pages/AdminOrdersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
    <Protected>
      <Home></Home>
    </Protected>),
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    )
  },
  {
    path: '/admin/orders',
    element: (
      <AdminOrderPage></AdminOrderPage>
      // <ProtectedAdmin>
        
      // </ProtectedAdmin>
    )
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProudctFormPage></AdminProudctFormPage>
      </ProtectedAdmin>
    )
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProudctFormPage></AdminProudctFormPage>
      </ProtectedAdmin>
    )
  },
  {
    path: '/login',
    element:<LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  { // only for testing - then page will be added
    path: '/cart',
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  { 
    path: '/checkout',
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  { 
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    )
  },
  {
    path: '/order-success/:id',
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    )
  },
  {
    path: '/orders',
    element: (
      <UserOrdersPage></UserOrdersPage>
    )
  },
  {
    path: '/logout',
    element: <Logout></Logout>,
  },
  {
    path: '/profile',
    element: (
      <UserProfilePage></UserProfilePage>
    ),
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: '*',
    element: (
      <PageNotFound></PageNotFound>
    )
  }
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
      dispatch(fetchLoggedInUserOrderAsync(user.id))
    }
  },[dispatch,user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
