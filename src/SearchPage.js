import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import image from "./image.jpg";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
        <hr />
        <ChannelRow
          image={image}
          Channel="JAVASCRIPT QIROLI"
          verified
          subs="2K"
          description="You can find your favourite channel here"
          nOfVideos={382}
        />
        <hr />

        <VideoRow
          title="Become a react developer with us"
          views="24 VIEWS"
          timestamp="24 minutes ago"
          channelImage=""
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eos culpa! Commodi a, iste esse fuga corporis excepturi totam nobis accusantium amet eaque exercitationem ea reiciendis, officiis aut officia nihil."
          chnannel="JAVASCRIPT QIROLI"
          image={image}
        />
        <VideoRow
          title="Become a react developer with us"
          views="24 VIEWS"
          timestamp="24 minutes ago"
          channelImage=""
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eos culpa! Commodi a, iste esse fuga corporis excepturi totam nobis accusantium amet eaque exercitationem ea reiciendis, officiis aut officia nihil."
          chnannel="JAVASCRIPT QIROLI"
          image={image}
        />
        <VideoRow
          title="Become a react developer with us"
          views="24 VIEWS"
          timestamp="24 minutes ago"
          channelImage=""
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eos culpa! Commodi a, iste esse fuga corporis excepturi totam nobis accusantium amet eaque exercitationem ea reiciendis, officiis aut officia nihil."
          chnannel="JAVASCRIPT QIROLI"
          image={image}
        />
        <VideoRow
          title="Become a react developer with us"
          views="24 VIEWS"
          timestamp="24 minutes ago"
          channelImage=""
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, eos culpa! Commodi a, iste esse fuga corporis excepturi totam nobis accusantium amet eaque exercitationem ea reiciendis, officiis aut officia nihil."
          chnannel="JAVASCRIPT QIROLI"
          image={image}
        />
      </div>
    </div>
  );
}

export default SearchPage;
