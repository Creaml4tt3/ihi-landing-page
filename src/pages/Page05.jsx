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
import laef_hevc from "../lotties/hevc/leaf.mp4";
export default function Section05({ changeStage }) {
  const destroyRef = useRef(null);

  function handleWheel(event, el) {
    const isScrollingUp = event.deltaY < 0;
    const isAtTop = el.scrollTop === 0;
    const isAtBottom = el.scrollTop + el.offsetHeight >= el.scrollHeight;

    if (isScrollingUp && isAtTop) {
      changeStage("-");
    }

    if (!isScrollingUp && isAtBottom) {
    }
  }
  function handleScroll(el) {
    const isAtTop = el.scrollTop === 0;
    const isAtBottom = el.scrollTop + el.offsetHeight >= el.scrollHeight;

    if (isAtTop) {
      changeStage("-");
    }

    if (isAtBottom) {
    }
  }

  useEffect(() => {
    let pageWrapper = document.querySelector(".Page-inner-wrap");

    pageWrapper.scrollTop = 10;

    pageWrapper.addEventListener("wheel", (e) => handleWheel(e, pageWrapper));
    pageWrapper.addEventListener("scroll", (e) => handleScroll(pageWrapper));
    return () => {
      pageWrapper.removeEventListener("wheel", (e) =>
        handleWheel(e, pageWrapper)
      );
      pageWrapper.removeEventListener("scroll", (e) =>
        handleScroll(pageWrapper)
      );
    };
  }, []);

  const Br = ({ isNonActive }) => {
    if (window.innerWidth > 1024) {
      return <br></br>;
    } else {
      if (!isNonActive) {
        return " ";
      }
    }
  };

  const Leaf = () => {
    if (window.innerWidth > 1024) {
      if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
        return (
          <video
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            className="scale-[1.35]"
          >
            <source src={laef_webm} type="video/webm"></source>
          </video>
        );
      } else if (navigator.userAgent.match(/safari/i)) {
        return (
          <video
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            className="scale-[1.35]"
          >
            <source src={laef_hevc} type="video/mp4"></source>
          </video>
        );
      } else {
        return (
          <video width="100%" height="auto" loop muted autoPlay>
            <source src={laef_webm} type="video/webm"></source>
          </video>
        );
      }
    } else {
      return (
        <video
          width="100%"
          height="auto"
          loop
          muted
          autoPlay
          className="scale-[1.2]"
          onLoad={() => this.play()}
          playsInline
        >
          <source src={laef_webm} type="video/webm"></source>
          <source src={laef_hevc} type="video/mp4"></source>
        </video>
      );
    }
  };

  return (
    <>
      {/* //?Background - Starting */}
      <Picture
        webp={page_05_bg_webp}
        normal={page_05_bg_png}
        alt="page_05_bg_png"
        classpic="Picture-section w-screen fixed bottom-0 left-0 z-50 pointer-events-none"
        classimg="mx-auto w-full h-auto"
      />
      {/* //?Background - Ending */}
      <div
        className="Page-sub-background pointer-events-none absolute top-0 left-0 z-0 h-screen w-screen -translate-y-full bg-cream transition-all"
        ref={destroyRef}
      ></div>
      {/* //?Main - Starting */}
      <div
        className="Page-inner-wrap z-10 h-screen w-full overflow-y-scroll bg-blue"
        id="Page-05"
      >
        {/* //?Go to previos Page */}
        <section
          className="Prev-section h-screen w-screen cursor-pointer overflow-hidden bg-cream mobile:h-[50vh]"
          onClick={() => changeStage("-")}
        ></section>
        {/* //?Page 01 */}
        <section className="Page-section z-0 -mt-[100vh] h-[100vh] w-full rounded-t-full bg-blue px-desktop pb-30vh pt-30vh mobile:mt-0 mobile:h-fit mobile:translate-y-[-50vh] mobile:pt-[20vh] mobile:pb-[20vh]">
          <section className="Text-section flex-center z-10 flex-col gap-4 mobile:gap-2">
            <h1 className="Heading-text !text-[80px] !font-medium text-white">
              {configJSON.CONTENT.PAGE_05.SECTION_01.SUPER_HEADING_01}
            </h1>
            <h2 className="Heading-text !font-medium text-white">
              {configJSON.CONTENT.PAGE_05.SECTION_01.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_05.SECTION_01.SUB_HEADING_01}
              <Br />
              {configJSON.CONTENT.PAGE_05.SECTION_01.SUB_HEADING_02}
            </h2>
          </section>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section z-0 h-fit w-full bg-blue px-desktop pb-25vh pt-25vh mobile:translate-y-[-50vh] mobile:pt-[10vh]">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            <h2
              className="Heading-text !font-medium text-white"
              id="Special-heading-04"
            >
              {configJSON.CONTENT.PAGE_05.SECTION_02.HEADING_01}
              <Br />
              {configJSON.CONTENT.PAGE_05.SECTION_02.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_05.SECTION_02.SUB_HEADING_01}
              <Br />
              {configJSON.CONTENT.PAGE_05.SECTION_02.SUB_HEADING_02}
            </h2>
          </section>
        </section>
        {/* //?Page Wrap */}
        <section className="Page-section-wrapper relative z-40 h-fit overflow-hidden rounded-t-full bg-blue mobile:mt-[-50vh]">
          <div className="Laef-container pointer-events-none absolute left-0 bottom-0 z-20 maxlabtop:top-auto maxtablet:h-auto mobile:bottom-[15%] ">
            {/* <ReactPlayer
              className="React-player max-h-full"
              url={laef_webm}
              width={window.innerWidth <= 1440 ? "125vw" : "auto"}
              height="100%"
              playing
              loop
              muted
            /> */}
            <Leaf />
          </div>
          {/* //?Page 03 */}
          <section className="Page-section relative z-10 h-fit w-full overflow-y-visible rounded-t-full bg-cream px-desktop pt-50vh pb-25vh mobile:pt-25vh">
            <section className="Text-section flex-center z-30 flex-col gap-4">
              <h2
                className="Heading-text z-30 !font-medium text-blue"
                id="Special-heading-05"
              >
                {configJSON.CONTENT.PAGE_05.SECTION_03.HEADING_01}
                <Br />
                {configJSON.CONTENT.PAGE_05.SECTION_03.HEADING_02}
              </h2>
              <h2 className="Sub-heading-text z-30 text-orange">
                {configJSON.CONTENT.PAGE_05.SECTION_03.SUB_HEADING_01}
                <Br />
                {configJSON.CONTENT.PAGE_05.SECTION_03.SUB_HEADING_02}
                <Br />
                {configJSON.CONTENT.PAGE_05.SECTION_03.SUB_HEADING_03}
              </h2>
            </section>
            {/* //?Page 04 */}
            <section className="Page-section z-0 h-fit w-full bg-cream pt-25vh pb-20vh mobile:pb-0">
              <section className="Text-section flex-center z-10 flex-col gap-2">
                <h2 className="Heading-text z-30 !font-bold text-blue">
                  {configJSON.CONTENT.PAGE_05.SECTION_04.HEADING_01}
                  <Br />
                  {configJSON.CONTENT.PAGE_05.SECTION_04.HEADING_02}
                </h2>
                <h2 className="Sub-heading-text z-30 text-orange">
                  {configJSON.CONTENT.PAGE_05.SECTION_04.SUB_HEADING_01}
                  <Br />
                  {configJSON.CONTENT.PAGE_05.SECTION_04.SUB_HEADING_02}
                </h2>
              </section>
              <div className="Link-container flex-center pt-8">
                <a
                  href={configJSON.CONTENT.PAGE_05.SECTION_04.LINK_01}
                  className="Link !font-medium !text-blue"
                  target="_blank"
                  rel="noreferrer"
                >
                  {configJSON.CONTENT.PAGE_05.SECTION_04.LINK_01}
                </a>
              </div>
              {/* //?Page 05 */}
              <section className="Page-section flex-center z-40 h-fit w-full bg-cream pb-[25vh] pt-[50vh]">
                <Picture
                  webp={ihi_logo_webp}
                  normal={ihi_logo_png}
                  alt="ihi_logo_png"
                  classpic="Picture-section z-40"
                  classimg="mx-auto w-full h-auto max-w-[40vw]"
                />
              </section>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}
