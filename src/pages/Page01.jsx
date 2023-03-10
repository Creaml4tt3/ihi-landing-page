import { useRef, useState, useEffect } from "react";
import { UseIntersection } from "../components/UseIntersection";
import { UseIntersectionLoop } from "../components/UseIntersectionLoop";
import { useSpring, animated, easings } from "@react-spring/web";
import ReactPlayer from "react-player";
import Lottie from "lottie-react";
import Picture from "../components/Picture";
import configJSON from "../config.json";
import {
  page_01_people_webp,
  page_01_people_png,
  page_01_bg_webp,
  page_01_bg_png,
  graph_01_webp,
  graph_01_png,
  graph_02_webp,
  graph_02_png,
  graph_03_webp,
  graph_03_png,
  graph_04_webp,
  graph_04_png,
  graph_05_webp,
  graph_05_png,
  graph_06_webp,
  graph_06_png,
  graph_bg_webp,
  graph_bg_png,
  graph_line_webp,
  graph_line_png,
  arrow_up_webp,
  arrow_up_png,
  arrow_down_webp,
  arrow_down_png,
  graph_profit_webp,
  graph_profit_png,
  graph_cost_webp,
  graph_cost_png,
  solution_01_webp,
  solution_02_webp,
  solution_03_webp,
  solution_01_png,
  solution_02_png,
  solution_03_png,
} from "../components/image/Image01";
import solution_01_lottie from "../lotties/solution-01.json";
import solution_02_webm from "../lotties/webm/solution-02.webm";
import solution_03_lottie from "../lotties/solution-03.json";
import graph from "../lotties/graph.json";

