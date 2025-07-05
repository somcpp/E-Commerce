import Navbar from '../features/Navbar/Navbar';
import UserOrders from '../features/user/components/userOrders';

export function UserOrdersPage() {
    return(
        <div>
            <Navbar>
                <h1 className='mx-auto text-2xl'>My Orders</h1>
                <UserOrders></UserOrders>
            </Navbar>
        </div>
    )
}