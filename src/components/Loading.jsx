import Lottie from "lottie-react";
import loading_icon from "../lotties/loading-icon.json";

export default function Loading() {
  return (
    <section className="Loading-wrapper flex-center w-full h-full bg-blue">
      <Lottie className="Loading-icon w-80 h-80" animationData={loading_icon} />
    </section>
  );
}
