import { ProductCardProps } from "./types";

function Product ({name, price}: ProductCardProps) {
    return (
        <div>
            <h2>{name}</h2>
            <div>{price}</div>
        </div>
    )
}

export default Product;