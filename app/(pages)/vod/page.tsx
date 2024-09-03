"use client";
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import ReactPlayerLoader from "@brightcove/react-player-loader";
import { useRouter } from "next/navigation";

const BrightcovePlayer = () => {
  const router = useRouter();
  const [videoId, setVideoId] = useState("6353816889112");

  const handleBack = () => {
    router.back();
  };

  const handleVideoChange = (event) => {
    setVideoId(event.target.value);
  };

  return (
    <div>
      <h1>Brightcove Player Example</h1>

      <button onClick={handleBack}>Go back</button>

      {/* Brightcove Player Loader */}
      <ReactPlayerLoader
        accountId="6415845530001"
        playerId="default"
        videoId={videoId}
      >
        {(player) => {
          return (
            <div>
              {/* Player container where the video will be rendered */}
              <div
                data-video-id={videoId}
                data-account={player.accountId}
              ></div>
            </div>
          );
        }}
      </ReactPlayerLoader>
    </div>
  );
};

export default BrightcovePlayer;
