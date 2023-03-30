import { useRef, useState, useEffect } from "react";
import { UseIntersection } from "../components/UseIntersection";
import { UseIntersectionLoop } from "../components/UseIntersectionLoop";
import { useSpring, animated, easings } from "@react-spring/web";
import ReactPlayer from "react-player";
import Lottie from "lottie-react";
import Picture from "../components/Picture";
import configJSON from "../config.json";
import {
  arrow_down_png,
  arrow_down_webp,
  arrow_up_png,
  arrow_up_webp,
  graph_01_png,
  graph_01_webp,
  graph_02_png,
  graph_02_webp,
  graph_03_png,
  graph_03_webp,
  graph_04_png,
  graph_04_webp,
  graph_05_png,
  graph_05_webp,
  graph_06_png,
  graph_06_webp,
  graph_bg_png,
  graph_bg_webp,
  graph_cost_png,
  graph_cost_webp,
  graph_line_png,
  graph_line_webp,
  graph_profit_png,
  graph_profit_webp,
  page_01_bg_png,
  page_01_bg_webp,
  page_01_people_png,
  page_01_people_webp,
  page_01_graph_png,
  page_01_graph_webp,
  solution_01_png,
  solution_01_webp,
  solution_02_png,
  solution_02_webp,
  solution_03_png,
  solution_03_webp,
} from "../components/image/Image01";
import solution_01_lottie from "../lotties/solution-01.json";
import solution_02_webm from "../lotties/webm/solution-02.webm";
import solution_02_lottie from "../lotties/solution-02.json";
import solution_03_lottie from "../lotties/solution-03.json";
import graph_01_lottie from "../lotties/graph-01.json";
import graph_02_lottie from "../lotties/graph-02.json";
import graph_03_lottie from "../lotties/graph-03.json";
import graph_04_lottie from "../lotties/graph-04.json";
import graph_05_lottie from "../lotties/graph-05.json";
import graph_06_lottie from "../lotties/graph-06.json";
import graph from "../lotties/graph.json";

