import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const user = "";

  return (
    <div className="header">
      <h1 className="header-logo">Blog Market</h1>

      <div className="header-search">
        <CiSearch className="search-icon" />
        <input type="text" placeholder="search a post" className="search-box" />
      </div>

      <div className="header-auth">
        {!user ? (
          <>
            <h3 className="auth auth-login">
              <Link to="/login">Login</Link>
            </h3>
            <h3 className="auth auth-login">
              <Link to="/register">Register</Link>
            </h3>
          </>
        ) : (
          <>
            <h3 className="auth auth-create">
              <Link to="/create">Create</Link>
            </h3>
            <h3 className="auth auth-profile">
              <Link to="/profile">Profile</Link>
            </h3>
          </>
        )}
      </div>
    </div>
  );
}
