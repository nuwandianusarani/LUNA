import React from "react";
import videoBackground from "../img/videoBackground.mp4";

function Video() {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        objectFit: "cover",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: -1,
        padding: "none",
        position: "fixed",
      }}
    >
      <source src={videoBackground} type="video/mp4" />
    </video>
  );
}

export default Video;