export default function Section01({ changeStage, scrollStage }) {
  const graphContainerRef = useRef(null);
  const solutionRef = useRef(null);
  const solution_01Ref = useRef(null);
  const solution_02Ref = useRef(null);
  const solution_03Ref = useRef(null);
  const solution_01AnimationRef = useRef(null);
  const solution_02AnimationRef = useRef(null);
  const solution_03AnimationRef = useRef(null);
  const solution_01TextRef = useRef(null);
  const solution_02TextRef = useRef(null);
  const solution_03TextRef = useRef(null);
  const graph01Ref = useRef(null);
  const graph02Ref = useRef(null);
  const graph03Ref = useRef(null);
  const graph04Ref = useRef(null);
  const graph05Ref = useRef(null);
  const graph06Ref = useRef(null);
  const arrowUpRef = useRef(null);
  const arrowDownRef = useRef(null);
  const graphLineRef = useRef(null);
  const graphLineLottieRef = useRef(null);
  const graphContainerIn = UseIntersectionLoop(graphContainerRef, {
    rootMargin: "20%",
  });
  const solution_01In = UseIntersectionLoop(solution_01Ref, {
    rootMargin: "20%",
  });
  const solution_02In = UseIntersectionLoop(solution_02Ref, {
    rootMargin: "20%",
  });
  const solution_03In = UseIntersectionLoop(solution_03Ref, {
    rootMargin: "20%",
  });
  const arrowUpIn = UseIntersectionLoop(arrowUpRef, { rootMargin: "20%" });
  const arrowDownIn = UseIntersectionLoop(arrowDownRef, { rootMargin: "20%" });
  const graphLineIn = UseIntersectionLoop(graphLineRef, { rootMargin: "20%" });
  const solutionRefArr = [
    solution_01AnimationRef,
    solution_02AnimationRef,
    solution_03AnimationRef,
  ];
  const solutionTextRefArr = [
    solution_01TextRef,
    solution_02TextRef,
    solution_03TextRef,
  ];
  const duration = 1000;
  const delay = 300;

  const [pastSolutionState, setPastSolutionState] = useState(1);

  function changePicture(ref, textRef, state, duration) {
    if (window.innerWidth > 1024) {
      setFade(ref, textRef, state, duration);
      setTimeout(() => {
        changeElement(ref, textRef);
      }, duration);
    }
  }

  function changeElement(ref, textRef) {
    solutionRefArr.forEach((solution) => {
      if (solution === ref) {
        solution.current.style.display = "block";
      } else {
        solution.current.style.display = "none";
      }
    });
    solutionTextRefArr.forEach((solution) => {
      if (solution === textRef) {
        solution.current.style.display = "flex";
      } else {
        solution.current.style.display = "none";
      }
    });
  }

  function setFade(ref, textRef, state, duration) {
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
      solutionTextRefArr.forEach((solution) => {
        if (solution === textRef) {
          solution.current.style.animation = "0.5s ease-in fadein";
        } else {
          solution.current.style.animation = "0.5s ease-out fadeout";
        }
      });
      setTimeout(() => {}, duration);
    }
  }

  if (solution_01In) {
    changePicture(solution_01AnimationRef, solution_01TextRef, 1, 200);
  } else if (solution_02In) {
    changePicture(solution_02AnimationRef, solution_02TextRef, 2, 200);
  } else if (solution_03In) {
    changePicture(solution_03AnimationRef, solution_03TextRef, 3, 200);
  }

  if (graphLineIn) {
    if (graphContainerRef.current) {
      graphLineLottieRef.current.play();
      graphLineLottieRef.current.setSpeed(3);
    }
  } else {
    if (graphContainerRef.current) {
      graphLineLottieRef.current.goToAndStop(30, true);
    }
  }
  function handleWheel(event, el) {
    const isScrollingUp = event.deltaY < 0;
    const isAtTop = el.scrollTop === 0;
    const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;

    if (isScrollingUp && isAtTop) {
    }

    if (!isScrollingUp && isAtBottom) {
      changeStage("+");
    }
  }
  function handleScroll(el) {
    const isAtTop = el.scrollTop === 0;
    const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;

    if (window.innerWidth <= 1024) {
      if (el.scrollTop + el.clientHeight - el.scrollHeight >= -5) {
        changeStage("+");
      }
    }

    if (isAtTop) {
    }

    if (isAtBottom) {
      changeStage("+");
    }
  }

  function randomMath(min, max) {
    return Math.random() * (max - min) + min;
  }

  if (graphContainerIn) {
    /* setTimeout(() => {
      graph01Ref.current.goToAndPlay(0);
    }, randomMath(500, 1500));
    setTimeout(() => {
      graph02Ref.current.goToAndPlay(0);
    }, randomMath(500, 1500));
    setTimeout(() => {
      graph03Ref.current.goToAndPlay(0);
    }, randomMath(500, 1500));
    setTimeout(() => {
      graph04Ref.current.goToAndPlay(0);
    }, randomMath(500, 1500));
    setTimeout(() => {
      graph05Ref.current.goToAndPlay(0);
    }, randomMath(500, 1500));
    setTimeout(() => {
      graph06Ref.current.goToAndPlay(0);
    }, randomMath(500, 1500)); */
    graph01Ref.current.goToAndPlay(0);
    graph02Ref.current.goToAndPlay(0);
    graph03Ref.current.goToAndPlay(0);
    graph04Ref.current.goToAndPlay(0);
    graph05Ref.current.goToAndPlay(0);
    graph06Ref.current.goToAndPlay(0);
  }

  useEffect(() => {
    alert(navigator.userAgent);
    if (navigator.userAgent) {
      console.log(navigator.userAgent);
    }
    graph01Ref.current.stop();
    graph02Ref.current.stop();
    graph03Ref.current.stop();
    graph04Ref.current.stop();
    graph05Ref.current.stop();
    graph06Ref.current.stop();

    let pageWrapper = document.querySelector(".Page-inner-wrap");

    if (scrollStage === 1) {
      setTimeout(() => {
        pageWrapper.scrollTop = pageWrapper.scrollHeight - 1500;
      }, 10);
    }

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

  const pushUp01 = useSpring({
    config: { duration: duration, easing: easings.easeInOutCubic },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
  });
  const pushUp02 = useSpring({
    config: { duration: duration, easing: easings.easeInOutCubic },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: delay,
  });
  const pushUp03 = useSpring({
    config: { duration: duration, easing: easings.easeInOutCubic },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: delay * 2,
  });
  const pushUp04 = useSpring({
    config: { duration: duration, easing: easings.easeInOutCubic },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: delay * 3,
  });
  const pushUp05 = useSpring({
    config: { duration: duration, easing: easings.easeInOutCubic },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: delay * 4,
  });
  const pushUp06 = useSpring({
    config: { duration: duration, easing: easings.easeInOutCubic },
    from: { y: 400, opacity: 0 },
    to: { y: graphContainerIn ? 0 : 400, opacity: graphContainerIn ? 1 : 0 },
    delay: delay * 5,
  });
  const arrowUp = useSpring({
    config: { duration: duration * 1.5, easing: easings.easeInOutCubic },
    from: { y: 550, opacity: 0 },
    to: { y: arrowUpIn ? 0 : 550, opacity: arrowUpIn ? 1 : 0 },
  });
  const arrowDown = useSpring({
    config: { duration: duration * 1.5, easing: easings.easeInOutCubic },
    from: { y: -275, opacity: 0 },
    to: { y: arrowDownIn ? 0 : -275, opacity: arrowDownIn ? 1 : 0 },
  });

  const Br = () => {
    if (window.innerWidth > 1024) {
      return <br></br>;
    }
  };

  return (
    <>
      {/* //?Background - Starting */}
      <Picture
        webp={page_01_bg_webp}
        normal={page_01_bg_png}
        alt="page_01_bg_png"
        classpic="Picture-section w-screen fixed bottom-0 z-0 mix-blend-overlay opacity-40"
        classimg="mx-auto w-full absolute bottom-0"
      />
      {/* //?Background - Ending */}
      {/* //?Main - Starting */}
      <div
        className="Page-inner-wrap h-screen w-screen overflow-x-hidden overflow-y-scroll"
        id="Page-01"
      >
        {/* //?Page 01 */}
        <section className="Page-section relative flex h-screen flex-col items-center justify-end px-desktop maxtablet:justify-between">
          <section className="Text-section z-20 flex flex-col gap-4 maxtablet:pt-40vh">
            <h1 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_01.HEADING_01}
            </h1>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_01.SUB_HEADING_01}
            </h2>
          </section>
          <Picture
            webp={page_01_people_webp}
            normal={page_01_people_png}
            alt="page_01_people_png"
            classpic="Picture-section w-full z-10"
            classimg="mx-auto tablet:w-[60vw]"
          />
        </section>
        {/* //?Page 02 */}
        <section className="Page-section relative h-fit">
          <section className="Section-container flex-center px-desktop maxtablet:flex-col">
            <section className="Column-container h-[400vh] w-3/5 py-20vh maxtablet:h-fit maxtablet:w-full">
              <div
                className="Picture-change sticky top-twenty maxtablet:static"
                ref={solutionRef}
              >
                <div
                  className="Lottie-container maxtablet:!block"
                  ref={solution_01AnimationRef}
                >
                  <Lottie
                    animationData={solution_01_lottie}
                    className="Lottie-section z-10 mx-auto w-full"
                    style={{
                      height: `${window.innerWidth > 1024 ? "620px" : "60vh"}`,
                    }}
                  />
                  <section className="Text-section flex-center z-20 !hidden flex-col gap-4 maxtablet:!block">
                    <h2 className="Heading-text text-white">
                      {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_01}
                    </h2>
                    <h2 className="Sub-heading-text text-orange">
                      {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_01}
                    </h2>
                  </section>
                </div>
                <div
                  className="Player-container hidden maxtablet:!block"
                  ref={solution_02AnimationRef}
                >
                  {/*                   <ReactPlayer
                    className="React-player"
                    url={solution_02_webm}
                    width="100%"
                    height="620px"
                    playing
                    loop
                    muted
                  /> */}
                  <Lottie
                    animationData={solution_02_lottie}
                    className="Lottie-section z-10 mx-auto w-full"
                    style={{
                      height: `${window.innerWidth > 1024 ? "620px" : "60vh"}`,
                    }}
                  />
                  <section className="Text-section flex-center z-20 !hidden flex-col gap-4 maxtablet:!block">
                    <h2 className="Heading-text text-white">
                      {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_02}
                      <Br />
                      {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_03}
                    </h2>
                    <h2 className="Sub-heading-text text-orange">
                      {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_02}
                    </h2>
                  </section>
                </div>
                <div
                  className="Lottie-container hidden maxtablet:!block"
                  ref={solution_03AnimationRef}
                >
                  <Lottie
                    animationData={solution_03_lottie}
                    className="Lottie-section z-10 mx-auto w-full"
                    style={{
                      height: `${window.innerWidth > 1024 ? "620px" : "60vh"}`,
                    }}
                  />
                  <section className="Text-section flex-center z-20 !hidden flex-col gap-4 maxtablet:!block">
                    <h2 className="Heading-text text-white">
                      {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_04}
                    </h2>
                    <h2 className="Sub-heading-text text-orange">
                      {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_03}
                    </h2>
                  </section>
                </div>
              </div>
            </section>
            <section className="Column-container relative h-[400vh] w-2/5 maxtablet:hidden">
              <div
                className="Section-action-container pointer-events-none absolute top-0 h-screen w-full"
                ref={solution_01Ref}
              ></div>
              <div
                className="Section-action-container pointer-events-none absolute top-[100vh] h-screen w-full"
                ref={solution_02Ref}
              ></div>
              <div
                className="Section-action-container pointer-events-none absolute top-[200vh] h-screen w-full"
                ref={solution_03Ref}
              ></div>
              <div className="All-text-section sticky top-0 maxtablet:static">
                <section
                  className="Text-section flex-center z-20 h-screen flex-col gap-4"
                  ref={solution_01TextRef}
                >
                  <h2 className="Heading-text !text-start text-white">
                    {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_01}
                  </h2>
                  <h2 className="Sub-heading-text !text-start text-orange">
                    {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_01}
                  </h2>
                </section>
                <section
                  className="Text-section flex-center z-20 hidden h-screen flex-col gap-4"
                  ref={solution_02TextRef}
                >
                  <h2 className="Heading-text !text-start text-white">
                    {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_02}
                    <Br />
                    {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_03}
                  </h2>
                  <h2 className="Sub-heading-text !text-start text-orange">
                    {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_02}
                  </h2>
                </section>
                <section
                  className="Text-section flex-center z-20 hidden h-screen flex-col gap-4"
                  ref={solution_03TextRef}
                >
                  <h2 className="Heading-text !text-start text-white">
                    {configJSON.CONTENT.PAGE_01.SECTION_02.HEADING_04}
                  </h2>
                  <h2 className="Sub-heading-text !text-start text-orange">
                    {configJSON.CONTENT.PAGE_01.SECTION_02.SUB_HEADING_03}
                  </h2>
                </section>
              </div>
            </section>
          </section>
        </section>
        {/* //?Page 03 */}
        <section className="Page-section relative flex h-fit flex-col items-center px-desktop pt-[8vh]">
          <section className="Text-section z-20 flex flex-col gap-4">
            <h2 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_03.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_03.SUB_HEADING_01}
            </h2>
          </section>
          <section
            className="Graph-section relative mt-14 mb-10 flex w-fit items-end maxtablet:flex-col maxtablet:gap-4"
            ref={graphContainerRef}
          >
            <div className="Graph-inside-container relative z-20 flex h-full overflow-hidden">
              <Picture
                webp={graph_bg_webp}
                normal={graph_bg_webp}
                alt="graph_bg_webp"
                classpic="Picture-section w-full z-10 maxtablet:hidden"
                classimg="w-full h-auto"
              />
              <Picture
                webp={page_01_graph_webp}
                normal={page_01_graph_webp}
                alt="page_01_graph_webp"
                classpic="Picture-section w-full z-10 hidden maxtablet:block"
                classimg="w-full h-auto"
              />
              <div className="Graph-line-container absolute right-0 bottom-12 z-20 flex items-end gap-[min(5.8vw,103px)] maxlabtop:bottom-[clamp(32px,3vw,48px)] maxlabtop:gap-[clamp(66px,7vw-5.5px,103px)] maxtablet:hidden">
                <Lottie
                  animationData={graph_01_lottie}
                  lottieRef={graph01Ref}
                  className="Lottie-section z-10 mx-auto w-full maxlabtop:w-[5vw]"
                  loop={false}
                />
                <Lottie
                  animationData={graph_02_lottie}
                  lottieRef={graph02Ref}
                  className="Lottie-section z-10 mx-auto w-full maxlabtop:w-[5vw]"
                  loop={false}
                />
                <Lottie
                  animationData={graph_03_lottie}
                  lottieRef={graph03Ref}
                  className="Lottie-section z-10 mx-auto w-full maxlabtop:w-[5vw]"
                  loop={false}
                />
                <Lottie
                  animationData={graph_04_lottie}
                  lottieRef={graph04Ref}
                  className="Lottie-section z-10 mx-auto w-full maxlabtop:w-[5vw]"
                  loop={false}
                />
                <Lottie
                  animationData={graph_05_lottie}
                  lottieRef={graph05Ref}
                  className="Lottie-section z-10 mx-auto w-full maxlabtop:w-[5vw]"
                  loop={false}
                />
                <Lottie
                  animationData={graph_06_lottie}
                  lottieRef={graph06Ref}
                  className="Lottie-section z-10 mx-auto w-full maxlabtop:w-[5vw]"
                  loop={false}
                />
              </div>
              {/* <div className="Graph-line-container absolute right-0 bottom-12 z-20 flex w-full items-end justify-between pl-[17%]">
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
              </div> */}
            </div>
            <div className="Graph-info-container maxlaptop:ml-[28px] ml-[52px] mb-12 flex flex-col gap-5 maxlabtop:mb-2 maxtablet:ml-0 maxtablet:w-full maxtablet:flex-row maxtablet:flex-wrap maxtablet:items-center maxtablet:justify-center maxtablet:gap-2">
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
            <div
              className="Intersection-container"
              ref={graphContainerRef}
            ></div>
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
        <section className="Page-section relative mt-56 mb-64 flex h-fit flex-col items-center px-desktop pt-[8vh]">
          <section className="Text-section z-20 flex flex-col gap-4">
            <h2 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_01.SECTION_04.HEADING_01}
              <Br />
              {configJSON.CONTENT.PAGE_01.SECTION_04.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_01.SECTION_04.SUB_HEADING_01}
              <Br />
              {configJSON.CONTENT.PAGE_01.SECTION_04.SUB_HEADING_02}
            </h2>
          </section>
          <div className="Graph-line-container relative mt-16 w-full maxlabtop:mt-4">
            <div className="Intersection-container" ref={graphLineRef}></div>
            <Lottie
              animationData={graph}
              lottieRef={graphLineLottieRef}
              className="Lottie-section z-10"
              style={{
                height: `${
                  window.innerWidth <= 425
                    ? "30vh"
                    : window.innerWidth > 1024
                    ? "680px"
                    : "65vh"
                }`,
                width: "100%",
              }}
              loop={false}
              autoplay={false}
            />
            <section className="Text-section z-30">
              <span className="Text absolute left-1/2 top-[40%] -translate-x-1/2 text-4xl font-medium text-white maxlabtop:text-[clamp(0.875rem,3.25vw,1.875rem)]">
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
        <section className="Page-section relative flex h-fit items-end justify-center px-desktop maxtablet:flex-col">
          <div className="Arrow-up-container maxtablet:w-full">
            <section className="Text-section z-20 flex flex-col gap-4">
              <h2 className="Heading-text text-white">
                {configJSON.CONTENT.PAGE_01.SECTION_05.HEADING_01}
              </h2>
              <h2 className="Sub-heading-text text-orange">
                {configJSON.CONTENT.PAGE_01.SECTION_05.SUB_HEADING_01}
              </h2>
            </section>
            <div className="Arrow mt-4 overflow-hidden">
              <animated.div style={arrowUp}>
                <Picture
                  webp={arrow_up_webp}
                  normal={arrow_up_png}
                  alt="arrow_up_png"
                  classpic="Picture-section w-full z-10 mt-16"
                  classimg="mx-auto maxtablet:w-[40vw]"
                  lazy
                />
              </animated.div>
            </div>
          </div>
          <div className="Intersection-container" ref={arrowUpRef}></div>
          <div className="Arrow-down-container maxtablet:w-full">
            <section className="Text-section z-20 flex flex-col gap-4">
              <h2 className="Heading-text text-white">
                {configJSON.CONTENT.PAGE_01.SECTION_05.HEADING_02}
              </h2>
              <h2 className="Sub-heading-text text-orange">
                {configJSON.CONTENT.PAGE_01.SECTION_05.SUB_HEADING_02}
              </h2>
            </section>
            <div className="Arrow mt-7 overflow-hidden">
              <animated.div style={arrowDown}>
                <Picture
                  webp={arrow_down_webp}
                  normal={arrow_down_png}
                  alt="arrow_down_png"
                  classpic="Picture-section w-full z-10 mt-16"
                  classimg="mx-auto maxtablet:w-[40vw]"
                  lazy
                />
              </animated.div>
            </div>
            <div className="Intersection-container" ref={arrowDownRef}></div>
          </div>
        </section>
        {/* //?Page 06 */}
        <section className="Page-section flex-center relative mt-56 h-fit flex-col gap-7 px-desktop">
          <div className="Graph-section flex-center gap-16 maxtablet:flex-col">
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
        {/* //?Section Tablet & Mobile */}
        {window.innerWidth <= 1024 && (
          <section className="Hold-scroll-section h-[20vh]"></section>
        )}
      </div>
      {/* //?Main - Ending */}
    </>
  );
}
