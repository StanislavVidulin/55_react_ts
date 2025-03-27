import ProductCard from "../../components/Product/Product";
import { products } from "./data";
import { v4 } from "uuid";
import './styles.css'
import { Product } from "./types";

function Homework07 () {
    const fruitCards = products.map((fruit: Product) => {
        return <ProductCard
        key={v4()}
        name={fruit.name}
        price={fruit.price}
        />
    })
    return (
        <div className="homework07-container">
            <h1>Products</h1>
            {fruitCards}
        </div>
    )
}

export default Homework07;