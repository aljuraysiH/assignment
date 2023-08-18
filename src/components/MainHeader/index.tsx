"use client";
import { MainFilterItems } from "@/Data";
import Button from "@/Shared/Button";
import GoogleLogo from "@/assets/images/google.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IconContext } from "react-icons";
import { BsFillCameraFill, BsFillMicFill, BsSearch } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

const InputIcons = [<BsFillCameraFill key={uuidv4()} />, <BsFillMicFill key={uuidv4()} />, <BsSearch key={uuidv4()} />];

const MainHeader = () => {
  const [songName, setSongName] = useState("");
  const router = useRouter();
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${songName}`);
  };

  return (
    <header className="col-span-3 grid grid-cols-main items-center gap-4 pt-6 border-b border-opacity-20 border-gray-100 pl-20 pb-4">
      <Image src={GoogleLogo} width={90} alt="googleLogo" />
      <form onSubmit={submitHandler}>
        <div className="rounded-3xl bg-[#303134] w-[680px] h-11 px-4 flex gap-3 items-center">
          <input
            type="text"
            className="bg-transparent outline-none w-[90%] text-white border-r-[0.1px] pr-4 border-r-gray-600"
            value={songName}
            onChange={e => {
              setSongName(e.target.value);
            }}
          />
          <IconContext.Provider value={{ color: "blue", size: "18px" }}>
            <div className="flex gap-5">
              {InputIcons?.map(icon => (
                <Button className="border-none rounded-none px-0 py-0 !p-0" key={uuidv4()}>
                  {icon}
                </Button>
              ))}
            </div>
          </IconContext.Provider>
        </div>
      </form>
      <div className="flex gap-4 col-start-2">
        {MainFilterItems?.map(item => (
          <Button key={uuidv4()}>{item}</Button>
        ))}
      </div>
    </header>
  );
};

export default MainHeader;
