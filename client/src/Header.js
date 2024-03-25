import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import "./Header.css";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <span className="username-header">Hello, {username}</span>
            <Link to="/create" className="button-header create-new">
              Create new post
            </Link>
            <a onClick={logout} className="button-header logout-user">
              Logout
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="button-header create-new">
              Login
            </Link>
            <Link to="/register" className="button-header create-new">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
