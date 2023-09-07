import { Form } from "react-router-dom";
import './root.css'

export default function Contact() {
  return <>
    <form className="contact-form">
      <label for='name'>Name</label>
      <input
        id="name"
        type="text"
        required
      />
      <label for='email'>E-mail</label>
      <input
        id="email"
        type="email"
        required
      />
      <label for='message'>Message</label>
      <input
        id="message"
        type="text"
        required
      />
      <input
        type="submit"
        value='Send'
      />
    </form>
  </>

}