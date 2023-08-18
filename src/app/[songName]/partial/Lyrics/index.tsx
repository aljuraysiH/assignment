import { DTO } from "@/Models/DTO";
import { IconContext } from "react-icons";
import { BiChevronRight } from "react-icons/bi";

const Lyrics = ({ activeTab, setActiveTab, data }: DTO.LyricsProps) => {
  return (
    <div className="flex flex-col text-[#BDC1C6]">
      <IconContext.Provider value={{ color: "gray", size: "30px" }}>
        <button
          disabled={activeTab !== "Overview"}
          className={`${activeTab === "Lyrics" ? "text-2xl" : "text-lg"} font-bold text-gray-300 flex items-center gap-2`}>
          Lyrics {activeTab === "Overview" && <BiChevronRight />}
        </button>
      </IconContext.Provider>
      {activeTab === "Overview" && (
        <p className="whitespace-pre-line">
          {data?.Lyrics?.substring(0, 140)} ...
          <button onClick={() => setActiveTab("Lyrics")} className="text-blue-400">
            &nbsp;Full lyrics
          </button>
        </p>
      )}
      {activeTab === "Lyrics" && <p className="mt-6 whitespace-pre-line">{data?.Lyrics}</p>}
    </div>
  );
};

export default Lyrics;
