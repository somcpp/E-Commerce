import NavBar from "../features/Navbar/Navbar";
import AdminProductList from "../features/admin/components/AdminProductList"

function AdminHome() {
    return(
        <div>
            <NavBar>
                <AdminProductList></AdminProductList>
            </NavBar>
        </div>
    )
}

export default AdminHome;