import NavBar from "../features/Navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductDetails"
function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
     );
}

export default ProductDetailPage;