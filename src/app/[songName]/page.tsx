"use client";
import { MainData } from "@/Data";
import { DTO } from "@/Models/DTO";
import Loader from "@/Shared/Loader";
import Video from "@/Shared/Video";
import { useEffect, useState } from "react";
import Header from "./partial/Header";
import Lyrics from "./partial/Lyrics";
import RightSection from "./partial/RightSection";
import ListOfVideos from "./partial/ListOfVideos";

const Song = ({ params }: DTO.SongProps) => {
  const [songData, setSongData] = useState<DTO.Data | null | undefined>(null);
  const [activeTab, setActiveTab] = useState<"Overview" | "Lyrics" | "Videos">("Overview");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (params?.songName) {
        const song = MainData?.find(item => item?.SongName?.toLowerCase().includes(params?.songName?.toLocaleLowerCase()));
        setSongData(song);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [params]);

  if (songData === null) return <Loader />;
  if (songData === undefined)
    return (
      <div className="grid grid-cols-main pl-24 gap-4 pt-10">
        <h1 className="col-start-2 col-end-2 ">No result were found!</h1>
      </div>
    );

  return (
    <section className="grid grid-cols-main pt-3 gap-4">
      <h2 className="col-start-2 text-sm text-gray-400 pl-24">About 5,660,000 results (0.50 seconds) </h2>
      <div className="col-span-full pl-24 grid grid-cols-main border-b border-opacity-20 border-gray-100 pb-4">
        <Header singerName={songData?.Singer} songName={songData?.SongName} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="col-start-2 col-end-4 pl-24 flex gap-6 ">
        <div className="flex flex-col gap-6 w-2/5">
          {activeTab === "Overview" && (
            <>
              <Video
                className="border-r border-opacity-20 border-gray-100 pr-6"
                videoId={songData?.Videos[0]?.VideoId}
                width="600"
                height="400"
                songName={songData?.Videos[0]?.Name}
              />
              <Lyrics activeTab={activeTab} setActiveTab={setActiveTab} data={songData} />
            </>
          )}
          {activeTab === "Lyrics" && <Lyrics activeTab={activeTab} setActiveTab={setActiveTab} data={songData} />}
          {activeTab === "Videos" && <ListOfVideos data={songData} />}
        </div>
        <div className="w-[23%]">
          <RightSection data={songData} />
        </div>
      </div>
    </section>
  );
};

export default Song;
