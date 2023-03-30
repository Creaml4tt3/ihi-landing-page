import { useLayoutEffect, useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Lottie from "lottie-react";
import { UseIntersection } from "../components/UseIntersection";
import { UseIntersectionLoop } from "../components/UseIntersectionLoop";
import Picture from "../components/Picture";
import Video from "../components/Video";
import { gsap } from "gsap";
import configJSON from "../config.json";
import {
  page_04_solution_01_webp,
  page_04_solution_01_png,
  page_04_solution_02_webp,
  page_04_solution_02_png,
  page_04_solution_03_webp,
  page_04_solution_03_png,
  page_04_bg_webp,
  page_04_bg_png,
  asrs_png,
  asrs_webp,
  boxes_png,
  boxes_webp,
  coins_png,
  coins_webp,
  orders_png,
  orders_webp,
  icon_04_webp,
  icon_04_png,
  icon_05_webp,
  icon_05_png,
  icon_06_webp,
  icon_06_png,
} from "../components/image/Image04";
import {
  black_png,
  black_webp,
  icon_02_png,
  icon_02_webp,
  video_icon_png,
  video_icon_webp,
} from "../components/image/Image02";
import belt_webm from "../lotties/webm/belt.webm";
import belt_hevc from "../lotties/hevc/belt.mp4";
import warehouse_01 from "../lotties/warehouse-01.json";
import warehouse_02 from "../lotties/warehouse-02.json";
export default function Section03({ changeStage, scrollStage }) {
  const videoURL = "https://www.youtube.com/watch?v=2gBzJWvE_uM (";
  const previewVideoURL01 = black_webp;
  const solution_01Ref = useRef(null);
  const solution_02Ref = useRef(null);
  const solution_03Ref = useRef(null);
  const solution_01PicRef = useRef(null);
  const solution_02PicRef = useRef(null);
  const solution_03PicRef = useRef(null);
  const solution_01TextRef = useRef(null);
  const solution_02TextRef = useRef(null);
  const solution_03TextRef = useRef(null);
  const solution_01In = UseIntersectionLoop(solution_01Ref, "-20%");
  const solution_02In = UseIntersectionLoop(solution_02Ref, "-20%");
  const solution_03In = UseIntersectionLoop(solution_03Ref, "-20%");
  const solutionRefArr = [
    solution_01PicRef,
    solution_02PicRef,
    solution_03PicRef,
  ];
  const solutionTextRefArr = [
    solution_01TextRef,
    solution_02TextRef,
    solution_03TextRef,
  ];
  let sliders;

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

  const videoRef = useRef(null);
  const videoIn = UseIntersectionLoop(videoRef, {
    rootMargin: "-100%",
    threshold: 1,
  });

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
    changePicture(solution_01PicRef, solution_01TextRef, 1, 200);
  } else if (solution_02In) {
    changePicture(solution_02PicRef, solution_02TextRef, 2, 200);
  } else if (solution_03In) {
    changePicture(solution_03PicRef, solution_03TextRef, 3, 200);
  }

  function handleWheel(event, el) {
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
  function handleScroll(el) {
    const isAtTop = el.scrollTop === 0;
    const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;

    if (window.innerWidth <= 1024) {
      if (el.scrollTop + el.clientHeight - el.scrollHeight >= -5) {
        changeStage("+");
      }
    }

    if (isAtTop) {
      changeStage("-");
    }

    if (isAtBottom) {
      changeStage("+");
    }
  }

  useEffect(() => {
    sliders = document.querySelectorAll(".Slide-container");
    const loop = horizontalLoop(sliders, {
      repeat: -1,
    });
    let pageWrapper = document.querySelector(".Page-inner-wrap");

    if (scrollStage === 4) {
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

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }

  const Br = () => {
    if (window.innerWidth > 1024) {
      return <br></br>;
    }
  };

  return (
    <>
      {/* //?Background - Starting */}
      <Picture
        webp={page_04_bg_webp}
        normal={page_04_bg_png}
        alt="page_04_bg_png"
        classpic="Picture-section h-screen w-screen fixed bottom-0 left-0 z-0 mix-blend-multiply pointer-events-none"
        classimg="mx-auto w-full h-auto"
      />
      {/* //?Background - Ending */}
      {/* //?Main - Starting */}
      <div
        className="Page-inner-wrap z-10 h-screen w-screen overflow-x-hidden overflow-y-scroll bg-cream"
        id="Page-04"
      >
        {/* //?Go to previos Page */}
        <section
          className="Prev-section h-screen w-screen cursor-pointer bg-blue"
          onClick={() => changeStage("-")}
        ></section>
        {/* //?Page 01 */}
        <section className="Page-section flex-center z-0 -mt-[100vh] h-screen w-full flex-col rounded-t-full bg-cream px-desktop">
          <section className="Text-section flex-center z-10 flex-col gap-3">
            <span className="Title-text text-center text-40px font-semibold leading-normal text-blue maxlabtop:text-[clamp(0.875rem,2.5vw,2rem)]">
              {configJSON.CONTENT.PAGE_04.SECTION_01.TITLE_01}
              <Br />
              {configJSON.CONTENT.PAGE_04.SECTION_01.TITLE_02}
            </span>
            <span className="Sub-title-text text-center text-4xl font-medium leading-normal text-orange maxlabtop:text-[clamp(0.875rem,2.5vw,2rem)]">
              {configJSON.CONTENT.PAGE_04.SECTION_01.SUB_TITLE_01}
              <Br />
              {configJSON.CONTENT.PAGE_04.SECTION_01.SUB_TITLE_02}
            </span>
          </section>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section flex-center z-0 h-fit w-full flex-col bg-cream px-desktop pb-52">
          <section className="Text-section flex-center z-10 flex-col">
            <h2 className="Heading-text text-center text-blue">
              {configJSON.CONTENT.PAGE_04.SECTION_02.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text text-center text-orange">
              {configJSON.CONTENT.PAGE_04.SECTION_02.SUB_HEADING_01}
            </h2>
          </section>
          <Picture
            webp={asrs_webp}
            normal={asrs_png}
            alt="asrs_png"
            classpic="Picture-section z-10"
            classimg="mx-auto w-full h-auto mb-11 mt-5"
            lazy
          />
          <div className="Link-container">
            <a
              href={configJSON.CONTENT.PAGE_04.SECTION_02.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="Button bg-blue py-5 px-8">
                <span className="Text-Button text-xl font-semibold text-white">
                  {configJSON.CONTENT.PAGE_04.SECTION_02.BUTTON_TEXT_01}
                </span>
              </button>
            </a>
          </div>
        </section>
        {/* //?Page 03 */}
        <section className="Page-section flex-center z-0 h-fit w-full flex-col px-desktop">
          <div className="Video-container w-full max-w-1360px">
            <ReactPlayer
              className="React-player"
              url={videoURL}
              width="100%"
              height={window.innerWidth <= 1024 ? "20vh" : "550px"}
              /* light={previewVideoURL01} */
              playing={videoIn ? true : false}
              muted
              volume={100}
              playIcon={videoIcon()}
              controls
            />
            <div className="Intersection-container" ref={videoRef}></div>
          </div>
          <div className="Icon-container flex-center mt-5 gap-4 maxlabtop:flex-wrap">
            <div className="Icon-card" id="Icon-card-01">
              <div className="Icon-text">
                <span className="Icon-number">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_01
                      .NUMBER
                  }
                </span>
                <span className="Icon-info">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_01
                      .ICON_TEXT_01
                  }
                  <br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_01
                      .ICON_TEXT_02
                  }
                </span>
              </div>
              <div className="Icon">
                <Picture
                  webp={icon_04_webp}
                  normal={icon_04_png}
                  alt="icon_04_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
            <div className="Icon-card" id="Icon-card-02">
              <div className="Icon-text">
                <span className="Icon-number">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_02
                      .NUMBER
                  }
                </span>
                <span className="Icon-info">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_02
                      .ICON_TEXT_01
                  }
                  <br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_02
                      .ICON_TEXT_02
                  }
                  <br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_02
                      .ICON_TEXT_03
                  }
                </span>
              </div>
              <div className="Icon">
                <Picture
                  webp={icon_05_webp}
                  normal={icon_05_png}
                  alt="icon_05_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
            <div className="Icon-card" id="Icon-card-03">
              <div className="Icon-text">
                <span className="Icon-number">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_03
                      .NUMBER
                  }
                </span>
                <span className="Icon-info">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_03
                      .ICON_TEXT_01
                  }
                  <br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_03
                      .ICON_TEXT_02
                  }
                  <br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_03
                      .ICON_TEXT_03
                  }
                </span>
              </div>
              <div className="Icon">
                <Picture
                  webp={icon_06_webp}
                  normal={icon_06_png}
                  alt="icon_06_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
            <div className="Icon-card" id="Icon-card-04">
              <div className="Icon-text">
                <span className="Icon-number">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_04
                      .NUMBER
                  }
                </span>
                <span className="Icon-info">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_04
                      .ICON_TEXT_01
                  }
                  <br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_04
                      .ICON_TEXT_02
                  }
                  <br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_04
                      .ICON_TEXT_03
                  }
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
          </div>
        </section>
        {/* //?Page 04 */}
        <section className="Page-section flex-center z-0 h-fit w-full flex-col px-desktop">
          <section className="Text-section flex-center z-10 flex-col py-25vh">
            <h2 className="Heading-text text-center text-blue">
              {configJSON.CONTENT.PAGE_04.SECTION_04.HEADING_01}
              <Br />
              {configJSON.CONTENT.PAGE_04.SECTION_04.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text text-center text-orange">
              {configJSON.CONTENT.PAGE_04.SECTION_04.SUB_HEADING_01}
              <Br />
              {configJSON.CONTENT.PAGE_04.SECTION_04.SUB_HEADING_02}
            </h2>
          </section>
          <div className="Row-container flex-center flex-col gap-fifthteen">
            <div className="Row maxtablet:flex-col">
              <div className="Lottie-section">
                <div className="Lottie-container">
                  <Lottie
                    animationData={warehouse_01}
                    className="Lottie-section z-20 mx-auto w-full maxtablet:max-w-[40vw]"
                    style={{ height: "auto" }}
                    loop={true}
                  />
                </div>
              </div>
              <section className="Text-section z-10 flex w-fit flex-auto flex-col items-start justify-center gap-4 maxtablet:w-full maxtablet:items-center">
                <h2 className="Heading-text !w-fit !text-start text-blue maxtablet:!text-center">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_01
                      .HEADING_01
                  }
                  <Br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_01
                      .HEADING_02
                  }
                </h2>
                <h2 className="Sub-heading-text z-10 !w-fit !text-start text-orange maxtablet:!text-center">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_01
                      .SUB_HEADING_01
                  }
                  <Br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_01
                      .SUB_HEADING_02
                  }
                </h2>
              </section>
            </div>
            <div className="Row maxtablet:flex-col-reverse">
              <section className="Text-section z-10 flex w-fit flex-col items-start justify-center gap-4 maxtablet:w-full maxtablet:items-center">
                <h2 className="Heading-text !w-fit !text-start text-blue maxtablet:!text-center">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_02
                      .HEADING_01
                  }
                  <Br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_02
                      .HEADING_02
                  }
                </h2>
                <h2 className="Sub-heading-text !w-fit !text-start text-orange maxtablet:!text-center">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_02
                      .SUB_HEADING_01
                  }
                  <Br />
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_02
                      .SUB_HEADING_02
                  }
                </h2>
              </section>
              <div className="Lottie-section">
                <div className="Lottie-container">
                  <Lottie
                    animationData={warehouse_02}
                    className="Lottie-section z-20 mx-auto w-full maxtablet:max-w-[40vw]"
                    style={{ height: "auto" }}
                    loop={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //?Page 05 */}
        <section className="Page-section flex-center relative h-fit w-full flex-col px-desktop pt-25vh">
          <div className="Player-container absolute left-0 -bottom-[5vw] z-20 w-full scale-x-[-1]">
            {/*             <ReactPlayer
              className="React-player"
              url={belt_webm}
              width="100%"
              height="auto"
              playing
              loop
              muted
            /> */}
            {window.innerWidth > 1024 ? (
              <video
                width="100%"
                height="auto"
                loop
                muted
                autoPlay
                onLoad={() => this.play()}
                playsInline
              >
                <source src={belt_hevc} type="video/mp4"></source>
              </video>
            ) : (
              <video
                width="100%"
                height="auto"
                loop
                muted
                autoPlay
                onLoad={() => this.play()}
                playsInline
              >
                <source src={belt_webm} type="video/webm"></source>
                <source src={belt_hevc} type="video/mp4"></source>
              </video>
            )}
          </div>
          <div className="Convenient-container relative flex h-fit w-full max-w-1360px flex-col justify-center gap-[60px]">
            <div className="Line-place pointer-events-none absolute left-0 top-0 h-full w-1/3 border-t-8 border-l-8 border-blue"></div>
            <section className="Text-section flex-center z-10 -mt-20 w-full flex-col">
              <h2 className="Heading-text !w-fit text-blue">
                {configJSON.CONTENT.PAGE_04.SECTION_05.HEADING_01}
              </h2>
              <h2 className="Sub-heading-text !w-fit text-orange">
                {configJSON.CONTENT.PAGE_04.SECTION_05.SUB_HEADING_01}
              </h2>
            </section>
            <div className="Line-place pointer-events-none absolute right-0 top-0 h-full w-1/3 border-t-8 border-r-8 border-blue"></div>
            <div className="Slide-track z-50 flex w-full max-w-1360px -translate-x-[32%] justify-between px-10">
              <div className="Slide-container" id="Slide-01">
                <section className="Text-section flex-center z-10 w-fit flex-col">
                  <span className="Title-text text-blue">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_01
                        .TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_01
                        .TITLE_02
                    }
                  </span>
                  <span className="Sub-title-text text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_01
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_01
                        .SUB_TITLE_02
                    }
                  </span>
                </section>
                <Picture
                  webp={orders_webp}
                  normal={orders_png}
                  alt="orders_png"
                  classpic="Picture-section"
                  classimg="mx-auto w-full h-auto"
                  lazy
                />
              </div>
              <div className="Slide-container" id="Slide-02">
                <section className="Text-section flex-center z-10 w-fit flex-col">
                  <span className="Title-text text-blue">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_02
                        .TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_02
                        .TITLE_02
                    }
                  </span>
                  <span className="Sub-title-text text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_02
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_02
                        .SUB_TITLE_02
                    }
                  </span>
                </section>
                <Picture
                  webp={boxes_webp}
                  normal={boxes_png}
                  alt="boxes_png"
                  classpic="Picture-section"
                  classimg="mx-auto w-full h-auto"
                  lazy
                />
              </div>
              <div className="Slide-container" id="Slide-03">
                <section className="Text-section flex-center z-10 w-fit flex-col">
                  <span className="Title-text text-blue">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_03
                        .TITLE_01
                    }
                  </span>
                  <span className="Sub-title-text text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_03
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_03
                        .SUB_TITLE_02
                    }
                  </span>
                </section>
                <Picture
                  webp={coins_webp}
                  normal={coins_png}
                  alt="coins_png"
                  classpic="Picture-section"
                  classimg="mx-auto w-full h-auto"
                  lazy
                />
              </div>
              <div className="Slide-container" id="Slide-04">
                <section className="Text-section flex-center z-10 w-fit flex-col">
                  <span className="Title-text text-blue">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_01
                        .TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_01
                        .TITLE_02
                    }
                  </span>
                  <span className="Sub-title-text text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_01
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_01
                        .SUB_TITLE_02
                    }
                  </span>
                </section>
                <Picture
                  webp={orders_webp}
                  normal={orders_png}
                  alt="orders_png"
                  classpic="Picture-section"
                  classimg="mx-auto w-full h-auto"
                  lazy
                />
              </div>
              <div className="Slide-container" id="Slide-05">
                <section className="Text-section flex-center z-10 w-fit flex-col">
                  <span className="Title-text text-blue">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_02
                        .TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_02
                        .TITLE_02
                    }
                  </span>
                  <span className="Sub-title-text text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_02
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_02
                        .SUB_TITLE_02
                    }
                  </span>
                </section>
                <Picture
                  webp={boxes_webp}
                  normal={boxes_png}
                  alt="boxes_png"
                  classpic="Picture-section"
                  classimg="mx-auto w-full h-auto"
                  lazy
                />
              </div>
              <div className="Slide-container" id="Slide-06">
                <section className="Text-section flex-center z-10 w-fit flex-col">
                  <span className="Title-text text-blue">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_03
                        .TITLE_01
                    }
                  </span>
                  <span className="Sub-title-text text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_03
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_05.ITEM_SHOW.ITEM_03
                        .SUB_TITLE_02
                    }
                  </span>
                </section>
                <Picture
                  webp={coins_webp}
                  normal={coins_png}
                  alt="coins_png"
                  classpic="Picture-section"
                  classimg="mx-auto w-full h-auto"
                  lazy
                />
              </div>
            </div>
          </div>
        </section>
        {/* //?Page 06 */}
        <section className="Page-section flex-center z-20 h-fit w-full flex-col px-desktop pt-44">
          <section className="Section-container flex-center max-w-1540px gap-24">
            <section className="Column-container h-[400vh] w-1/2 py-20vh maxtablet:h-fit maxtablet:w-full">
              <div
                className="Solution-picture-container sticky top-twenty pt-36 maxtablet:static maxtablet:!flex maxtablet:flex-col maxtablet:gap-12"
                id="Picture-01"
                ref={solution_01PicRef}
              >
                <Picture
                  webp={page_04_solution_01_webp}
                  normal={page_04_solution_01_png}
                  alt="page_04_solution_01_png"
                  classpic="Picture-section"
                  classimg="mx-auto w-fit h-auto z-20"
                  lazy
                />
                <section className="Text-section flex-center z-20 !hidden flex-col gap-4 maxtablet:!flex">
                  <h2 className="Heading-text text-center text-blue">
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_01.TITLE_01}
                  </h2>
                  <h2 className="Sub-heading-text text-center text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_01
                        .SUB_TITLE_01
                    }
                  </h2>
                </section>
              </div>
              <div
                className="Solution-picture-container sticky top-twenty hidden pt-36 maxtablet:static maxtablet:!flex maxtablet:flex-col maxtablet:gap-12"
                id="Picture-02"
                ref={solution_02PicRef}
              >
                <Picture
                  webp={page_04_solution_02_webp}
                  normal={page_04_solution_02_png}
                  alt="page_04_solution_02_png"
                  classpic="Picture-section z-10"
                  classimg="mx-auto w-fit h-auto"
                  lazy
                />
                <section className="Text-section z-20 hidden flex-col items-center justify-center gap-4 maxtablet:!flex">
                  <h2 className="Heading-text text-center text-blue">
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_01}
                    <Br />
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_02}
                    <Br />
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_03}
                  </h2>
                  <h2 className="Sub-heading-text text-center text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                        .SUB_TITLE_02
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                        .SUB_TITLE_03
                    }
                  </h2>
                </section>
              </div>
              <div
                className="Solution-picture-container sticky top-twenty hidden pt-36 maxtablet:static maxtablet:!flex maxtablet:flex-col maxtablet:gap-12 mobile:mx-auto mobile:max-w-[60vw]"
                id="Picture-03"
                ref={solution_03PicRef}
              >
                <Picture
                  webp={page_04_solution_03_webp}
                  normal={page_04_solution_03_png}
                  alt="page_04_solution_03_png"
                  classpic="Picture-section z-10"
                  classimg="mx-auto w-fit h-auto"
                  lazy
                />
                <section className="Text-section z-20 hidden flex-col items-center justify-center gap-4 maxtablet:!block">
                  <h2 className="Heading-text text-center text-blue">
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03.TITLE_01}
                    <Br />
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03.TITLE_02}
                  </h2>
                  <h2 className="Sub-heading-text text-center text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03
                        .SUB_TITLE_02
                    }
                  </h2>
                </section>
              </div>
            </section>
            <section className="Column-container relative h-[400vh] w-1/2 maxtablet:!hidden">
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
                  <h2 className="Heading-text !text-start text-blue">
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_01.TITLE_01}
                  </h2>
                  <h2 className="Sub-heading-text !text-start text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_01
                        .SUB_TITLE_01
                    }
                  </h2>
                </section>
                <section
                  className="Text-section z-20 hidden h-screen flex-col items-center justify-center gap-4"
                  ref={solution_02TextRef}
                >
                  <h2 className="Heading-text !text-start text-blue">
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_01}
                    <Br />
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_02}
                    <Br />
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_03}
                  </h2>
                  <h2 className="Sub-heading-text !text-start text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                        .SUB_TITLE_02
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                        .SUB_TITLE_03
                    }
                  </h2>
                </section>
                <section
                  className="Text-section z-20 hidden h-screen flex-col items-center justify-center gap-4"
                  ref={solution_03TextRef}
                >
                  <h2 className="Heading-text !text-start text-blue">
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03.TITLE_01}
                    <Br />
                    {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03.TITLE_02}
                  </h2>
                  <h2 className="Sub-heading-text !text-start text-orange">
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03
                        .SUB_TITLE_01
                    }
                    <Br />
                    {
                      configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03
                        .SUB_TITLE_02
                    }
                  </h2>
                </section>
              </div>
            </section>
          </section>
        </section>
        {/* //?Page 0x */}
        {/* <section className="Page-section flex h-[100vh] items-end justify-center"> */}
        {/* //?Page Down */}
        {/* <div
            className="Page-controller group h-52 w-screen"
            id="Page-controller-04"
          >
            <button
              className="Next-page h-full w-full !rounded-none !shadow-none transition-all hover:bg-white"
              onClick={() => changeStage("+")}
            ></button>
          </div> */}
        {/* </section> */}
        {/* //?Section Tablet & Mobile */}
        {window.innerWidth <= 1024 && (
          <section className="Hold-scroll-section h-[20vh]"></section>
        )}
      </div>
    </>
  );
}
