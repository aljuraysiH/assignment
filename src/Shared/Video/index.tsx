import { DTO } from "@/Models/DTO";
import YouTube, { YouTubeProps } from "react-youtube";

const Video = ({ videoId, height, width, songName, className }: DTO.YoutubeProps) => {
  const opts: YouTubeProps["opts"] = {
    height: height,
    width: width,
  };

  return (
    <div className={`flex flex-col ${className || ""}`}>
      <YouTube iframeClassName="rounded-xl" videoId={videoId} opts={opts} />
      <h1 className="mt-2 text-2xl">{songName}</h1>
      <h3 className="text-sm text-gray-300">https://www.youtube.com › watch</h3>
    </div>
  );
};

export default Video;
