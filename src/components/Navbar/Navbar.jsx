import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../../store/auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state=>state.auth.data);
  const navigate=useNavigate()
  const handleLoginClick = () => {
    dispatch(logoutAPI());
    navigate("/login")
  };
  return (
    <div data-cy="navbar" style={{
      padding: "10px",
      display: "flex",
      gap: "20px",
      justifyContent: "space-between",
    }}>
      <div   style={{
          display: "flex",
          gap: "20px",
        }}>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link" href="/login">Logo</a>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}>
        <div data-cy="navbar-cart-items-count">cart (0)</div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>{isAuthenticated?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
