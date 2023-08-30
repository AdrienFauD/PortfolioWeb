export default function Login(props) {
    const { handleAuth, isAuth } = props

    return (
        <div className='login-shop' onClick={(e) => handleAuth(e)}>
            Log {isAuth ? "out" :'in'}
        </div>
    )
}
