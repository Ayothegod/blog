import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
        <div className="login-container">
            <h1 className="login-title">Login to your account</h1>
            <input className="email-input" type="text" placeholder="enter your email" />
            <input className="email-input" type="password" placeholder="enter your password" />
            <button className="login-button">Log In</button>

            <div className="login-doubt">
                <p>New Here?</p>
                <Link to="/register" className="login-register">Register</Link>
            </div>
        </div>
    </div>
  )
}
