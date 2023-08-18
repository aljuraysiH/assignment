import loaderAnimation from "@/assets/animations/loader.json";
import Lottie from "react-lottie-player";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000081] flex items-center justify-center">
      <Lottie animationData={loaderAnimation} play loop />
    </div>
  );
};

export default Loader;
