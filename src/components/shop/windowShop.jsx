import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "./navigation";
import Store from "./store";
import { ProductContext } from './shop'
import Product from "./product";

export default function WindowShop(props) {
    const varTest = useContext(ProductContext)
    const { searchValue, isAuth, handleAddCart, handleAuth, isProduct, handleProduct } = props
    // console.log(varibale)
    const [searchParams, setSearchParams] = useSearchParams({ q: "", i: 0 })
    const question = searchParams.get("q")

    return (
        <>
            {/* {varTest.varibale} */}
            
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
                    />
                 }
        </>
    )
}
