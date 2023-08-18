"use client";
import searchAnimation from "@/assets/animations/search.json";
import Lottie from "react-lottie-player";
export default function Home() {
  return (
    <main className="flex items-center justify-center flex-1 flex-col">
      Enter a song name
      <div className="w-96">
        <Lottie animationData={searchAnimation} play />
      </div>
    </main>
  );
}
