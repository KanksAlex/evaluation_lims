import React from "react";
import {Link} from "react-router-dom";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar=({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
          <img
              src="http://covid19.cphluganda.org/static/media/apple-icon.9b561aa9.png"
              alt=""
              className="widgetLgImg"
            />
            Diagnostics Evaluations And Clinical Trial Unit</span>
        </div>
        <div className="topRight">
        {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
        </div>
      </div>
    </div>
  );
};
export default Topbar;