export default function Section01({ changeStage }) {
  const graphContainerRef = useRef(null);
  const solutionRef = useRef(null);
  const solution_01Ref = useRef(null);
  const solution_02Ref = useRef(null);
  const solution_03Ref = useRef(null);
  const solution_01AnimationRef = useRef(null);
  const solution_02AnimationRef = useRef(null);
  const solution_03AnimationRef = useRef(null);
  const arrowUpRef = useRef(null);
  const arrowDownRef = useRef(null);
  const graphLineRef = useRef(null);
  const graphLineLottieRef = useRef(null);
  const graphContainerIn = UseIntersection(graphContainerRef, "20%");
  const solution_01In = UseIntersectionLoop(solution_01Ref, "-20%");
  const solution_02In = UseIntersectionLoop(solution_02Ref, "-20%");
  const solution_03In = UseIntersectionLoop(solution_03Ref, "-20%");
  const arrowUpIn = UseIntersection(arrowUpRef, "100%");
  const arrowDownIn = UseIntersection(arrowDownRef, "100%");
  const graphLineIn = UseIntersection(graphLineRef, "0px");
  const solutionRefArr = [
    solution_01AnimationRef,
    solution_02AnimationRef,
    solution_03AnimationRef,
  ];

  const [pastSolutionState, setPastSolutionState] = useState(1);

  function changePicture(ref, state, duration) {
    setFade(ref, state, duration);
    setTimeout(() => {
      changeElement(ref);
    }, duration);
  }

  function changeElement(ref) {
    solutionRefArr.forEach((solution) => {
      if (solution === ref) {
        solution.current.style.display = "block";
      } else {
        solution.current.style.display = "none";
      }
    });
  }

  function setFade(ref, state, duration) {
    if (pastSolutionState === state) {
      return;
    } else {
      setPastSolutionState(state);
      solutionRefArr.forEach((solution) => {
        if (solution === ref) {
          solution.current.style.animation = "0.5s ease-in fadein";
        } else {
          solution.current.style.animation = "0.5s ease-out fadeout";
        }
      });
      setTimeout(() => {}, duration);
    }
  }

  if (solution_01In) {
    changePicture(solution_01AnimationRef, 1, 200);
  } else if (solution_02In) {
    changePicture(solution_02AnimationRef, 2, 200);
  } else if (solution_03In) {
    changePicture(solution_03AnimationRef, 3, 200);
  }

  if (graphLineIn) {
    if (graphContainerRef.current) {
      graphLineLottieRef.current.play();
      graphLineLottieRef.current.setSpeed(3);
    }
  }

  const pushUp01 = useSpring({
    config: { friction: 12 },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
  });
  const pushUp02 = useSpring({
    config: { friction: 12 },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: 200,
  });
  const pushUp03 = useSpring({
    config: { friction: 12 },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: 400,
  });
  const pushUp04 = useSpring({
    config: { friction: 12 },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: 600,
  });
  const pushUp05 = useSpring({
    config: { friction: 12 },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: 800,
  });
  const pushUp06 = useSpring({
    config: { friction: 12 },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: 1000,
  });
  const arrowUp = useSpring({
    config: { friction: 12, delay: 700 },
    from: { y: 550, opacity: 0 },
    to: { y: arrowUpIn ? 0 : 550, opacity: arrowUpIn ? 1 : 0 },
  });
  const arrowDown = useSpring({
    config: { friction: 12, delay: 1000 },
    from: { y: -275, opacity: 0 },
    to: { y: arrowDownIn ? 0 : -275, opacity: arrowDownIn ? 1 : 0 },
  });

  return (
    <>
      {/* //?Background - Starting */}
      <Picture
        webp={page_01_bg_webp}
        normal={page_01_bg_png}
        alt="page_01_bg_png"
        classpic="Picture-section h-0 w-screen fixed bottom-0 z-0 mix-blend-overlay opacity-40"
        classimg="mx-auto w-full absolute bottom-0"
      />
      {/* //?Background - Ending */}
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap h-screen w-full overflow-y-scroll bg-blue">
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
            <section className="Column-container h-[300vh] w-3/5 py-20vh">
              <div
                className="Picture-change sticky top-twenty"
                ref={solutionRef}
              >
                <div className="Lottie-container" ref={solution_01AnimationRef}>
                  <Lottie
                    animationData={solution_01_lottie}
                    className="Lottie-section z-10 mx-auto w-full"
                    style={{ height: 620 }}
                  />
                </div>
                <div
                  className="Player-container hidden"
                  ref={solution_02AnimationRef}
                >
                  <ReactPlayer
                    className="React-player"
                    url={solution_02_webm}
                    width="100%"
                    height="620px"
                    playing
                    loop
                    muted
                  />
                </div>
                <div
                  className="Lottie-container hidden"
                  ref={solution_03AnimationRef}
                >
                  <Lottie
                    animationData={solution_03_lottie}
                    className="Lottie-section z-10 mx-auto w-full"
                    style={{ height: 620 }}
                  />
                </div>
              </div>
            </section>
            <section className="Column-container h-auto w-2/5">
              <section
                className="Text-section flex-center z-20 h-screen flex-col gap-4"
                ref={solution_01Ref}
              >
                <h2 className="Heading-text !text-start text-white">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_01}
                </h2>
                <h2 className="Sub-heading-text !text-start text-orange">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_01}
                </h2>
              </section>
              <section
                className="Text-section flex-center z-20 h-screen flex-col gap-4"
                ref={solution_02Ref}
              >
                <h2 className="Heading-text !text-start text-white">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_02}
                  <br></br>
                  {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_03}
                </h2>
                <h2 className="Sub-heading-text !text-start text-orange">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_02}
                </h2>
              </section>
              <section
                className="Text-section flex-center z-20 h-screen flex-col gap-4"
                ref={solution_03Ref}
              >
                <h2 className="Heading-text !text-start text-white">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_04}
                </h2>
                <h2 className="Sub-heading-text !text-start text-orange">
                  {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_03}
                </h2>
              </section>
            </section>
          </section>
        </section>
        {/* //?Page 03 */}
        <section className="Page-section relative flex h-fit flex-col items-center px-desktop pt-[8%]">
          <section className="Text-section z-20 flex flex-col gap-4">
            <h2 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_03.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_03.SUB_HEADING_01}
            </h2>
          </section>
          <section
            className="Graph-section relative mt-14 mb-10 flex w-fit items-end"
            ref={graphContainerRef}
          >
            <div className="Graph-inside-container z-20 flex gap-[105px] overflow-hidden pl-48 pb-8">
              <animated.div style={pushUp01} className="Graph">
                <Picture
                  webp={graph_01_webp}
                  normal={graph_01_png}
                  alt="graph_01_png"
                  classpic="Picture-section w-fit z-20"
                  classimg="mx-auto"
                  lazy
                />
              </animated.div>
              <animated.div style={pushUp02} className="Graph">
                <Picture
                  webp={graph_02_webp}
                  normal={graph_02_png}
                  alt="graph_02_png"
                  classpic="Picture-section w-fit z-20"
                  classimg="mx-auto"
                  lazy
                />
              </animated.div>
              <animated.div style={pushUp03} className="Graph">
                <Picture
                  webp={graph_03_webp}
                  normal={graph_03_png}
                  alt="graph_03_png"
                  classpic="Picture-section w-fit z-20"
                  classimg="mx-auto"
                  lazy
                />
              </animated.div>
              <animated.div style={pushUp04} className="Graph">
                <Picture
                  webp={graph_04_webp}
                  normal={graph_04_png}
                  alt="graph_04_png"
                  classpic="Picture-section w-fit z-20"
                  classimg="mx-auto"
                  lazy
                />
              </animated.div>
              <animated.div style={pushUp05} className="Graph">
                <Picture
                  webp={graph_05_webp}
                  normal={graph_05_png}
                  alt="graph_05_png"
                  classpic="Picture-section w-fit z-20"
                  classimg="mx-auto"
                  lazy
                />
              </animated.div>
              <animated.div style={pushUp06} className="Graph">
                <Picture
                  webp={graph_06_webp}
                  normal={graph_06_png}
                  alt="graph_06_png"
                  classpic="Picture-section w-fit z-20"
                  classimg="mx-auto"
                  lazy
                />
              </animated.div>
            </div>
            <div className="Graph-info-container ml-[52px] mb-12 flex flex-col gap-5">
              <div className="Graph-inside-info">
                <svg className="Circle" id="Circle-01">
                  <circle cx="11" cy="11" r="11" />
                </svg>
                <span className="Graph-info">Coal</span>
              </div>
              <div className="Graph-inside-info">
                <svg className="Circle" id="Circle-02">
                  <circle cx="11" cy="11" r="11" />
                </svg>
                <span className="Graph-info">Oil</span>
              </div>
              <div className="Graph-inside-info">
                <svg className="Circle" id="Circle-03">
                  <circle cx="11" cy="11" r="11" />
                </svg>
                <span className="Graph-info">Natural gas</span>
              </div>
              <div className="Graph-inside-info">
                <svg className="Circle" id="Circle-04">
                  <circle cx="11" cy="11" r="11" />
                </svg>
                <span className="Graph-info">Renewable energy</span>
              </div>
              <div className="Graph-inside-info">
                <svg className="Circle" id="Circle-05">
                  <circle cx="11" cy="11" r="11" />
                </svg>
                <span className="Graph-info">Nuclear energy</span>
              </div>
              <div className="Graph-inside-info">
                <svg className="Circle" id="Circle-06">
                  <circle cx="11" cy="11" r="11" />
                </svg>
                <span className="Graph-info">Hydroelectricity</span>
              </div>
            </div>
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
        </section>
        {/* //?Page 04 */}
        <section className="Page-section relative mt-56 mb-64 flex h-fit flex-col items-center px-desktop pt-[8%]">
          <section className="Text-section z-20 flex flex-col gap-4">
            <h2 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_04.HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_01.SECTION_04.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_04.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_01.SECTION_04.SUB_HEADING_02}
            </h2>
          </section>
          <div
            className="Graph-line-container relative mt-16"
            ref={graphLineRef}
          >
            <Lottie
              animationData={graph}
              lottieRef={graphLineLottieRef}
              className="Lottie-section z-10"
              style={{ height: 680 }}
              loop={false}
              autoplay={false}
            />
            <section className="Text-section z-30">
              <span className="Text absolute left-1/2 top-[40%] -translate-x-1/2 text-4xl font-medium text-white">
                {configJSON.CONTENT.PAGE_01.SECTION_04.TEXT_01}
              </span>
            </section>
          </div>

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
        {/* //?Page 05 */}
        <section className="Page-section relative flex h-fit items-end justify-center px-desktop">
          <div className="Arrow-up-container">
            <section className="Text-section z-20 flex flex-col gap-4">
              <h2 className="Heading-text text-white">
                {configJSON.CONTENT.PAGE_01.SECTION_05.HEADING_01}
              </h2>
              <h2 className="Sub-heading-text text-orange">
                {configJSON.CONTENT.PAGE_01.SECTION_05.SUB_HEADING_01}
              </h2>
            </section>
            <div className="Arrow mt-4" ref={arrowUpRef}>
              <animated.div style={arrowUp}>
                <Picture
                  webp={arrow_up_webp}
                  normal={arrow_up_png}
                  alt="arrow_up_png"
                  classpic="Picture-section w-full z-10 mt-16"
                  classimg="mx-auto"
                  lazy
                />
              </animated.div>
            </div>
          </div>
          <div className="Arrow-down-container">
            <section className="Text-section z-20 flex flex-col gap-4">
              <h2 className="Heading-text text-white">
                {configJSON.CONTENT.PAGE_01.SECTION_05.HEADING_02}
              </h2>
              <h2 className="Sub-heading-text text-orange">
                {configJSON.CONTENT.PAGE_01.SECTION_05.SUB_HEADING_02}
              </h2>
            </section>
            <div className="Arrow mt-7" ref={arrowDownRef}>
              <animated.div style={arrowDown}>
                <Picture
                  webp={arrow_down_webp}
                  normal={arrow_down_png}
                  alt="arrow_down_png"
                  classpic="Picture-section w-full z-10 mt-16"
                  classimg="mx-auto"
                  lazy
                />
              </animated.div>
            </div>
          </div>
        </section>
        {/* //?Page 06 */}
        <section className="Page-section flex-center relative mt-56 h-fit flex-col gap-7 px-desktop">
          <div className="Graph-section flex-center gap-16">
            <div className="Graph-container">
              <Picture
                webp={graph_profit_webp}
                normal={graph_profit_png}
                alt="arrow_down_png"
                classpic="Picture-section w-full z-10 mt-16"
                classimg="mx-auto"
                lazy
              />
            </div>
            <div className="Graph-container">
              <Picture
                webp={graph_cost_webp}
                normal={graph_cost_png}
                alt="arrow_down_png"
                classpic="Picture-section w-full z-10 mt-16"
                classimg="mx-auto"
                lazy
              />
            </div>
          </div>
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
        </section>
        {/* //?Page Down */}
        <div className="Page-controller flex-center mb-24 mt-10">
          <button
            className="Next-page bg-white py-5 px-8"
            id="Page-01-next"
            onClick={() => changeStage("+")}
          >
            <span className="Text-Button text-xl font-semibold text-blue">
              {configJSON.CONTENT.PAGE_01.BUTTON_NEXT.TEXT}
            </span>
          </button>
        </div>
      </div>
      {/* //?Main - Ending */}
    </>
  );
}
