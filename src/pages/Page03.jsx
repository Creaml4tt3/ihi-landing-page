import { useRef } from "react";
import { UseIntersection } from "../components/UseIntersection";
import { useSpring, animated, easings } from "@react-spring/web";
import ReactPlayer from "react-player";
import Picture from "../components/Picture";
import configJSON from "../config.json";
import { page_03_bg_webp, page_03_bg_png } from "../components/image/Image03";

export default function Section03({ changeStage }) {
  return (
    <>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap h-full w-full snap-y snap-proximity overflow-y-scroll bg-blue">
        {/* //?Background - Starting */}
        <Picture
          webp={page_03_bg_webp}
          normal={page_03_bg_png}
          alt="page_03_bg_png"
          classpic="Picture-section h-screen w-screen fixed bottom-0 left-0 z-10 mix-blend-overlay pointer-events-none"
          classimg="mx-auto w-full h-auto"
        />
        {/* //?Background - Ending */}
        {/* //?Go to previos Page */}
        <section
          className="Prev-section h-screen w-screen cursor-pointer bg-cream"
          onClick={() => changeStage("-")}
        ></section>
        {/* //?Page 01 */}
        <section className="Page-section z-0 -mt-[100vh] h-fit w-full rounded-t-full bg-blue px-desktop pb-30vh pt-40vh">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            {/* <Picture
            webp={page_02_people_webp}
            normal={page_02_people_png}
            alt="page_02_people_png"
            classpic="Picture-section h-fit"
            classimg="mx-auto -mt-10 z-0"
            lazy
          /> */}
            <h1 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_01.HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_01.HEADING_02}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_01.HEADING_03}
            </h1>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_01.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_01.SUB_HEADING_02}
            </h2>
          </section>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section h-fit w-full px-desktop">
          <section className="Text-section flex-center z-10 flex-col ">
            <h2 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_02.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_02.SUB_HEADING_01}
            </h2>
          </section>
          <div className="Column-container flex-center h-fit">
            <div className="Column-Text flex h-fit w-1/2 flex-col items-start">
              <div className="Column-inside flex flex-col items-start justify-center">
                <section className="Text-section z-10 flex flex-col items-start justify-start gap-6">
                  <span className="Upper-text text-2xl font-normal text-orange">
                    {configJSON.CONTENT.PAGE_03.SECTION_02.HEADING_01}
                  </span>
                  <h2 className="Title-text text-6xl font-semibold text-white">
                    {configJSON.CONTENT.PAGE_03.SECTION_02.SUB_HEADING_01}
                  </h2>
                  <span className="Description-text text-2xl font-normal text-white">
                    {configJSON.CONTENT.PAGE_03.SECTION_02.HEADING_01}
                  </span>
                  <span className="Sub-description-text text-2xl font-normal text-orange">
                    {configJSON.CONTENT.PAGE_03.SECTION_02.SUB_HEADING_01}
                  </span>
                </section>
              </div>
              <div className="Column-inside"></div>
              <div className="Column-inside"></div>
              <div className="Column-inside"></div>
              <div className="Column-inside"></div>
            </div>
            <div className="Column flex h-fit w-1/2 flex-col items-start justify-center"></div>
          </div>
        </section>
        {/* //?Page Down */}
        <div className="Page-controller flex-center mb-24 mt-10">
          <button
            className="Next-page bg-white py-5 px-8"
            id="Page-01-next"
            onClick={() => changeStage("+")}
          >
            <span className="Text-Button text-xl font-semibold text-blue">
              {configJSON.CONTENT.PAGE_03.BUTTON_NEXT.TEXT}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
