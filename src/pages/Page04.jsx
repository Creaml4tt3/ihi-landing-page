import Picture from "../components/Picture";
import configJSON from "../config.json";
import { page_04_bg_webp, page_04_bg_png } from "../components/image/Image04";
export default function Section03({ changeStage }) {
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
        <section className="Page-section z-0 -mt-[100vh] h-fit w-full rounded-t-full bg-cream px-desktop pb-30vh pt-40vh">
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
        <section className="Page-section z-0 h-fit w-full bg-cream px-desktop">
          <section className="Text-section flex-center z-10 flex-col">
            <h2 className="Heading-text text-center text-blue">
              {configJSON.CONTENT.PAGE_04.SECTION_02.HEADING_01}
            </h2>
            <h2 className="Sub-heading-text z-10 text-center text-orange">
              {configJSON.CONTENT.PAGE_04.SECTION_02.SUB_HEADING_01}
            </h2>
          </section>
        </section>
      </div>
    </>
  );
}
