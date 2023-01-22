import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar() {
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
{/*           <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">0</span>
          </div> */}
{/*           <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">0</span>
          </div> */}
{/*           <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
export default Topbar;
