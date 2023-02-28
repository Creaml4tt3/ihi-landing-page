import { useRef, useEffect } from "react";
import { UseIntersection } from "../components/UseIntersection";
import { useSpring, animated, easings } from "@react-spring/web";
import Lottie from "lottie-react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ReactPlayer from "react-player";
import Picture from "../components/Picture";
import configJSON from "../config.json";
import {
  page_03_bg_webp,
  page_03_bg_png,
  page_03_men_webp,
  page_03_men_png,
} from "../components/image/Image03";

import epidemic01 from "../lotties/epidemic-01.json";
import epidemic02 from "../lotties/epidemic-02.json";
import epidemic03 from "../lotties/epidemic-03.json";

export default function Section03({ changeStage }) {
  const lineRef = useRef(null);
  const lineIn = UseIntersection(lineRef, "200%");
  const epidemic01Ref = useRef(null);
  const epidemic02Ref = useRef(null);
  const epidemic03Ref = useRef(null);
  const duration = 2000;

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
            <h2 className="Sub-heading-text z-10 !text-[45px] text-orange">
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
          <div className="Column-container flex-center h-fit max-w-1400px">
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
              {configJSON.CONTENT.PAGE_03.SECTION_02.HEADING_02}
            </h2>
            <h2 className="Sub-heading-text z-10 text-[45px] text-orange">
              {configJSON.CONTENT.PAGE_03.SECTION_02.SUB_HEADING_02}
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
        <section className="Page-section flex-center relative h-fit w-full flex-col px-desktop">
          <Player
            autoplay
            loop
            className="Lottie-section absolute left-1/3 mix-blend-lighten"
            speed={0.1}
            lottieRef={epidemic01Ref}
            src={epidemic01}
            style={{ height: 100 }}
          />
          <Player
            autoplay
            loop
            className="Lottie-section absolute left-2/3 mix-blend-lighten"
            speed={0.01}
            lottieRef={epidemic02Ref}
            src={epidemic02}
            style={{ height: 200 }}
          />
          <Player
            autoplay
            loop
            className="Lottie-section absolute right-0 mix-blend-soft-light"
            speed={0.001}
            lottieRef={epidemic03Ref}
            src={epidemic03}
            style={{ height: 300 }}
          />
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
