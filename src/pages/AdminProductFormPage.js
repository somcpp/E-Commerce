import ProductForm from "../features/admin/components/ProductForm";
import NavBar from "../features/Navbar/Navbar";
function AdminProductFormPage() {
    return (
        <div>
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
        </div>
    )
}
export default AdminProductFormPage