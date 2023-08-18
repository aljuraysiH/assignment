import { DTO } from "@/Models/DTO";
import { IconContext } from "react-icons";
import { BiChevronRight } from "react-icons/bi";
import Icon from "./Icon";
const RightSection = ({ data }: { data: DTO.Data }) => {
  return (
    <>
      <div>
        <button className="w-full flex justify-between items-center px-4 pt-4 text-gray-300">
          <h2 className="font-bold text-lg">Listen</h2>
          <span className="border border-opacity-20 border-gray-100 rounded-full w-7 h-7 flex items-center justify-center">
            <IconContext.Provider value={{ color: "gray", size: "18px" }}>
              <BiChevronRight />
            </IconContext.Provider>
          </span>
        </button>
        <div className="flex gap-2 px-4 items-center justify-around mt-6 border-b border-opacity-20 border-gray-100 pb-10">
          <Icon label="Spotify" />
          <Icon label="Spotify" />
          <Icon label="Spotify" />
          <Icon label="Spotify" />
        </div>
        <div className="w-full flex flex-col gap-5 px-4 pt-4">
          <h2 className="font-bold text-lg text-gray-300">About</h2>
          <div className="flex flex-col gap-2">
            {Object.keys(data?.About)?.map(key => {
              return (
                <div key={key}>
                  <span className="text-gray-300 text-sm">
                    {key} :{" "}
                    <span className={` ${key?.toString() === "Released" ? "" : "text-blue-700"}`}>{data?.About?.[key as keyof DTO.DataAbout]}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
