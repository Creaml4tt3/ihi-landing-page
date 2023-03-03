import Picture from "../components/Picture";
import Video from "../components/Video";
import configJSON from "../config.json";
import {
  page_04_bg_webp,
  page_04_bg_png,
  asrs_png,
  asrs_webp,
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
export default function Section03({ changeStage }) {
  const videoURL = "https://www.youtube.com/watch?v=rz3PCRa4FEk";
  const previewVideoURL01 = black_webp;
  return (
    <>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap z-10 h-screen w-full overflow-y-scroll bg-cream">
        {/* //?Background - Starting */}
        <Picture
          webp={page_04_bg_webp}
          normal={page_04_bg_png}
          alt="page_04_bg_png"
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
        <section className="Page-section flex-center z-0 -mt-[100vh] h-screen w-full flex-col rounded-t-full bg-cream px-desktop">
          <section className="Text-section flex-center z-10 flex-col gap-3">
            <span className="Title-text text-center text-40px font-semibold text-blue">
              {configJSON.CONTENT.PAGE_04.SECTION_01.TITLE_01}
              <br></br>
              {configJSON.CONTENT.PAGE_04.SECTION_01.TITLE_02}
            </span>
            <span className="Sub-title-text z-10 text-center text-4xl font-medium text-orange">
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
            <h2 className="Sub-heading-text z-10 text-center text-orange">
              {configJSON.CONTENT.PAGE_04.SECTION_02.SUB_HEADING_01}
            </h2>
          </section>
          <Picture
            webp={asrs_webp}
            normal={asrs_png}
            alt="asrs_png"
            classpic="Picture-section z-10"
            classimg="mx-auto w-full h-auto mb-11 mt-5"
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
          {/* //?Page 04 */}
          <section className="Page-section flex-center z-0 h-fit w-full flex-col px-desktop">
            <section className="Text-section flex-center z-10 flex-col py-25vh">
              <h2 className="Heading-text text-center text-blue">
                {configJSON.CONTENT.PAGE_04.SECTION_04.HEADING_01}
                <br></br>
                {configJSON.CONTENT.PAGE_04.SECTION_04.HEADING_02}
              </h2>
              <h2 className="Sub-heading-text z-10 text-center text-orange">
                {configJSON.CONTENT.PAGE_04.SECTION_04.SUB_HEADING_01}
                <br></br>
                {configJSON.CONTENT.PAGE_04.SECTION_04.SUB_HEADING_02}
              </h2>
            </section>
            <div className="Row-container flex-center flex-col gap-fifthteen">
              <div className="Row">
                <div className="Lottie-section"></div>
                <section className="Text-section z-10 flex flex-auto flex-col items-start">
                  <h2 className="Heading-text !text-start text-blue">
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
                  <h2 className="Sub-heading-text z-10 !text-start text-orange">
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
                <section className="Text-section z-10 flex flex-auto flex-col items-start">
                  <h2 className="Heading-text !text-start text-blue">
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
                  <h2 className="Sub-heading-text z-10 !text-start text-orange">
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
                <div className="Lottie-section"></div>
              </div>
            </div>
          </section>
          {/* //?Page 05 */}
          <section className="Page-section flex-center z-0 h-fit w-full flex-col px-desktop pt-25vh"></section>
        </section>
      </div>
    </>
  );
}
