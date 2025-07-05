import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUserOrderAsync, selectUserOrders } from '../userSlice';
import { selectLoggedInUser } from '../../auth/authSlice';


export default function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectUserOrders);
  console.log(orders)
  useEffect(() => {
    if (user && user.id) {
    dispatch(fetchLoggedInUserOrderAsync(user.id));
  }
}, []);

  return (
    <div>
      {orders.map((order) => (
  <div key={order.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
    <h3>Order ID: {order.id}</h3>
    <p>Total Amount: ₹{order.totalAmount}</p>
    
    {/* Only do this if totalItems is a number */}
    <p>Total Items: {typeof order.totalItems === 'number' ? order.totalItems : JSON.stringify(order.totalItems)}</p>

    {/* User Info (optional) */}
    {order.user && (
      <div>
        <p>User: {order.user.name}</p> {/* Change based on actual field */}
        <p>Email: {order.user.email}</p>
      </div>
    )}

    {/* Items inside the order */}
    <h4>Items:</h4>
    <ul>
      {order.items.map((item, index) => (
        <li key={index}>
          {item.title} - ₹{item.price} x {item.quantity}
        </li>
      ))}
    </ul>
  </div>
))}

    </div>
  );
}