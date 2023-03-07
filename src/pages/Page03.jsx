import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { UseIntersection } from "../components/UseIntersection";
import { useSpring, animated, easings } from "@react-spring/web";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ReactPlayer from "react-player";
import Picture from "../components/Picture";
import configJSON from "../config.json";
import epidemicJSON from "../components/json/epidemic.json";
import {
  page_03_bg_webp,
  page_03_bg_png,
  page_03_men_webp,
  page_03_men_png,
} from "../components/image/Image03";
import { ReactComponent as GraphSVG } from "../images/svg/graph.svg";
import epidemic01 from "../lotties/epidemic-01.json";
import epidemic02 from "../lotties/epidemic-02.json";
import epidemic03 from "../lotties/epidemic-03.json";
import mini_line from "../lotties/mini-line.json";
import help from "../lotties/help.json";

export default function Section03({ changeStage }) {
  const destroyRef = useRef(null);
  const lineRef = useRef(null);
  const epidemicRef = useRef(null);
  const lineIn = UseIntersection(lineRef, "200%");
  const epidemicIn = UseIntersection(epidemicRef, "0px");
  const duration = 2000;
  const counterDuration = 2.5;

  const epidemicImport = [epidemic01, epidemic02, epidemic03];

  const slideRight01 = useSpring({
    config: { duration: duration * 1.25, easing: easings.easeInOutCubic },
    to: { x: lineIn ? "0%" : "-50%" },
    delay: duration * 1,
  });
  const slideRight02 = useSpring({
    config: { duration: duration * 0.5, easing: easings.easeInOutCubic },
    to: { x: lineIn ? "0%" : "-50%" },
    delay: duration * 1,
  });
  const slideRight03 = useSpring({
    config: { duration: duration * 1, easing: easings.easeInOutCubic },
    to: { x: lineIn ? "0%" : "-50%" },
    delay: duration * 0.5,
  });
  const slideRight04 = useSpring({
    config: { duration: duration * 0.5, easing: easings.easeInOutCubic },
    to: { x: lineIn ? "0%" : "-50%" },
    delay: duration * 0.5,
  });
  const slideRight05 = useSpring({
    config: { duration: duration * 1, easing: easings.easeInOutCubic },
    to: { x: lineIn ? "0%" : "-50%" },
  });

  const epidemic = epidemicJSON.map((el, index) => {
    let currentID = `Epidemic-content-${index}`;
    return (
      <Epidemic
        src={epidemicImport[el.src]}
        size={el.size}
        speed={el.speed}
        y={el.y}
        x={el.x}
        id={currentID}
      />
    );
  });

  const graphLine = [
    {
      id: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_01,
      width: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_01,
      animation: slideRight01,
    },
    {
      id: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_02,
      width: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_02,
      animation: slideRight02,
    },
    {
      id: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_03,
      width: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_03,
      animation: slideRight03,
    },
    {
      id: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_04,
      width: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_04,
      animation: slideRight04,
    },
    {
      id: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_05,
      width: configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.LINE_05,
      animation: slideRight05,
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      for (let i = 1; i <= epidemicJSON.length; i++) {
        gsap.to(`#Epidemic-content-${i - 1}`, {
          scale: "+=1",
          duration: 2,
          ease: "elastic",
          delay: 0.4 * i,
        });
      }
    }, epidemicRef);

    return () => ctx.revert();
  }, [epidemicIn]);

  function Epidemic({ src, size, speed, y, x, id }) {
    let softLight = false;
    let brightness = false;

    if (src === epidemic03) {
      softLight = true;
      brightness = true;
    }
    return (
      <Player
        autoplay
        loop
        speed={speed ? speed : 1}
        src={src}
        style={{
          height: size,
          transform: `translate(${x ? x : 0}vw,${y ? y : 0}vh) scale(0,0)`,
          mixBlendMode: `${softLight ? "soft-light" : "lighten"}`,
          filter: `brightness(${brightness ? 0 : 1})`,
        }}
        id={id}
        className="Epidemic-section Lottie-section absolute top-0 left-0 z-0"
      />
    );
  }

  let countStart = false;

  if (epidemicIn) {
    countStart = true;
  }

  function turnStrToNumber(value) {
    let newValue = value.split(",").join("");
    return Number(newValue);
  }

  return (
    <>
      <div
        className="Page-sub-background pointer-events-none absolute top-0 left-0 z-0 h-screen w-screen -translate-y-full bg-cream transition-all"
        ref={destroyRef}
      ></div>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap z-10 h-screen w-full overflow-y-scroll bg-blue">
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
        <section className="Page-section z-0 -mt-[100vh] h-fit w-full rounded-t-full bg-blue px-desktop pb-30vh pt-25vh">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            <Lottie
              animationData={help}
              loop
              autoPlay
              height={"auto"}
              className="Lottie z-20"
            />
            <h1 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_01.HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_01.HEADING_02}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_01.HEADING_03}
            </h1>
            <h2 className="Sub-heading-text z-10 !text-[45px] text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_01.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_01.SUB_HEADING_02}
            </h2>
          </section>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section flex-center h-fit w-full flex-col px-desktop">
          <section className="Text-section flex-center z-10 flex-col ">
            <h2 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_02.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_02.SUB_HEADING_01}
            </h2>
          </section>
          <div className="Column-container flex-center h-fit w-full max-w-1400px">
            <div className="Column-Text flex h-fit w-3/5 flex-col items-start gap-52">
              <div className="Column-inside" id="Column-inside-01">
                <section className="Text-section">
                  <span className="Upper-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .UPPER_TEXT
                    }
                  </span>
                  <h2 className="Title-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .TITLE_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .TITLE_TEXT_02
                    }
                  </h2>
                  <span className="Description-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .DESCRIPTION_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .DESCRIPTION_TEXT_02
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .DESCRIPTION_TEXT_03
                    }
                  </span>
                  <span className="Sub-description-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .SUB_DESCRIPTION_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .SUB_DESCRIPTION_TEXT_02
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .SUB_DESCRIPTION_TEXT_03
                    }
                  </span>
                </section>
              </div>
              <div className="Column-inside" id="Column-inside-02">
                <section className="Text-section">
                  <span className="Upper-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_02
                        .UPPER_TEXT
                    }
                  </span>
                  <h2 className="Title-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_02
                        .TITLE_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_02
                        .TITLE_TEXT_02
                    }
                  </h2>
                  <span className="Description-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_02
                        .DESCRIPTION_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_02
                        .DESCRIPTION_TEXT_02
                    }
                  </span>
                  <span className="Sub-description-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_02
                        .SUB_DESCRIPTION_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_02
                        .SUB_DESCRIPTION_TEXT_02
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_02
                        .SUB_DESCRIPTION_TEXT_03
                    }
                  </span>
                </section>
              </div>
              <div className="Column-inside" id="Column-inside-03">
                {" "}
                <section className="Text-section">
                  <span className="Upper-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_03
                        .UPPER_TEXT
                    }
                  </span>
                  <h2 className="Title-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_03
                        .TITLE_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_03
                        .TITLE_TEXT_02
                    }
                  </h2>
                  <span className="Description-text">
                    <ul className="List-container">
                      <li className="List-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_03.DESCRIPTION_TEXT_01
                          }
                        </span>
                      </li>
                      <li className="List-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_03.DESCRIPTION_TEXT_02
                          }
                        </span>
                      </li>
                      <li className="List-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_03.DESCRIPTION_TEXT_03
                          }
                        </span>
                      </li>
                    </ul>
                  </span>
                  <span className="Sub-description-text">
                    <ul className="Sub-list-container">
                      <li className="Sub-list-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_01.SUB_DESCRIPTION_TEXT_01
                          }
                        </span>
                      </li>
                      <li className="Sub-list-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_01.SUB_DESCRIPTION_TEXT_02
                          }
                        </span>
                      </li>
                      <li className="Sub-list-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_01.SUB_DESCRIPTION_TEXT_03
                          }
                        </span>
                      </li>
                    </ul>
                  </span>
                </section>
              </div>
              <div className="Column-inside" id="Column-inside-04">
                <section className="Text-section">
                  <span className="Upper-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_04
                        .UPPER_TEXT
                    }
                  </span>
                  <h2 className="Title-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_04
                        .TITLE_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_04
                        .TITLE_TEXT_02
                    }
                  </h2>
                  <span className="Description-text">
                    <ul className="List-container">
                      <li className="List-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_04.DESCRIPTION_TEXT_01
                          }
                        </span>
                      </li>
                      <li className="List-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_04.DESCRIPTION_TEXT_02
                          }
                        </span>
                      </li>
                    </ul>
                  </span>
                  <span className="Sub-description-text">
                    <ul className="Sub-list-container">
                      <li className="Sub-list-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_04.SUB_DESCRIPTION_TEXT_01
                          }
                        </span>
                      </li>
                      <li className="Sub-list-text">
                        <span className="Base-text">
                          {
                            configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW
                              .TEXT_04.SUB_DESCRIPTION_TEXT_02
                          }
                        </span>
                      </li>
                    </ul>
                  </span>
                </section>
              </div>
              <div className="Column-inside" id="Column-inside-05">
                {" "}
                <section className="Text-section">
                  <span className="Upper-text">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_01
                        .UPPER_TEXT
                    }
                  </span>
                  <h2 className="Title-text !text-5xl !leading-snug">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_05
                        .TITLE_TEXT_01
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_05
                        .TITLE_TEXT_02
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_05
                        .TITLE_TEXT_03
                    }
                  </h2>
                  <h2 className="Title-text !text-5xl !leading-[1.1em] tracking-tight">
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_05
                        .TITLE_TEXT_04
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_05
                        .TITLE_TEXT_05
                    }
                    <br></br>
                    {
                      configJSON.CONTENT.PAGE_03.SECTION_02.TEXT_SHOW.TEXT_05
                        .TITLE_TEXT_06
                    }
                  </h2>
                </section>
              </div>
            </div>
            <div className="Column flex h-fit w-2/5 flex-col items-start justify-center"></div>
          </div>
          <div className="Link-container mt-28 flex justify-center">
            <a
              href={configJSON.CONTENT.PAGE_03.SECTION_02.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              {configJSON.CONTENT.PAGE_03.SECTION_02.LINK_01}
            </a>
          </div>
          <section className="Text-section flex-center z-10 mt-36 mb-72 flex-col">
            <h2 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_02.HEADING_02}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_02.HEADING_03}
            </h2>
            <h2 className="Sub-heading-text z-10 text-[45px] text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_02.SUB_HEADING_02}
            </h2>
          </section>
        </section>
        {/* //?Page 03 */}
        <section className="Page-section flex-center h-fit w-full flex-col px-desktop">
          <section className="Text-section flex-center z-10 flex-col">
            <h2 className="Heading-text text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_03.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text z-10 text-[45px] text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_03.SUB_HEADING_01}
            </h2>
          </section>
          <div
            className="Graph-side-container mt-16 flex w-full max-w-1400px"
            ref={lineRef}
          >
            <div className="Graph-side-content flex w-[18%] flex-col">
              <div className="Text-column flex flex-col items-start justify-between gap-6 pt-2">
                <div className="Text">
                  <span className="Base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.TEXT_01}
                  </span>
                  <span className="Sub-base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.SUB_TEXT_01}
                  </span>
                </div>
                <div className="Text">
                  <span className="Base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.TEXT_02}
                  </span>
                  <span className="Sub-base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.SUB_TEXT_02}
                  </span>
                </div>
                <div className="Text">
                  <span className="Base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.TEXT_03}
                  </span>
                  <span className="Sub-base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.SUB_TEXT_03}
                  </span>
                </div>
                <div className="Text">
                  <span className="Base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.TEXT_04}
                  </span>
                  <span className="Sub-base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.SUB_TEXT_04}
                  </span>
                </div>
                <div className="Text">
                  <span className="Base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.TEXT_05}
                  </span>
                  <span className="Sub-base">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.SUB_TEXT_05}
                  </span>
                </div>
              </div>
            </div>
            <div className="Graph-side-content relative w-[82%]">
              <div className="Graph-side flex flex-col items-end gap-9 text-3xl font-semibold">
                <div className="Graph-column-container absolute top-0 left-0 z-20 w-full flex-col">
                  <div className="Graph-column flex flex-col gap-6 overflow-hidden">
                    {graphLine &&
                      graphLine.map((line) => {
                        return (
                          <animated.div
                            className="Line-container flex w-full items-center justify-start gap-3"
                            key={line.id}
                            style={line.animation}
                          >
                            <div
                              className="Line h-16 bg-orange"
                              style={{ width: line.width + "%" }}
                            ></div>
                            <div className="Line-Text al text-base font-semibold text-orange">
                              {line.id}
                            </div>
                          </animated.div>
                        );
                      })}
                  </div>
                </div>
                <div className="Title-column flex flex-col items-end text-3xl font-semibold">
                  <span className="Title text-white">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.HEADING_01}
                  </span>
                  <span className="Sub-title text-3xl font-medium text-orange">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.SUB_HEADING_01}
                  </span>
                </div>
                <Picture
                  webp={page_03_men_webp}
                  normal={page_03_men_png}
                  alt="page_03_men_png"
                  classpic="Picture-section z-10"
                  classimg="mx-auto w-full h-auto"
                />
                <div className="Measure-container flex w-full justify-between">
                  <span className="Percent">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.PERCENT_01}
                  </span>
                  <span className="Percent">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.PERCENT_02}
                  </span>
                  <span className="Percent">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.PERCENT_03}
                  </span>
                  <span className="Percent">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.PERCENT_04}
                  </span>
                  <span className="Percent">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.PERCENT_05}
                  </span>
                  <span className="Percent">
                    {configJSON.CONTENT.PAGE_03.SECTION_03.GRAPH.PERCENT_06}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="Link-container mt-8 flex justify-center">
            <a
              href={configJSON.CONTENT.PAGE_03.SECTION_03.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              {configJSON.CONTENT.PAGE_03.SECTION_03.LINK_01}
            </a>
          </div>
        </section>
        {/* //?Page 04 */}
        <section className="Page-section flex-center mt-48 mb-60 h-fit w-full flex-col px-desktop">
          <section className="Text-section flex-center z-10 flex-col">
            <h3 className="Title-text text-center text-40px text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_04.TITLE_01}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_04.TITLE_02}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_04.TITLE_03}
            </h3>
            <span className="Sub-title-text z-10 text-center text-[30px] text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_04.SUB_TITLE_01}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_04.SUB_TITLE_02}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_04.SUB_TITLE_03}
            </span>
          </section>
          <div className="Link-container mt-8 flex justify-center">
            <a
              href={configJSON.CONTENT.PAGE_03.SECTION_04.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              {configJSON.CONTENT.PAGE_03.SECTION_04.LINK_01}
            </a>
          </div>
        </section>
        {/* //?Page 05 */}
        <section
          className="Page-section flex-center relative h-fit w-full flex-col px-desktop"
          ref={epidemicRef}
        >
          <section className="Text-section flex-center z-10 flex-col">
            <span className="Title-text text-center text-40px font-semibold text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_05.TITLE_01}
            </span>
            <span className="Sub-title-text z-10 text-center text-4xl font-medium text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_05.SUB_TITLE_01}
            </span>
            <h2 className="Heading-text text-center !leading-loose text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_05.HEADING_01}
              <span className="Sub-heading-text ml-5 text-center text-orange">
                {configJSON.CONTENT.PAGE_03.SECTION_05.SUB_HEADING_01}
              </span>
            </h2>
          </section>
          <section className="Grid-container mt-20 mb-72 grid w-full max-w-1300px grid-cols-3 gap-y-14 gap-x-20">
            <div className="Grid-content" id="Grid-01">
              <div className="Upper">
                <span className="Upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_01
                      .UPPER_TEXT
                  }
                </span>
                <span className="Sub-upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_01
                      .SUB_UPPER_TEXT
                  }
                </span>
              </div>
              <span className="Number-text">
                {countStart && (
                  <CountUp
                    end={turnStrToNumber(
                      configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_01.NUMBER
                    )}
                    duration={counterDuration}
                    separator=","
                  />
                )}
              </span>
              <div className="Lower">
                <span className="Lower-text ">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_01
                      .LOWER_TEXT
                  }
                </span>
                <span className="Sub-lower-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_01
                      .SUB_LOWER_TEXT
                  }
                </span>
              </div>
            </div>
            <div className="Grid-content" id="Grid-02">
              <div className="Upper">
                <span className="Upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_02
                      .UPPER_TEXT
                  }
                </span>
                <span className="Sub-upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_02
                      .SUB_UPPER_TEXT
                  }
                </span>
              </div>
              <span className="Number-text">
                {countStart && (
                  <CountUp
                    end={turnStrToNumber(
                      configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_02.NUMBER
                    )}
                    duration={counterDuration}
                    separator=","
                  />
                )}
              </span>
              <div className="Lower">
                <span className="Lower-text ">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_02
                      .LOWER_TEXT
                  }
                </span>
                <span className="Sub-lower-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_02
                      .SUB_LOWER_TEXT
                  }
                </span>
              </div>
            </div>
            <div className="Grid-content" id="Grid-03">
              <div className="Upper">
                <span className="Upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_03
                      .UPPER_TEXT
                  }
                </span>
                <span className="Sub-upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_03
                      .SUB_UPPER_TEXT
                  }
                </span>
              </div>
              <Lottie
                animationData={mini_line}
                loop
                autoPlay
                height={45}
                className="Icon-lottie"
              />
              <div className="Lower">
                <span className="Lower-text ">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_03
                      .LOWER_TEXT
                  }
                </span>
                <span className="Sub-lower-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_03
                      .SUB_LOWER_TEXT
                  }
                </span>
              </div>
            </div>
            <div className="Grid-content" id="Grid-04">
              <div className="Upper">
                <span className="Upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_04
                      .UPPER_TEXT
                  }
                </span>
                <span className="Sub-upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_04
                      .SUB_UPPER_TEXT_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_04
                      .SUB_UPPER_TEXT_02
                  }
                </span>
              </div>
              <span className="Number-text">
                {countStart && (
                  <CountUp
                    end={turnStrToNumber(
                      configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_04.NUMBER
                    )}
                    duration={counterDuration}
                    separator=","
                  />
                )}
              </span>
            </div>
            <div className="Grid-content" id="Grid-05">
              <div className="Upper">
                <span className="Upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_05
                      .UPPER_TEXT
                  }
                </span>
                <span className="Sub-upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_05
                      .SUB_UPPER_TEXT_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_05
                      .SUB_UPPER_TEXT_02
                  }
                </span>
              </div>
              <span className="Number-text">
                {configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_05.NUMBER}
              </span>
              <div className="Lower">
                <span className="Lower-text ">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_05
                      .LOWER_TEXT
                  }
                </span>
                <span className="Sub-lower-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_05
                      .SUB_LOWER_TEXT
                  }
                </span>
              </div>
            </div>
            <div className="Grid-content" id="Grid-06">
              <div className="Upper">
                <span className="Upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_06
                      .UPPER_TEXT
                  }
                </span>
                <span className="Sub-upper-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_06
                      .SUB_UPPER_TEXT_01
                  }
                  <br></br>
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_06
                      .SUB_UPPER_TEXT_02
                  }
                </span>
              </div>
              <span className="Number-text">
                {countStart && (
                  <CountUp
                    end={turnStrToNumber(
                      configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_06.NUMBER
                    )}
                    duration={counterDuration}
                    separator=","
                  />
                )}
              </span>
              <div className="Lower">
                <span className="Lower-text ">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_06
                      .LOWER_TEXT
                  }
                </span>
                <span className="Sub-lower-text">
                  {
                    configJSON.CONTENT.PAGE_03.SECTION_05.GRID.GIRD_06
                      .SUB_LOWER_TEXT
                  }
                </span>
              </div>
            </div>
          </section>
          {epidemic}
          <div className="Link-container mb-32 flex justify-center">
            <a
              href={configJSON.CONTENT.PAGE_03.SECTION_05.LINK_01}
              className="Link"
              target="_blank"
              rel="noreferrer"
            >
              {configJSON.CONTENT.PAGE_03.SECTION_05.LINK_01}
            </a>
          </div>
        </section>
        {/* //?Page 06 */}
        <section className="Page-section flex-center relative h-fit w-full flex-col px-desktop">
          <section className="Text-section flex-center z-10 flex-col">
            <h2 className="Heading-text text-center text-white">
              {configJSON.CONTENT.PAGE_03.SECTION_06.HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_06.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text z-10 text-center  text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_06.SUB_HEADING_01}
              <br></br>
              {configJSON.CONTENT.PAGE_03.SECTION_06.SUB_HEADING_02}
            </h2>
          </section>
        </section>
        {/* //?Page Down */}
        <div className="Page-controller flex-center mt-10 mb-52">
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
