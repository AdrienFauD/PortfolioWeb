import { useSearchParams } from "react-router-dom";
import Store from "./Store";
import Product from "./Product";

export default function WindowShop(props) {
    const { searchValue, isAuth, handleAddCart, handleAuth, isProduct, handleProduct } = props
    const [searchParams] = useSearchParams({ q: "", i: 0 })
    const question = searchParams.get("q")

    return (
        <>
            {question === "" ?
                <div className="shop-window">
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
