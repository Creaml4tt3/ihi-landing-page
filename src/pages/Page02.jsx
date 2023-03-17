import { useRef, useEffect, useState } from "react";
import { UseIntersection } from "../components/UseIntersection";
import { UseIntersectionLoop } from "../components/UseIntersectionLoop";
import { useSpring, animated, easings } from "@react-spring/web";
import Lottie from "lottie-react";
import ReactPlayer from "react-player";
import Picture from "../components/Picture";
import configJSON from "../config.json";
import gsap from "gsap";
import {
  black_png,
  black_webp,
  icon_01_png,
  icon_01_webp,
  icon_02_png,
  icon_02_webp,
  icon_03_png,
  icon_03_webp,
  icon_line_png,
  icon_line_small_png,
  icon_line_small_webp,
  icon_line_webp,
  page_02_belt_png,
  page_02_belt_webp,
  page_02_bg_png,
  page_02_bg_webp,
  page_02_boiler_png,
  page_02_boiler_webp,
  page_02_engine_png,
  page_02_engine_webp,
  page_02_factory_png,
  page_02_factory_webp,
  page_02_how_png,
  page_02_how_webp,
  page_02_line_belt_png,
  page_02_line_belt_webp,
  page_02_people_png,
  page_02_people_webp,
  video_icon_png,
  video_icon_webp,
} from "../components/image/Image02";
import line from "../lotties/line.json";
import working from "../lotties/working.json";
import smoke from "../lotties/smoke.json";
import shield from "../lotties/shield.json";
import high_quality from "../lotties/high-quality.json";
import gear from "../lotties/gear.json";
import minimize from "../lotties/minimize.json";
import steaming from "../lotties/steaming.json";
import fire from "../lotties/fire.json";
import fire_webm from "../lotties/webm/fire.webm";
import belt_small_webm from "../lotties/webm/belt-small.webm";

