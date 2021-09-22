import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import Subscriptionicon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import { ExpandMoreOutlined, History, OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={Subscriptionicon} title="Subscription" />
      <hr />
      <SidebarRow  Icon={VideoLibrary} title="Your videos" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
