import AdminOrders from "../features/admin/components/AdminOrders";
import NavBar from "../features/Navbar/Navbar"

export function AdminOrderPage() {
    return (
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
    )
}