export default function Section02({ changeStage, scrollStage }) {
  const beltRef = useRef(null);
  const beltIn = UseIntersection(beltRef, {
    rootMargin: "-100%",
    threshold: 1,
  });
  const howRef = useRef(null);
  const howIn = UseIntersection(howRef, {
    rootMargin: "-100%",
    threshold: 1,
  });
  const columnRef = useRef(null);
  const columnIn = UseIntersection(columnRef, {
    rootMargin: "-100%",
    threshold: 1,
  });
  const lineRef = useRef(null);
  const lineLottieRef = useRef(null);
  const lineIn = UseIntersection(lineRef, {
    rootMargin: "-100%",
    threshold: 1,
  });
  const workRef = useRef(null);
  const workLottieRef = useRef(null);
  const workIn = UseIntersection(workRef, {
    rootMargin: "-100%",
    threshold: 1,
  });
  const duration = 1500;
  const delay = 1000;
  const pushUpY = 600;
  const videoURL = "https://www.youtube.com/watch?v=NUIvibOL5kI";
  const videoURL02 = "https://www.youtube.com/watch?v=-HpnQBf7DQw";
  const previewVideoURL01 = black_webp;
  const previewVideoURL02 = black_webp;

  const video_01_ref = useRef(null);
  const video_02_ref = useRef(null);

  const video_01_in = UseIntersectionLoop(video_01_ref, {
    rootMargin: "-100%",
    threshold: 1,
  });
  const video_02_in = UseIntersectionLoop(video_02_ref, "100%");

  let video_01_playing = false;
  let video_02_playing = false;

  if (video_01_in) {
    video_01_playing = true;
  }
  if (video_02_in) {
    video_02_playing = true;
  }

  const videoIcon = () => {
    return (
      <div className="Icon-player-container flex-center">
        <Picture
          webp={video_icon_webp}
          normal={video_icon_png}
          alt="video_icon_png"
          classpic="Picture-section"
          classimg=""
          lazy
        />
      </div>
    );
  };

  if (lineIn) {
    lineLottieRef.current.play();
    /* lineLottieRef.current.setSpeed(2); */
  }
  if (workIn) {
    workLottieRef.current.play();
  }

  function handleScroll(event, el) {
    const isScrollingUp = event.deltaY < 0;
    const isAtTop = el.scrollTop === 0;
    const isAtBottom = el.scrollTop + el.offsetHeight >= el.scrollHeight;

    if (isScrollingUp && isAtTop) {
      changeStage("-");
    }

    if (!isScrollingUp && isAtBottom) {
      changeStage("+");
    }
  }

  useEffect(() => {
    let pageWrapper = document.querySelector(".Page-inner-wrap");

    if (scrollStage === 2) {
      setTimeout(() => {
        pageWrapper.scrollTop = pageWrapper.scrollHeight;
      }, 10);
    }

    pageWrapper.addEventListener("wheel", (e) => handleScroll(e, pageWrapper));
    return () => {
      pageWrapper.removeEventListener("wheel", (e) =>
        handleScroll(e, pageWrapper)
      );
    };
  }, []);

  const pushUp01 = useSpring({
    config: { duration: duration, easing: easings.easeInOutQuint },
    to: { y: beltIn ? 0 : pushUpY, opacity: beltIn ? 1 : 0 },
  });
  const pushUp02 = useSpring({
    config: { duration: duration, easing: easings.easeInOutQuint },
    to: { y: beltIn ? 0 : pushUpY, opacity: beltIn ? 1 : 0 },
    delay: delay * 1,
  });
  const pushUp03 = useSpring({
    config: { duration: duration, easing: easings.easeInOutQuint },
    to: { y: beltIn ? 0 : pushUpY, opacity: beltIn ? 1 : 0 },
    delay: delay * 2,
  });
  const pushUp04 = useSpring({
    config: { duration: duration, easing: easings.easeInOutQuint },
    to: { y: beltIn ? 0 : pushUpY, opacity: beltIn ? 1 : 0 },
    delay: delay * 3,
  });
  const popUp = useSpring({
    config: { friction: 12, mass: 5 },
    to: { opacity: howIn ? 1 : 0, scale: howIn ? 1 : 0 },
  });
  const slideUp01 = useSpring({
    config: { duration: duration, easing: easings.easeInOutQuint },
    to: { y: columnIn ? 0 : 120 },
  });
  const slideUp02 = useSpring({
    config: { duration: duration * 1.5, easing: easings.easeInOutQuint },
    to: { y: columnIn ? 0 : 215 },
  });

  var tl = gsap.timeline();
  tl.set(".Belt-text", { y: 200, opacity: 0 });
  tl.set(".Belt-text-bold", { y: 200, opacity: 0 });
  tl.set(".Belt-sub-text", { y: 200, opacity: 0 });
  tl.set(".Belt-sub-text-bold", { y: 200, opacity: 0 });
  tl.to(".Belt-text", { y: 0, opacity: 1, duration: 1 });
  tl.to(".Belt-text-bold", { y: 0, opacity: 1, duration: 1 });
  tl.to(".Belt-sub-text", { y: 0, opacity: 1, duration: 1 });
  tl.to(".Belt-sub-text-bold", { y: 0, opacity: 1, duration: 1 });

  return (
    <>
      {/* //?Background - Starting */}
      <Picture
        webp={page_02_bg_webp}
        normal={page_02_bg_png}
        alt="page_02_bg_png"
        classpic="Picture-section h-screen w-screen fixed bottom-0 left-0 z-0 mix-blend-multiply pointer-events-none"
        classimg="mx-auto w-full h-auto"
      />
      {/* //?Background - Ending */}
      {/* //?Main - Starting */}
      <div
        className="Page-inner-wrap w-sceeen bg-cream h-screen overflow-x-hidden overflow-y-scroll"
        id="Page-02"
      >
        {/* //?Go to previos Page */}
        <section
          className="Prev-section h-screen w-screen cursor-pointer bg-blue"
          onClick={() => changeStage("-")}
        ></section>
        {/* //?Page 01 */}
        <section className="Page-section bg-cream px-desktop pb-30vh pt-40vh z-20 -mt-[100vh] h-fit w-full rounded-t-full">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            <span className="Heading-text text-[90px] font-medium text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_01.HEADING_01}
            </span>
            <h1 className="Heading-text text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_01.HEADING_02}
              <br></br>
              {configJSON.CONTENT.PAGE_02.SECTION_01.HEADING_03}
            </h1>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_02.SECTION_01.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_02.SECTION_01.SUB_HEADING_02}
              <br></br>
              {configJSON.CONTENT.PAGE_02.SECTION_01.SUB_HEADING_03}
            </h2>
          </section>
          <div className="Work-container mx-auto h-fit w-fit" ref={workRef}>
            <Lottie
              animationData={working}
              lottieRef={workLottieRef}
              className="Lottie-section -mt-12"
              style={{ height: "100%", width: "100%" }}
              autoplay={false}
              loop={false}
            />
          </div>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section px-desktop pb-30vh relative h-fit w-full">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            <span className="Heading-text !font-bold italic text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_02.HEADING_01}
            </span>
            <h3 className="Second-text text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_02.TEXT_01}
              <br></br>
              {configJSON.CONTENT.PAGE_02.SECTION_02.TEXT_02}
              <br></br>
              {configJSON.CONTENT.PAGE_02.SECTION_02.TEXT_03}
            </h3>
            <h3 className="Second-sub-text text-orange">
              {configJSON.CONTENT.PAGE_02.SECTION_02.SUB_TEXT_01}
              <br></br>
              {configJSON.CONTENT.PAGE_02.SECTION_02.SUB_TEXT_02}
              <br></br>
              {configJSON.CONTENT.PAGE_02.SECTION_02.SUB_TEXT_03}
            </h3>
          </section>
        </section>
        {/* //?Page 03 */}
        <section className="Page-section flex-center px-desktop pb-40vh relative h-fit w-full flex-col">
          <section className="Text-section flex-center z-10 flex-col">
            <h2 className="Heading-text text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_03.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_02.SECTION_03.SUB_HEADING_01}
            </h2>
          </section>
          <Picture
            webp={page_02_engine_webp}
            normal={page_02_engine_png}
            alt="page_02_engine_png"
            classpic="Picture-section h-fit"
            classimg="mx-auto mt-8 mb-6 z-10 max-w-[625px]"
            lazy
          />
          <div className="Link-container">
            <a
              href={configJSON.CONTENT.PAGE_02.SECTION_03.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="Button bg-blue py-5 px-8">
                <span className="Text-Button text-xl font-semibold text-white">
                  {configJSON.CONTENT.PAGE_02.SECTION_03.BUTTON_01}
                </span>
              </button>
            </a>
          </div>
        </section>
        {/* //?Page 04 */}
        <section className="Page-section flex-center px-desktop pb-30vh relative h-fit w-full flex-col">
          <div
            className="Belt-container max-w-1480px flex w-full overflow-hidden pl-6"
            ref={beltRef}
          >
            <div className="Belt" id="Belt-01">
              <animated.div className="Belt-rod" style={pushUp01}>
                <Picture
                  webp={page_02_line_belt_webp}
                  normal={page_02_line_belt_png}
                  alt="page_02_line_belt_png"
                  classpic="Picture-section h-fit w-fit"
                  classimg="z-0"
                  lazy
                />
              </animated.div>
              <section className="Text-section">
                <span className="Belt-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_01}
                </span>
                <span className="Belt-text-bold">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_BOLD_01}
                </span>
                <span className="Belt-sub-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_01}
                  <span className="Belt-sub-text-bold !leading-tight">
                    {
                      configJSON.CONTENT.PAGE_02.SECTION_04
                        .BELT_SUB_TEXT_BOLD_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_02.SECTION_04
                        .BELT_SUB_TEXT_BOLD_02
                    }
                  </span>
                </span>
              </section>
            </div>
            <div className="Belt" id="Belt-02">
              <animated.div className="Belt-rod" style={pushUp02}>
                <Picture
                  webp={page_02_line_belt_webp}
                  normal={page_02_line_belt_png}
                  alt="page_02_line_belt_png"
                  classpic="Picture-section h-fit w-fit"
                  classimg="z-0"
                  lazy
                />
              </animated.div>
              <section className="Text-section">
                <span className="Belt-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_02}
                </span>
                <span className="Belt-text-bold">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_BOLD_02}
                </span>
                <span className="Belt-sub-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_02}
                  <span className="Belt-sub-text-bold !leading-tight">
                    {
                      configJSON.CONTENT.PAGE_02.SECTION_04
                        .BELT_SUB_TEXT_BOLD_03
                    }
                  </span>
                </span>
              </section>
            </div>
            <div className="Belt" id="Belt-03">
              <animated.div className="Belt-rod" style={pushUp03}>
                <Picture
                  webp={page_02_line_belt_webp}
                  normal={page_02_line_belt_png}
                  alt="page_02_line_belt_png"
                  classpic="Picture-section h-fit w-fit"
                  classimg="z-0"
                  lazy
                />
              </animated.div>
              <section className="Text-section">
                <span className="Belt-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_03}
                </span>
                <span className="Belt-text-bold">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_BOLD_03}
                </span>
                <span className="Belt-sub-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_03}
                  <span className="Belt-sub-text-bold !leading-tight">
                    {
                      configJSON.CONTENT.PAGE_02.SECTION_04
                        .BELT_SUB_TEXT_BOLD_04
                    }
                    <br></br>
                  </span>
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_04}
                </span>
              </section>
            </div>
            <div className="Belt" id="Belt-04">
              <animated.div className="Belt-rod" style={pushUp04}>
                <Picture
                  webp={page_02_line_belt_webp}
                  normal={page_02_line_belt_png}
                  alt="page_02_line_belt_png"
                  classpic="Picture-section h-fit w-fit"
                  classimg="z-0"
                  lazy
                />
              </animated.div>
              <section className="Text-section">
                <span className="Belt-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_04}
                </span>
                <span className="Belt-text-bold">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_BOLD_04}
                </span>
                <span className="Belt-sub-text">
                  <span className="Belt-sub-text-bold !leading-tight">
                    {
                      configJSON.CONTENT.PAGE_02.SECTION_04
                        .BELT_SUB_TEXT_BOLD_05
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_02.SECTION_04
                        .BELT_SUB_TEXT_BOLD_06
                    }
                  </span>
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_05}
                </span>
              </section>
            </div>
          </div>
          {/* <Picture
            webp={page_02_belt_webp}
            normal={page_02_belt_png}
            alt="page_02_belt_png"
            classpic="Picture-section h-fit z-10"
            classimg="mx-auto"
            lazy
          /> */}
          <div className="Player-container z-10 -my-3">
            <ReactPlayer
              className="React-player"
              url={belt_small_webm}
              width="100%"
              height="auto"
              playing
              loop
              muted
            />
          </div>
          <div className="Development relative py-20">
            <section className="Text-section flex-center">
              <span className="Heading-text z-10 rounded-3xl bg-orange px-20 py-2 font-bold text-white">
                {configJSON.CONTENT.PAGE_02.SECTION_04.LARGE_TEXT_01}
              </span>
            </section>
            <div className="Development-stripe absolute -top-2 left-1/2 z-0 h-[calc(100%+16px)] w-5 -translate-x-1/2 bg-blue"></div>
          </div>
          <div className="Icon-container flex-center gap-5">
            <div className="Icon-card" id="Icon-card-01">
              <div className="Icon-text">
                <span className="Icon-number">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.NUMBER_ICON_01}
                </span>
                <span className="Icon-info">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.ICON_TEXT_01}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_04.ICON_TEXT_02}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_04.ICON_TEXT_03}
                </span>
              </div>
              <div className="Icon">
                <Picture
                  webp={icon_01_webp}
                  normal={icon_01_png}
                  alt="icon_01_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
            <div className="Icon-card" id="Icon-card-02">
              <div className="Icon-text">
                <span className="Icon-number">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.NUMBER_ICON_02}
                </span>
                <span className="Icon-info">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.ICON_TEXT_04}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_04.ICON_TEXT_05}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_04.ICON_TEXT_06}
                </span>
              </div>
              <div className="Icon">
                <Picture
                  webp={icon_02_webp}
                  normal={icon_02_png}
                  alt="icon_02_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
            <div className="Icon-card" id="Icon-card-03">
              <div className="Icon-text">
                <span className="Icon-number">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.NUMBER_ICON_03}
                </span>
                <span className="Icon-info">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.ICON_TEXT_07}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_04.ICON_TEXT_08}
                </span>
              </div>
              <div className="Icon">
                <Picture
                  webp={icon_03_webp}
                  normal={icon_03_png}
                  alt="icon_03_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
          </div>
        </section>
        {/* //?Page 05 */}
        <section className="Page-section flex-center pb-20vh relative h-fit w-full flex-col">
          <animated.div className="How-container" ref={howRef} style={popUp}>
            <Picture
              webp={page_02_how_webp}
              normal={page_02_how_png}
              alt="page_02_how_png"
              classpic="Picture-section h-fit"
              classimg="mx-auto z-10"
              lazy
            />
          </animated.div>
          <section className="Text-section flex-center z-10 flex-col">
            <h2 className="Heading-text text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_05.HEADING_01}
            </h2>
            <h3 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_02.SECTION_05.SUB_HEADING_01}
            </h3>
          </section>
          <Lottie
            animationData={smoke}
            className="Lottie-section z-10"
            style={{ height: "100%", width: "100%" }}
          />
        </section>
        {/* //?Page 06 */}
        <section className="Page-section flex-center px-desktop relative h-fit w-full flex-col">
          <section className="Text-section flex-center z-10 mb-10 flex-col">
            <h3 className="Second-text font-semibold text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_06.TEXT_01}
            </h3>
            <h3 className="Second-sub-text font-medium text-orange">
              {configJSON.CONTENT.PAGE_02.SECTION_06.SUB_TEXT_01}
            </h3>
          </section>
          <div
            className="Column-container flex items-end justify-center"
            ref={columnRef}
          >
            <div className="Column">
              <section className="Text-section">
                <h3 className="Second-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_06.TEXT_02}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_06.TEXT_03}
                </h3>
                <h4 className="Divide-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_06.DIVIDE_TEXT_01}
                </h4>
                <h3 className="Second-second-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_06.SUB_TEXT_02}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_06.SUB_TEXT_03}
                </h3>
              </section>
              <animated.div
                className="Column-line z-20 mx-auto mt-6 h-[120px] w-[200px] bg-orange"
                style={slideUp01}
              ></animated.div>
            </div>
            <div className="Column">
              <section className="Text-section">
                <h3 className="Second-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_06.TEXT_04}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_06.TEXT_05}
                </h3>
                <h4 className="Divide-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_06.DIVIDE_TEXT_02}
                </h4>
                <h3 className="Second-second-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_06.SUB_TEXT_04}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_06.SUB_TEXT_05}
                </h3>
              </section>
              <animated.div
                className="Column-line z-20 mx-auto mt-6 h-[215px] w-[200px] bg-orange"
                style={slideUp02}
              ></animated.div>
            </div>
          </div>
          <div className="Box-container shadow-yblue z-20 rounded-full border-[3px] border-dashed border-blue bg-white py-3 px-48">
            <section className="Text-section">
              <h2 className="Second-text text-center !text-5xl !font-bold !leading-relaxed text-blue">
                {configJSON.CONTENT.PAGE_02.SECTION_06.HEADING_01}
              </h2>
              <h3 className="Sub-second-text text-40px text-center font-medium text-orange">
                {configJSON.CONTENT.PAGE_02.SECTION_06.SUB_HEADING_01}
              </h3>
            </section>
          </div>
          <div className="Video-container max-w-1360px px-desktop z-50 w-full pt-44 pb-48">
            <ReactPlayer
              className="React-player"
              url={videoURL}
              width="auto"
              height="550px"
              /* light={previewVideoURL02} */
              playing={video_01_playing ? true : false}
              muted
              playIcon={videoIcon()}
              controls
            />
            <div className="Intersection-container" ref={video_01_ref}></div>
          </div>
        </section>
        {/* //?Page 07 */}
        <section className="Page-section flex-center relative h-fit w-full flex-col">
          <div className="Info-container flex-center max-w-1360px relative h-fit w-full pb-8">
            <div className="Info flex-center px-desktop w-full gap-20">
              <section className="Text-section w-1/2 flex-1">
                <h2 className="Heading-text !text-start !font-bold !leading-snug text-blue">
                  {configJSON.CONTENT.PAGE_02.SECTION_07.HEADING_01}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_07.HEADING_02}
                </h2>
                <h3 className="Sub-heading-text !text-start text-orange">
                  {configJSON.CONTENT.PAGE_02.SECTION_07.SUB_HEADING_01}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_07.SUB_HEADING_02}
                </h3>
              </section>
              <div className="Picure-button-container w-1/2 flex-1">
                <Picture
                  webp={page_02_boiler_webp}
                  normal={page_02_boiler_png}
                  alt="page_02_boiler_png"
                  classpic="Picture-section h-fit"
                  classimg="z-10 max-w-[510px] pl-16 pb-10 max-h-[600px]"
                  lazy
                />
                <div className="Link-container flex justify-center">
                  <a
                    href={configJSON.CONTENT.PAGE_02.SECTION_07.LINK_01}
                    className="Link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="Button bg-blue py-5 px-8">
                      <span className="Text-Button text-xl font-semibold text-white">
                        {configJSON.CONTENT.PAGE_02.SECTION_07.BUTTON_01}
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="Flow-element pointer-events-none absolute -bottom-[15px] flex h-fit w-full flex-col items-center justify-center">
              <div className="Flow-cirle -mb-[15px] mr-[7.5px] h-20 w-20 rounded-full border-[15px] border-blue"></div>
              <div className="Flow-up ml-[7.5px] h-64 w-[15px] -translate-x-1/2 rounded-xl bg-blue"></div>
            </div>
          </div>
          <div className="Flow-container h-[500px]">
            <div className="Flow-left w-[calc(50%-60px)]"></div>
            <div className="Icon-show-container pl-44">
              <section className="Text-section">
                <h3 className="Icon-show-text">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_01
                      .ICON_HEADING_01
                  }
                </h3>
                <h3 className="Icon-show-sub-text">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_01
                      .ICON_SUB_HEADING_01
                  }
                </h3>
              </section>
              <div className="Icon-show">
                <Picture
                  webp={icon_line_webp}
                  normal={icon_line_png}
                  alt="icon_line_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
                <Lottie
                  animationData={shield}
                  loop
                  autoPlay
                  height={150}
                  className="Icon-lottie pt-3"
                />
              </div>
            </div>
            <div className="Icon-show-container">
              <section className="Text-section">
                <h3 className="Icon-show-text">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_02
                      .ICON_HEADING_01
                  }
                </h3>
                <h3 className="Icon-show-sub-text">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_02
                      .ICON_SUB_HEADING_01
                  }
                </h3>
              </section>
              <div className="Icon-show">
                <Picture
                  webp={icon_line_webp}
                  normal={icon_line_png}
                  alt="icon_line_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
                <Lottie
                  animationData={high_quality}
                  loop
                  autoPlay
                  height={150}
                  className="Icon-lottie pt-3"
                />
              </div>
            </div>
          </div>
          <div className="Flow-container -mt-[15px] h-[540px] flex-row-reverse">
            <div className="Flow-right mx-desktop right-0 w-1/2 border-t-[15px] border-r-[15px]"></div>
            <div className="Icon-show-container !items-end pr-44">
              <section className="Text-section">
                <h3 className="Icon-show-text text-end">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_03
                      .ICON_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_03
                      .ICON_HEADING_02
                  }
                </h3>
                <h3 className="Icon-show-sub-text text-end">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_03
                      .ICON_SUB_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_03
                      .ICON_SUB_HEADING_02
                  }
                </h3>
              </section>
              <div className="Icon-show !flex-row-reverse">
                <Picture
                  webp={icon_line_small_webp}
                  normal={icon_line_small_png}
                  alt="icon_line_small_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
                <Lottie
                  animationData={gear}
                  loop
                  autoPlay
                  height={150}
                  className="Icon-lottie"
                />
              </div>
            </div>
            <div className="Icon-show-container !items-end">
              <section className="Text-section">
                <h3 className="Icon-show-text text-end">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_04
                      .ICON_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_04
                      .ICON_HEADING_02
                  }
                </h3>
                <h3 className="Icon-show-sub-text text-end">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_04
                      .ICON_SUB_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_04
                      .ICON_SUB_HEADING_02
                  }
                </h3>
              </section>
              <div className="Icon-show !flex-row-reverse">
                <Picture
                  webp={icon_line_small_webp}
                  normal={icon_line_small_png}
                  alt="icon_line_small_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
                <Lottie
                  animationData={minimize}
                  loop
                  autoPlay
                  height={150}
                  className="Icon-lottie"
                />
              </div>
            </div>
          </div>
          <div className="Flow-container -mt-[15px] mb-16 h-[640px]">
            <div className="Flow-left w-1/2"></div>
            <div className="Flow-right -right-1/2 w-full"></div>
            <div className="Icon-show-container pl-44">
              <section className="Text-section">
                <h3 className="Icon-show-text">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_05
                      .ICON_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_05
                      .ICON_HEADING_02
                  }
                </h3>
                <h3 className="Icon-show-sub-text">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_05
                      .ICON_SUB_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_05
                      .ICON_SUB_HEADING_02
                  }
                </h3>
              </section>
              <div className="Icon-show">
                <Picture
                  webp={icon_line_small_webp}
                  normal={icon_line_small_png}
                  alt="icon_line_small_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
                <Lottie
                  animationData={steaming}
                  loop
                  autoPlay
                  height={150}
                  className="Icon-lottie"
                />
              </div>
            </div>
            <div className="Icon-show-container">
              <section className="Text-section">
                <h3 className="Icon-show-text">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_06
                      .ICON_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_06
                      .ICON_HEADING_02
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_06
                      .ICON_HEADING_03
                  }
                </h3>
                <h3 className="Icon-show-sub-text">
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_06
                      .ICON_SUB_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_02.SECTION_07.ICON_SHOW.ICON_06
                      .ICON_SUB_HEADING_02
                  }
                </h3>
              </section>
              <div className="Icon-show">
                <Picture
                  webp={icon_line_small_webp}
                  normal={icon_line_small_png}
                  alt="icon_line_small_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
                {/* <Lottie
                  animationData={fire}
                  loop
                  autoPlay
                  height={150}
                  className="Icon-lottie"
                /> */}
                <ReactPlayer
                  className="React-player"
                  url={fire_webm}
                  width="auto"
                  height="auto"
                  playing
                  loop
                  muted
                />
              </div>
            </div>
          </div>
          <div className="Icon-card-container flex-center pb-20vh gap-4">
            <div className="Icon-card" id="Icon-card-04">
              <div className="Icon-text">
                <span className="Icon-number">
                  {configJSON.CONTENT.PAGE_02.SECTION_07.NUMBER_ICON_04}
                </span>
                <span className="Icon-info">
                  {configJSON.CONTENT.PAGE_02.SECTION_07.ICON_TEXT_09}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_07.ICON_TEXT_10}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_07.ICON_TEXT_11}
                </span>
              </div>
              <div className="Icon">
                <Picture
                  webp={icon_02_webp}
                  normal={icon_02_png}
                  alt="icon_02_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
            <div className="Icon-card" id="Icon-card-05">
              <div className="Icon-text">
                <span className="Icon-number">
                  {configJSON.CONTENT.PAGE_02.SECTION_07.NUMBER_ICON_05}
                </span>
                <span className="Icon-info">
                  {configJSON.CONTENT.PAGE_02.SECTION_07.ICON_TEXT_12}
                  <br></br>
                  {configJSON.CONTENT.PAGE_02.SECTION_07.ICON_TEXT_13}
                </span>
              </div>
              <div className="Icon">
                <Picture
                  webp={icon_03_webp}
                  normal={icon_03_png}
                  alt="icon_03_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
          </div>
          <div className="Video-container max-w-1360px px-desktop w-full pt-44 pb-48">
            <ReactPlayer
              className="React-player"
              url={videoURL02}
              width="100%"
              height="550px"
              /* light={previewVideoURL02} */
              playing={video_02_playing ? true : false}
              muted
              playIcon={videoIcon()}
              controls
            />
            <div className="Intersection-container" ref={video_02_ref}></div>
          </div>
        </section>
        {/* //?Page 08 */}
        <section className="Page-section max-w-1540px px-desktop pb-25vh relative z-20 h-fit w-full flex-col">
          <Lottie
            animationData={line}
            lottieRef={lineLottieRef}
            className="Lottie-section z-10"
            style={{ height: 560 }}
            autoplay={false}
            loop={false}
          />
          <div className="Intersection-container" ref={lineRef}></div>
        </section>
        {/* //?Page 0x */}
        {/* <section className="Page-section flex h-[100vh] items-end justify-center"> */}
        {/* //?Page Down */}
        {/* <div
            className="Page-controller group h-52 w-screen"
            id="Page-controller-02"
          >
            <button
              className="Next-page h-full w-full !rounded-none !shadow-none transition-all hover:bg-white"
              onClick={() => changeStage("+")}
            ></button>
          </div> */}
        {/* </section> */}
      </div>
      {/* //?Main - Ending */}
    </>
  );
}
