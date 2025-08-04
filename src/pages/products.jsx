import Navbar from "../components/Navbar.jsx";
import ProductCard from "../components/ProductCard.jsx";

function Products({ products, addToCart }){
    return(
        <div className="container my-4">
            <h2 className="text-center">our products</h2>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                ))}
            </div>
        </div>
    )
}

export default Products;