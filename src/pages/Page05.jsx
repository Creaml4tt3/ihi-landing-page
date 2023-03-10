import { useRef, useEffect, useState, useLayoutEffect } from "react";
import Picture from "../components/Picture";
import ReactPlayer from "react-player";
import configJSON from "../config.json";
import {
  ihi_logo_webp,
  ihi_logo_png,
  page_05_bg_webp,
  page_05_bg_png,
} from "../components/image/Image05.jsx";
import laef_webm from "../lotties/webm/laef.webm";
export default function Section05({ changeStage }) {
  const destroyRef = useRef(null);
  let firstScroll = 0;

  useEffect(() => {
    let pageWrapper = document.querySelector(".Page-inner-wrap");
    pageWrapper.addEventListener("wheel", () => {
      scrollUp(pageWrapper);
    });

    function scrollUp(el) {
      let scrolling = el.scrollTop;
      if (firstScroll > 2) {
        if (scrolling === 0) {
          changeStage("-");
        }
        firstScroll = 0;
      }
      firstScroll++;
    }
  }, []);

  return (
    <>
      {/* //?Background - Starting */}
      <Picture
        webp={page_05_bg_webp}
        normal={page_05_bg_png}
        alt="page_05_bg_png"
        classpic="Picture-section h-screen w-screen fixed bottom-0 left-0 z-40 pointer-events-none"
        classimg="mx-auto w-full h-full"
      />
      {/* //?Background - Ending */}
      <div
        className="Page-sub-background pointer-events-none absolute top-0 left-0 z-0 h-screen w-screen -translate-y-full bg-cream transition-all"
        ref={destroyRef}
      ></div>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap z-10 h-screen w-full overflow-y-scroll bg-blue">
        {/* //?Go to previos Page */}
        <section
          className="Prev-section h-screen w-screen cursor-pointer bg-cream"
          onClick={() => changeStage("-")}
        ></section>
        {/* //?Page 01 */}
        <section className="Page-section z-0 -mt-[100vh] h-[100vh] w-full rounded-t-full bg-blue px-desktop pb-30vh pt-30vh">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            <h1 className="Heading-text !text-[80px] !font-medium text-white">
              {configJSON.CONTENT.PAGE_05.SECTION_01.SUPER_HEADING_01}
            </h1>
            <h2 className="Heading-text !font-medium text-white">
              {configJSON.CONTENT.PAGE_05.SECTION_01.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_05.SECTION_01.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_05.SECTION_01.SUB_HEADING_02}
            </h2>
          </section>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section z-0 mb-[100vh] h-fit w-full rounded-t-full bg-blue px-desktop pb-25vh pt-25vh">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            <h2 className="Heading-text !font-medium text-white">
              {configJSON.CONTENT.PAGE_05.SECTION_02.HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_05.SECTION_02.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_05.SECTION_02.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_05.SECTION_02.SUB_HEADING_02}
            </h2>
          </section>
        </section>
        {/* //?Page 03 */}
        <section className="Page-section relative z-10 -mt-[100vh] h-fit w-full rounded-t-full bg-cream px-desktop pt-50vh pb-25vh">
          <div className="Laef-container pointer-events-none absolute left-0 top-0 z-20 h-auto w-auto overflow-hidden rounded-t-full">
            <ReactPlayer
              className="React-player z-20"
              url={laef_webm}
              width="auto"
              height="auto"
              playing
              loop
              muted
            />
          </div>
          <section className="Text-section flex-center z-30 flex-col gap-4">
            <h2 className="Heading-text z-30 !font-medium text-blue">
              {configJSON.CONTENT.PAGE_05.SECTION_03.HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_05.SECTION_03.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text z-30 text-orange">
              {configJSON.CONTENT.PAGE_05.SECTION_03.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_05.SECTION_03.SUB_HEADING_02}
              <br></br>
              {configJSON.CONTENT.PAGE_05.SECTION_03.SUB_HEADING_03}
            </h2>
          </section>
        </section>
        {/* //?Page 04 */}
        <section className="Page-section z-0 h-fit w-full bg-cream px-desktop pt-20vh pb-20vh">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            <h2 className="Heading-text z-30 !font-bold text-blue">
              {configJSON.CONTENT.PAGE_05.SECTION_04.HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_05.SECTION_04.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text z-30 text-orange">
              {configJSON.CONTENT.PAGE_05.SECTION_04.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_05.SECTION_04.SUB_HEADING_02}
            </h2>
          </section>
          <div className="Link-container flex-center pt-10">
            <a
              href={configJSON.CONTENT.PAGE_05.SECTION_04.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="Link-text text-xl font-medium text-blue">
                {configJSON.CONTENT.PAGE_05.SECTION_04.LINK_01}
              </span>
            </a>
          </div>
        </section>
        {/* //?Page 05 */}
        <section className="Page-section flex-center z-30 h-fit w-full bg-cream px-desktop pt-25vh pb-50vh">
          <Picture
            webp={ihi_logo_webp}
            normal={ihi_logo_png}
            alt="ihi_logo_png"
            classpic="Picture-section"
            classimg="mx-auto w-full h-auto"
          />
        </section>
      </div>
    </>
  );
}
