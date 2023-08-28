export default function Login(props) {
    const { handleIsLoged } = props

    return (
        <div className='login-shop' onClick={(e) => handleIsLoged()}>
            login
        </div>
    )
}
