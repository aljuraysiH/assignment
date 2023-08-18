import Spotify from "@/assets/images/download.png";
import Image from "next/image";

const Icon = ({ label }: { label: string }) => {
  return (
    <button className="flex flex-col items-center gap-2">
      <div className="border border-opacity-20 border-gray-100 w-10 h-10 flex items-center justify-center rounded-full hover:opacity-50">
        <Image src={Spotify} width={20} height={20} alt="spotify" />
      </div>
      <span className="text-xs text-gray-300">{label}</span>
    </button>
  );
};

export default Icon;
