import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="login">
    <div className="login-container">
        <h1 className="login-title">Create an account</h1>
        <input className="email-input" type="text" placeholder="enter your username" />
        <input className="email-input" type="text" placeholder="enter your email" />
        <input className="email-input" type="password" placeholder="enter your password" />
        <button className="login-button">Register</button>

        <div className="login-doubt">
            <p>Already have an account?</p>
            <Link to="/login" className="login-register">Login</Link>
        </div>
    </div>
</div>
  )
}
