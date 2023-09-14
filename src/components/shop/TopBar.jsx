import Search from "./Search";
import Cart from "./Cart";
import Login from "./Login";
import Navigation from "./Navigation";
import { useContext, useState } from "react";
import { ProductContext } from "./Shop";

export default function TopBar() {

    const [toggleWrapper, setToggleWrapper] = useState(null)
    const {
        handleSearch,
        handleAuth,
        handleIsLoged,
        isAuth,
        isToggled,
        cart
    } = useContext(ProductContext)

    const handleToggleWrapper = () => {
        if(toggleWrapper === "none" || toggleWrapper === null) setToggleWrapper("grid")
        else setToggleWrapper("none")
    }

    return (

        <div className='shop-topbar'>
            <Search
                handleSearch={handleSearch}
            />
            <button className="btn-wrapper-top-bar" onClick={e => handleToggleWrapper(e)} >
                <span>test</span>
            </button>
            <div className="wrapper-top-bar" style={{display : toggleWrapper}}>
                <Navigation />
                <Login
                    isAuth={isAuth}
                    handleAuth={handleAuth}
                />
                <Cart
                    isAuth={isAuth}
                    isToggled={isToggled}
                    handleIsLoged={handleIsLoged}
                    cart={cart}
                />
            </div>
        </div>


    )
}
