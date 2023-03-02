import Lottie from "lottie-react";
import loading_icon from "../lotties/loading-icon.json";

export default function Loading() {
  return (
    <section className="Loading-wrapper flex-center h-full w-full bg-blue">
      <Lottie className="Loading-icon h-80 w-80" animationData={loading_icon} />
    </section>
  );
}
