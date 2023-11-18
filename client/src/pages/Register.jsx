import { Link, useLocation } from "react-router-dom";

export default function Register() {
  const location = useLocation();

  return (
    <>
      <div className="header">
        <h1 className="header-logo">Blog Market</h1>
        <div className="header-auth">
          {location.pathname === "/register" ? (
            <>
              <h3 className="auth auth-login">
                <Link to="/login">Login</Link>
              </h3>
            </>
          ) : (
            <>
              <h3 className="auth auth-login">
                <Link to="/register">Register</Link>
              </h3>
            </>
          )}
        </div>
      </div>

      <div className="login">
        <div className="login-container">
          <h1 className="login-title">Create an account</h1>
          <input
            className="email-input"
            type="text"
            placeholder="enter your username"
          />
          <input
            className="email-input"
            type="text"
            placeholder="enter your email"
          />
          <input
            className="email-input"
            type="password"
            placeholder="enter your password"
          />
          <button className="login-button">Register</button>

          <div className="login-doubt">
            <p>Already have an account?</p>
            <Link to="/login" className="login-register">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
