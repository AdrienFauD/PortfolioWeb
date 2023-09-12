import './root.css'
import Login from "./login";
import useToken from "../hooks/useTokens";
import Deletetoken from "./deletetoken";

export default function Contact() {
  const { token, setToken} = useToken()


  if (!token) {
    return <Login setToken={setToken} />
  }
  return <Deletetoken />

}