import { useEffect } from "react";

import { ProductCardProps } from "./types";
import './styles.css'

function Product ({name, price}: ProductCardProps) {
// Unmounting - выполняем действие при размонтировании компонента Product
useEffect(() => {
    return () => {
        console.log('Component will unmount');
    }
}, []);

    return (
        <div className="product-container">
            <div>Product: {name}</div>
            <div>Price: {price}</div>
        </div>
    )
}

export default Product;