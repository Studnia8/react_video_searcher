import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        onVideoClick={onVideoClick}
        video={video}
        key={video.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
