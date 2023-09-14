import { useSearchParams } from "react-router-dom";
import Store from "./Store";
import Product from "./Product";

export default function WindowShop() {
    
    const [searchParams] = useSearchParams({ q: "", img: 0 })
    const question = searchParams.get("q")

    return (
        <>
            {question === "" ?
                <div className="shop-window">
                    <Store />
                </div>
                :
                <Product />
            }
        </>
    )
}
