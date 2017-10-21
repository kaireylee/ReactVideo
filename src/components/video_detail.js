import React from "react";

const VideoDetail = ({ video }) => {
  const videoID = video.id.videoId;
  const url = "https://www.youtube.com/embed/" + videoID;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
