import { useLayoutEffect, useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Lottie from "lottie-react";
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
} from "../components/image/Image02";
import belt_webm from "../lotties/webm/belt.webm";
import warehouse_01 from "../lotties/warehouse-01.json";
import warehouse_02 from "../lotties/warehouse-02.json";
export default function Section03({ changeStage }) {
  const videoURL = "https://www.youtube.com/watch?v=rz3PCRa4FEk";
  const previewVideoURL01 = black_webp;
  const solution_01Ref = useRef(null);
  const solution_02Ref = useRef(null);
  const solution_03Ref = useRef(null);
  const solution_01PicRef = useRef(null);
  const solution_02PicRef = useRef(null);
  const solution_03PicRef = useRef(null);
  const solution_01In = UseIntersectionLoop(solution_01Ref, "-20%");
  const solution_02In = UseIntersectionLoop(solution_02Ref, "-20%");
  const solution_03In = UseIntersectionLoop(solution_03Ref, "-20%");
  const solutionRefArr = [
    solution_01PicRef,
    solution_02PicRef,
    solution_03PicRef,
  ];
  let sliders;

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
    changePicture(solution_01PicRef, 1, 200);
  } else if (solution_02In) {
    changePicture(solution_02PicRef, 2, 200);
  } else if (solution_03In) {
    changePicture(solution_03PicRef, 3, 200);
  }

  function scrollAndCheckForNextPage(el) {
    let bodyHeight = document.body.clientHeight;
    let scrolling = el.scrollTop;
    let scrollingHeight = el.scrollHeight;

    console.log("height" + scrollingHeight);
    console.log(scrolling + bodyHeight);

    if (bodyHeight + scrolling >= scrollingHeight) {
      changeStage("+");
    }
  }

  useEffect(() => {
    sliders = document.querySelectorAll(".Slide-container");
    const loop = horizontalLoop(sliders, {
      repeat: -1,
    });

    let pageWrapper = document.querySelector(".Page-inner-wrap");
    pageWrapper.addEventListener("wheel", () => {
      scrollAndCheckForNextPage(pageWrapper);
      scrollUp(pageWrapper);
    });

    let firstScroll = 0;

    function scrollUp(el) {
      let scrolling = el.scrollTop;
      console.log(scrolling);
      if (firstScroll > 2) {
        if (scrolling === 0) {
          changeStage("-");
        }
      }
      firstScroll++;
    }
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

  return (
    <>
      {/* //?Background - Starting */}
      <Picture
        webp={page_04_bg_webp}
        normal={page_04_bg_png}
        alt="page_04_bg_png"
        classpic="Picture-section h-screen w-screen fixed bottom-0 left-0 z-10 mix-blend-multiply pointer-events-none"
        classimg="mx-auto w-full h-auto"
      />
      {/* //?Background - Ending */}
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap z-10 h-screen w-full overflow-y-scroll bg-cream">
        {/* //?Go to previos Page */}
        <section
          className="Prev-section h-screen w-screen cursor-pointer bg-blue"
          onClick={() => changeStage("-")}
        ></section>
        {/* //?Page 01 */}
        <section className="Page-section flex-center z-0 -mt-[100vh] h-screen w-full flex-col rounded-t-full bg-cream px-desktop">
          <section className="Text-section flex-center z-10 flex-col gap-3">
            <span className="Title-text text-center text-40px font-semibold leading-normal text-blue">
              {configJSON.CONTENT.PAGE_04.SECTION_01.TITLE_01}
              <br></br>
              {configJSON.CONTENT.PAGE_04.SECTION_01.TITLE_02}
            </span>
            <span className="Sub-title-text text-center text-4xl font-medium leading-normal text-orange">
              {configJSON.CONTENT.PAGE_04.SECTION_01.SUB_TITLE_01}
              <br></br>
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
            <Video
              url={videoURL}
              preview={previewVideoURL01}
              className="Video"
            />
          </div>
          <div className="Icon-container flex-center mt-5 gap-4">
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
                  <br></br>
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
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_02
                      .ICON_TEXT_02
                  }
                  <br></br>
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
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_03
                      .ICON_TEXT_02
                  }
                  <br></br>
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
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_03.ICON_CARD.ICON_04
                      .ICON_TEXT_02
                  }
                  <br></br>
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
              <br></br>
              {configJSON.CONTENT.PAGE_04.SECTION_04.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text text-center text-orange">
              {configJSON.CONTENT.PAGE_04.SECTION_04.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_04.SECTION_04.SUB_HEADING_02}
            </h2>
          </section>
          <div className="Row-container flex-center flex-col gap-fifthteen">
            <div className="Row">
              <div className="Lottie-section">
                <div className="Lottie-container">
                  <Lottie
                    animationData={warehouse_01}
                    className="Lottie-section z-20 mx-auto w-full"
                    style={{ height: "auto" }}
                    loop={true}
                  />
                </div>
              </div>
              <section className="Text-section z-10 flex w-fit flex-auto flex-col items-start justify-center gap-4">
                <h2 className="Heading-text !w-fit !text-start text-blue">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_01
                      .HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_01
                      .HEADING_02
                  }
                </h2>
                <h2 className="Sub-heading-text z-10 !w-fit !text-start text-orange">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_01
                      .SUB_HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_01
                      .SUB_HEADING_02
                  }
                </h2>
              </section>
            </div>
            <div className="Row">
              <section className="Text-section z-10 flex w-fit flex-col items-start justify-center gap-4">
                <h2 className="Heading-text !w-fit !text-start text-blue">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_02
                      .HEADING_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_02
                      .HEADING_02
                  }
                </h2>
                <h2 className="Sub-heading-text !w-fit !text-start text-orange">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_04.ROW_CONTAINER.ROW_02
                      .SUB_HEADING_01
                  }
                  <br></br>
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
                    className="Lottie-section z-20 mx-auto w-full"
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
            <ReactPlayer
              className="React-player"
              url={belt_webm}
              width="100%"
              height="auto"
              playing
              loop
              muted
            />
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
        <section className="Page-section flex-center z-0 h-fit w-full flex-col px-desktop pt-44">
          <section className="Section-container flex-center max-w-1540px gap-24">
            <section className="Column-container h-[300vh] w-2/5 py-20vh">
              <div
                className="Solution-picture-container sticky top-twenty pt-36"
                id="Picture-01"
                ref={solution_01PicRef}
              >
                <Picture
                  webp={page_04_solution_01_webp}
                  normal={page_04_solution_01_png}
                  alt="page_04_solution_01_png"
                  classpic="Picture-section z-10"
                  classimg="mx-auto w-fit h-auto"
                  lazy
                />
              </div>
              <div
                className="Solution-picture-container sticky top-twenty hidden pt-36"
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
              </div>
              <div
                className="Solution-picture-container sticky top-twenty hidden pt-36"
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
              </div>
            </section>
            <section className="Column-container h-auto w-3/5">
              <section
                className="Text-section flex-center z-20 h-screen flex-col gap-4"
                ref={solution_01Ref}
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
                className="Text-section flex-center z-20 h-screen flex-col gap-4"
                ref={solution_02Ref}
              >
                <h2 className="Heading-text !text-start text-blue">
                  {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_01}
                  <br></br>
                  {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_02}
                  <br></br>
                  {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02.TITLE_03}
                </h2>
                <h2 className="Sub-heading-text !text-start text-orange">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                      .SUB_TITLE_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                      .SUB_TITLE_02
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_02
                      .SUB_TITLE_03
                  }
                </h2>
              </section>
              <section
                className="Text-section flex-center z-20 h-screen flex-col gap-4"
                ref={solution_03Ref}
              >
                <h2 className="Heading-text !text-start text-blue">
                  {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03.TITLE_01}
                  <br></br>
                  {configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03.TITLE_02}
                </h2>
                <h2 className="Sub-heading-text !text-start text-orange">
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03
                      .SUB_TITLE_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_04.SECTION_06.SOLUTION_03
                      .SUB_TITLE_02
                  }
                </h2>
              </section>
            </section>
          </section>
        </section>
        {/* //?Page 0x */}
        <section className="Page-section flex h-[100vh] items-end justify-center">
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
        </section>
      </div>
    </>
  );
}
