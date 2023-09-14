import { useContext } from "react"
import { ProductContext } from "./Shop"

export default function Login() {
    const { handleAuth, isAuth } = useContext(ProductContext)

    return (
        <div className='login-shop' onClick={(e) => handleAuth(e)}>
            Log {isAuth ? "out" :'in'}
        </div>
    )
}
