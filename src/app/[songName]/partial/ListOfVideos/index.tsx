import { DTO } from "@/Models/DTO";
import { v4 as uuidv4 } from "uuid";

const ListOfVideos = ({ data }: DTO.ListOfVideosProps) => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className={`font-bold text-gray-300 text-2xl`}>Videos</h1>
      <div className="flex flex-col gap-10">
        {data?.Videos?.map(item => (
          <h2 key={uuidv4()} className=" border border-white px-2 py-2">
            {item?.Name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default ListOfVideos;
