import { useSearchParams } from "react-router-dom";
import Navigation from "./navigation";
import Store from "./store";
import Product from "./product";

export default function WindowShop(props) {
    const { searchValue, isAuth, handleAddCart, handleAuth, isProduct, handleProduct } = props
    const [searchParams] = useSearchParams({ q: "", i: 0 })
    const question = searchParams.get("q")

    return (
        <>

            {question === "" ?
                <div className="shop-window">
                    <Navigation />
                    <Store
                        isProduct={isProduct}
                        searchValue={searchValue}
                        isAuth={isAuth}
                        handleAuth={handleAuth}
                        handleAddCart={handleAddCart}
                        handleProduct={handleProduct}
                    />
                </div>
                :
                <Product
                    handleAddCart={handleAddCart}
                    isAuth={isAuth}
                />
            }
        </>
    )
}
