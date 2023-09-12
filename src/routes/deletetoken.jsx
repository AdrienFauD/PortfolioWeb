import { useNavigate } from 'react-router-dom';

export default function Deletetoken() {

    const navigate = useNavigate()
    const handleDelete = () => {
        sessionStorage.removeItem('token')
        navigate('/contact')
    }

    return (
        <button onClick={handleDelete}>deletetoken</button>
    )
}
