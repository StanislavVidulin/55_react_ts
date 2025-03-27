import { ProductCardProps } from "./types";
import './styles.css'

function Product ({name, price}: ProductCardProps) {
    return (
        <div className="product-container">
            <div>Product: {name}</div>
            <div>Price: {price}</div>
        </div>
    )
}

export default Product;