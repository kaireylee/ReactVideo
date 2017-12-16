import React from "react";

const VideoListItem = ({ video }) => {
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div classname="media-left">
          <img className="media-object" />
        </div>

        <div className="media-body">
          <div classname="media-heading" />
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
