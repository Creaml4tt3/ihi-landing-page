import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Picture from "./Picture";
import {
  video_icon_png,
  video_icon_webp,
  black_png,
  black_webp,
} from "./image/Image02";

export default function Video({ url, preview }) {
  const [previewBG, setPreviewBG] = useState(null);

  useEffect(() => {
    if (!preview) {
      setPreviewBG(black_webp);
    } else {
      setPreviewBG(preview);
    }
  }, []);

  const videoIcon = () => {
    return (
      <div className="Icon-player-container flex-center">
        <Picture
          webp={video_icon_webp}
          normal={video_icon_png}
          alt="video_icon_png"
          classpic="Picture-section"
          classimg=""
          lazy
        />
      </div>
    );
  };
  return (
    <ReactPlayer
      className="React-player"
      url={url}
      width="100%"
      height="550px"
      light={previewBG}
      playing="true"
      playIcon={videoIcon()}
    />
  );
}
