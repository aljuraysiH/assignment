import { ReactNode } from "react";

export namespace DTO {
  export type Tabs = "Overview" | "Lyrics" | "Videos";
  export interface ButtonProps {
    children: string | ReactNode;
    onClick?: () => void;
    className?: string;
  }

  export interface SongProps {
    params: {
      songName: string;
    };
  }

  export interface Data {
    Singer: string;
    SongName: string;
    About: {
      Artist: string;
      Released: number;
      Album?: string;
      Genre?: string;
      Award?: string;
      Nominations?: string;
    };
    Lyrics: string;

    Videos: {
      Name: string;
      url: string;
    }[];
  }

  export interface ContentHeader {
    singerName: string;
    songName: string;
    activeTab: "Overview" | "Lyrics" | "Videos";
    setActiveTab: React.Dispatch<React.SetStateAction<"Overview" | "Lyrics" | "Videos">>;
  }
}
