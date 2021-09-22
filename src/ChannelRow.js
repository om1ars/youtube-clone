import { Avatar } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

function ChannelRow({
  image,
  Channel,
  subs,
  nOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" />
      <div className="channelRow__text">
        <h4>{Channel} { verified && <VerifiedUser /> }</h4>
        <p>{subs} subscribers - {nOfVideos} videos</p>
        <p>{description}</p>    
      </div>
    </div>
  );
}

export default ChannelRow;
