import { useState, useEffect } from "react";

function VideoPlayer(props) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl("https://www.youtube.com/embed/" + props.id);
  }, []);

  return (
    <div className="VideoPlayer">
      <iframe
        width={props.width}
        height={props.height}
        src={url}
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
