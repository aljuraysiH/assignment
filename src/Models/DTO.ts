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
    About: DataAbout;
    Lyrics: string;

    Videos: {
      Name: string;
      VideoId: string;
    }[];
  }

  export interface DataAbout {
    Artist: string;
    Released: number;
    Album?: string;
    Genre?: string;
    Award?: string;
    Nominations?: string;
  }

  export interface ActiveTabState {
    activeTab: "Overview" | "Lyrics" | "Videos";
    setActiveTab: React.Dispatch<React.SetStateAction<"Overview" | "Lyrics" | "Videos">>;
  }

  export interface ContentHeader extends ActiveTabState {
    singerName: string;
    songName: string;
  }

  export interface YoutubeProps {
    videoId: string;
    height: string;
    width: string;
    songName: string;
    className?: string;
  }

  export interface LyricsProps extends ActiveTabState {
    data: Data;
  }

  export interface ListOfVideosProps {
    data: Data;
  }
}
