import { DTO } from "@/Models/DTO";
import Button from "@/Shared/Button";
import { v4 as uuidv4 } from "uuid";

const btnsLabels: DTO.Tabs[] = ["Overview", "Lyrics", "Videos"];

const Header = ({ singerName, songName, activeTab, setActiveTab }: DTO.ContentHeader) => {
  return (
    <div className="col-start-2 flex items-center pl-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">{songName}</h1>
        <h3 className="text-sm text-gray-400">song by {singerName}</h3>
      </div>
      <div className="ml-60 flex items-center gap-4">
        {btnsLabels?.map(item => (
          <Button
            className={`bg-btnBg ${activeTab === item ? "!border !border-white" : "border-none"} `}
            key={uuidv4()}
            onClick={() => setActiveTab(item)}>
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Header;
