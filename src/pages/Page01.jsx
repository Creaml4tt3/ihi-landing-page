import { useRef, useState, useEffect } from "react";
import { UseIntersection } from "../components/UseIntersection";
import { useSpring, animated } from "@react-spring/web";
import Picture from "../components/Picture";
import configJSON from "../config.json";
import page_01_people_webp from "../images/webp/page-01-people.webp";
import page_01_people_png from "../images/png/page-01-people.png";
import page_01_bg_webp from "../images/webp/page-01-bg.webp";
import page_01_bg_png from "../images/png/page-01-bg.png";

export default function Section01({ changeStage }) {
  const graphContainerRef = useRef(null);
  const graphContainerIn = UseIntersection(graphContainerRef, "0px");

  const pushUp = useSpring({
    config: { duration: 1000, tension: 80 },
    from: { y: 0, opacity: 0 },
    to: { y: graphContainerIn ? -50 : 0, opacity: graphContainerIn ? 1 : 0 },
  });

  return (
    <>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap h-full w-full snap-y snap-proximity overflow-y-scroll bg-blue">
        {/* //?Background - Starting */}
        <Picture
          webp={page_01_bg_webp}
          normal={page_01_bg_png}
          alt="page_01_people_png"
          classpic="Picture-section h-0 w-screen fixed bottom-0 z-0 mix-blend-overlay opacity-40"
          classimg="mx-auto w-full absolute bottom-0"
        />
        {/* //?Background - Ending */}
        {/* //?Page 01 */}
        <section className="Page-section relative flex h-screen px-desktop">
          <Picture
            webp={page_01_people_webp}
            normal={page_01_people_png}
            alt="page_01_people_png"
            classpic="Picture-section w-full absolute bottom-0 z-10 left-0"
            classimg="mx-auto"
          />
          <section className="Text-section z-20 mt-[25vh] flex flex-col gap-4">
            <h1 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_01.HEADING_01}
            </h1>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_01.SUB_HEADING_01}
            </h2>
          </section>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section relative h-fit">
          <section className="Section-container flex-center px-desktop">
            <section className="Column-container h-[300vh] w-3/5 py-[20vh]">
              <Picture
                webp={page_01_people_webp}
                normal={page_01_people_png}
                alt="page_01_people_png"
                classpic="Picture-section w-full mx-auto z-10 sticky top-[20vh]"
                classimg="mx-auto"
                lazy
              />
            </section>
            <section className="Column-container h-auto w-2/5">
              <section className="Text-section flex-center z-20 h-screen flex-col gap-4">
                <h1 className="Heading-text text-start text-white">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_01}
                </h1>
                <h2 className="Sub-heading-text text-start text-orange">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_01}
                </h2>
              </section>
              <section className="Text-section flex-center z-20 h-screen flex-col gap-4">
                <h1 className="Heading-text text-start text-white">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_02}
                </h1>
                <h1 className="Heading-text text-start text-white">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_02_02}
                </h1>
                <h2 className="Sub-heading-text text-start text-orange">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_02}
                </h2>
              </section>
              <section className="Text-section flex-center z-20 h-screen flex-col gap-4">
                <h1 className="Heading-text text-start text-white">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_03}
                </h1>
                <h2 className="Sub-heading-text text-start text-orange">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_03}
                </h2>
              </section>
            </section>
          </section>
        </section>
        {/* //?Page 03 */}
        <section className="Page-section relative flex h-fit flex-col items-center pt-[8%]">
          <section className="Text-section z-20 flex flex-col gap-4">
            <h1 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_03.HEADING_01}
            </h1>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_03.SUB_HEADING_01}
            </h2>
          </section>
          <div className="Link-container">
            <a
              href={configJSON.CONTENT.PAGE_01.SECTION_03.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              {configJSON.CONTENT.PAGE_01.SECTION_03.LINK_01}
            </a>
          </div>
          <section className="Graph-section" ref={graphContainerRef}>
            <animated.div style={pushUp}>TEST</animated.div>
          </section>
        </section>
        {/* //?Page 04 */}
        <section className="Page-section relative flex h-fit flex-col items-center pt-[8%]">
          <section className="Text-section z-20 flex flex-col gap-4">
            <h1 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_04.HEADING_01}
            </h1>
            <h1 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_04.HEADING_02}
            </h1>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_04.SUB_HEADING_01}
            </h2>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_04.SUB_HEADING_02}
            </h2>
          </section>
          <section className="Text-section z-30">
            <span className="Text">
              {configJSON.CONTENT.PAGE_01.SECTION_04.TEXT_01}
            </span>
          </section>
          <div className="Link-container">
            <a
              href={configJSON.CONTENT.PAGE_01.SECTION_04.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              {configJSON.CONTENT.PAGE_01.SECTION_04.LINK_01}
            </a>
          </div>
        </section>
      </div>
      {/* //?Page Down */}
      <div className="Page-controller h-8 w-screen">
        <button
          className="Next-page h-full w-full bg-white"
          onClick={() => changeStage("+")}
        ></button>
      </div>

      {/* //?Main - Ending */}
    </>
  );
}
