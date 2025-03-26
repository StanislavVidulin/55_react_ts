import Product from "../../components/Product/Product";
import { products } from "./data";
import { v4 } from "uuid";

function Homework07 () {
    const fruitCards = products.map((fruit) => {
        return <Product
        key={v4()}
        name={fruit.name}
        price={fruit.price}
        />
    })
    return (
        <div>
            {fruitCards}
        </div>
    )
}

export default Homework07;