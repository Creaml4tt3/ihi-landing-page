import { useRef } from "react";
import { UseIntersection } from "../components/UseIntersection";
import { useSpring, animated, easings } from "@react-spring/web";
import ReactPlayer from "react-player";
import Picture from "../components/Picture";
import configJSON from "../config.json";
import {
  icon_line_webp,
  icon_line_png,
  page_02_boiler_webp,
  page_02_boiler_png,
  video_icon_webp,
  video_icon_png,
  page_02_how_webp,
  page_02_factory_webp,
  page_02_how_png,
  page_02_factory_png,
  page_02_bg_png,
  page_02_bg_webp,
  page_02_engine_png,
  page_02_engine_webp,
  page_02_people_png,
  page_02_people_webp,
  page_02_belt_png,
  page_02_belt_webp,
  page_02_line_belt_png,
  page_02_line_belt_webp,
  icon_01_png,
  icon_02_png,
  icon_03_png,
  icon_01_webp,
  icon_02_webp,
  icon_03_webp,
} from "../components/image/Image02";

export default function Section02({ changeStage }) {
  const beltRef = useRef(null);
  const beltIn = UseIntersection(beltRef, "0px");
  const howRef = useRef(null);
  const howIn = UseIntersection(howRef, "0px");
  const columnRef = useRef(null);
  const columnIn = UseIntersection(columnRef, "200%");

  const duration = 1500;
  const delay = 400;
  const pushUpY = 600;
  const videoURL = "https://www.youtube.com/watch?v=rz3PCRa4FEk";
  const previewVideoURL01 = page_02_people_webp;
  const previewVideoURL02 = page_02_people_webp;

  const videoIcon = () => {
    return (
      <Picture
        webp={video_icon_webp}
        normal={video_icon_png}
        alt="video_icon_png"
        classpic="Picture-section"
        classimg=""
        lazy
      />
    );
  };

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

  return (
    <>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap h-full w-full snap-y snap-proximity overflow-y-scroll bg-cream">
        {/* //?Background - Starting */}
        <Picture
          webp={page_02_bg_webp}
          normal={page_02_bg_png}
          alt="page_02_bg_png"
          classpic="Picture-section h-screen w-screen fixed bottom-0 left-0 z-10 mix-blend-multiply pointer-events-none"
          classimg="mx-auto w-full h-auto"
        />
        {/* //?Background - Ending */}
        {/* //?Go to previos Page */}
        <section
          className="Prev-section h-screen w-screen cursor-pointer bg-blue"
          onClick={() => changeStage("-")}
        ></section>
        {/* //?Page 01 */}
        <section className="Page-section z-0 -mt-[100vh] h-fit w-full rounded-t-full bg-cream px-desktop pb-30vh pt-40vh">
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
          <Picture
            webp={page_02_people_webp}
            normal={page_02_people_png}
            alt="page_02_people_png"
            classpic="Picture-section h-fit"
            classimg="mx-auto -mt-10 z-0"
            lazy
          />
        </section>
        {/* //?Page 02 */}
        <section className="Page-section relative h-fit w-full px-desktop pb-50vh">
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
        <section className="Page-section flex-center relative h-fit w-full flex-col px-desktop pb-40vh">
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
            classimg="mx-auto mix-blend-darken mt-8 mb-6"
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
        <section className="Page-section flex-center relative h-fit w-full flex-col px-desktop pb-30vh">
          <div
            className="Belt-container flex w-full max-w-1480px overflow-hidden pl-6"
            ref={beltRef}
          >
            <animated.div className="Belt" id="Belt-01" style={pushUp01}>
              <Picture
                webp={page_02_line_belt_webp}
                normal={page_02_line_belt_png}
                alt="page_02_line_belt_png"
                classpic="Picture-section h-fit w-fit"
                classimg="z-0"
                lazy
              />
              <section className="Text-section">
                <span className="Belt-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_01}
                </span>
                <span className="Belt-text-bold">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_BOLD_01}
                </span>
                <span className="Belt-sub-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_01}
                  <span className="Belt-sub-text-bold !leading-none">
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
            </animated.div>
            <animated.div className="Belt" id="Belt-02" style={pushUp02}>
              <Picture
                webp={page_02_line_belt_webp}
                normal={page_02_line_belt_png}
                alt="page_02_line_belt_png"
                classpic="Picture-section h-fit w-fit"
                classimg="z-0"
                lazy
              />
              <section className="Text-section">
                <span className="Belt-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_02}
                </span>
                <span className="Belt-text-bold">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_BOLD_02}
                </span>
                <span className="Belt-sub-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_02}
                  <span className="Belt-sub-text-bold !leading-none">
                    {
                      configJSON.CONTENT.PAGE_02.SECTION_04
                        .BELT_SUB_TEXT_BOLD_03
                    }
                  </span>
                </span>
              </section>
            </animated.div>
            <animated.div className="Belt" id="Belt-03" style={pushUp03}>
              <Picture
                webp={page_02_line_belt_webp}
                normal={page_02_line_belt_png}
                alt="page_02_line_belt_png"
                classpic="Picture-section h-fit w-fit"
                classimg="z-0"
                lazy
              />
              <section className="Text-section">
                <span className="Belt-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_03}
                </span>
                <span className="Belt-text-bold">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_BOLD_03}
                </span>
                <span className="Belt-sub-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_03}
                  <span className="Belt-sub-text-bold !leading-none">
                    {
                      configJSON.CONTENT.PAGE_02.SECTION_04
                        .BELT_SUB_TEXT_BOLD_04
                    }
                    <br></br>
                  </span>
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_SUB_TEXT_04}
                </span>
              </section>
            </animated.div>
            <animated.div className="Belt" id="Belt-04" style={pushUp04}>
              <Picture
                webp={page_02_line_belt_webp}
                normal={page_02_line_belt_png}
                alt="page_02_line_belt_png"
                classpic="Picture-section h-fit w-fit"
                classimg="z-0"
                lazy
              />
              <section className="Text-section">
                <span className="Belt-text">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_04}
                </span>
                <span className="Belt-text-bold">
                  {configJSON.CONTENT.PAGE_02.SECTION_04.BELT_TEXT_BOLD_04}
                </span>
                <span className="Belt-sub-text">
                  <span className="Belt-sub-text-bold !leading-none">
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
            </animated.div>
          </div>
          <Picture
            webp={page_02_belt_webp}
            normal={page_02_belt_png}
            alt="page_02_belt_png"
            classpic="Picture-section h-fit z-10"
            classimg="mx-auto"
            lazy
          />
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
        <section className="Page-section flex-center relative h-fit w-full flex-col pb-20vh">
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
          <Picture
            webp={page_02_factory_webp}
            normal={page_02_factory_png}
            alt="page_02_factory_png"
            classpic="Picture-section h-fit"
            classimg="mx-auto z-10 -mt-10"
            lazy
          />
        </section>
        {/* //?Page 06 */}
        <section className="Page-section flex-center relative h-fit w-full flex-col px-desktop">
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
                className="Column-line mx-auto mt-6 h-[120px] w-[200px] bg-orange"
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
                className="Column-line mx-auto mt-6 h-[215px] w-[200px] bg-orange"
                style={slideUp02}
              ></animated.div>
            </div>
          </div>
          <div className="Box-container rounded-full border-[3px] border-dashed border-blue bg-white py-3 px-48 shadow-yblue">
            <section className="Text-section">
              <h2 className="Second-text text-center !text-5xl !font-bold !leading-relaxed text-blue">
                {configJSON.CONTENT.PAGE_02.SECTION_06.HEADING_01}
              </h2>
              <h3 className="Sub-second-text text-center text-40px font-medium text-orange">
                {configJSON.CONTENT.PAGE_02.SECTION_06.SUB_HEADING_01}
              </h3>
            </section>
          </div>
          <div className="Video-container w-full max-w-1360px pt-44 pb-48">
            <ReactPlayer
              className="React-player"
              url={videoURL}
              width="100%"
              height="550px"
              light={previewVideoURL01}
              playing="true"
              playIcon={videoIcon()}
            />
          </div>
        </section>
        {/* //?Page 07 */}
        <section className="Page-section flex-center relative h-fit w-full flex-col">
          <div className="Info-container flex-center relative h-fit w-full max-w-1360px pb-8">
            <div className="Info flex-center w-full gap-20 px-desktop">
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
                  classpic="Picture-section h-fit mix-blend-multiply"
                  classimg="z-10"
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
          <div className="Flow-container">
            <div className="Flow-left w-[calc(50%-60px)]"></div>
            <div className="Icon-show-container flex h-full flex-col items-start justify-end gap-8 pl-44">
              <section className="Text-section">
                <h2 className="Second-text font-semi-bold !text-start text-40px leading-snug text-blue">
                  {configJSON.CONTENT.PAGE_02.SECTION_07.HEADING_01}
                </h2>
                <h3 className="Sub-second-text text-start text-4xl font-medium text-orange">
                  {configJSON.CONTENT.PAGE_02.SECTION_07.SUB_HEADING_01}
                </h3>
              </section>
              <div className="Icon-show flex h-fit w-fit items-end gap-11">
                <Picture
                  webp={icon_line_webp}
                  normal={icon_line_png}
                  alt="icon_line_png"
                  classpic="Picture-section h-fit"
                  classimg="mx-auto z-10"
                  lazy
                />
              </div>
            </div>
          </div>
          <div className="Flow-container -mt-[15px]">
            <div className="Flow-right right-0 mx-desktop w-1/2 border-t-[15px] border-r-[15px]"></div>
          </div>
          <div className="Flow-container -mt-[15px] mb-16">
            <div className="Flow-left w-1/2"></div>
            <div className="Flow-right -right-1/2 w-full"></div>
          </div>
          <div className="Icon-card-container flex-center gap-4 pb-20vh">
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
          <div className="Video-container w-full max-w-1360px pt-44 pb-48">
            <ReactPlayer
              className="React-player"
              url={videoURL}
              width="100%"
              height="550px"
              light={previewVideoURL02}
              playing="true"
              playIcon={videoIcon()}
            />
          </div>
        </section>
        {/* //?Page 0x */}
        <section className="Page-section flex items-end justify-center">
          {/* //?Page Up */}
          <div className="Page-controller h-8 w-screen">
            <button
              className="Next-page h-full w-full bg-orange"
              onClick={() => changeStage("-")}
            ></button>
          </div>
          {/* //?Page Down */}
          <div className="Page-controller h-8 w-screen">
            <button
              className="Next-page h-full w-full bg-white"
              onClick={() => changeStage("+")}
            ></button>
          </div>
        </section>
      </div>
      {/* //?Main - Ending */}
    </>
  );
}
