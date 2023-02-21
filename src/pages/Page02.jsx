import Picture from "../components/Picture";
import configJSON from "../config.json";
import {
  page_02_bg_png,
  page_02_bg_webp,
  page_02_people_png,
  page_02_people_webp,
} from "../components/image/Image02";

export default function Section02({ changeStage }) {
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
        <section className="Page-section z-0 -mt-[100vh] h-full w-full rounded-t-full bg-cream pt-[25vh]">
          <section className="Text-section flex-center z-10 flex-col gap-4">
            <span className="Heading-text text-[90px] font-medium text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_01.HEADING_01}
            </span>
            <h1 className="Heading-text text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_01.HEADING_02}
            </h1>
            <h2 className="Heading-text text-blue">
              {configJSON.CONTENT.PAGE_02.SECTION_01.HEADING_03}
            </h2>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_02.SECTION_01.SUB_HEADING_01}
            </h2>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.PAGE_02.SECTION_01.SUB_HEADING_02}
            </h2>
            <h2 className="Sub-heading-text z-10 text-orange">
              {configJSON.CONTENT.PAGE_02.SECTION_01.SUB_HEADING_03}
            </h2>
          </section>
          <Picture
            webp={page_02_people_webp}
            normal={page_02_people_png}
            alt="page_02_people_png"
            classpic="Picture-section"
            classimg="mx-auto -mt-10 z-0"
            lazy
          />
        </section>
        {/* //?Page 03 */}
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
