import configJSON from "../config.json";
import Picture from "../components/Picture";
import page_01_people_webp from "../images/webp/page-01-people.webp";
import page_01_people_png from "../images/png/page-01-people.png";
import page_01_bg_webp from "../images/webp/page-01-bg.webp";
import page_01_bg_png from "../images/png/page-01-bg.png";

export default function Section01({ changeStage }) {
  return (
    <>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap h-full w-full snap-y snap-proximity overflow-y-scroll bg-blue">
        {/* //?Background - Starting */}
        <Picture
          webp={page_01_bg_webp}
          normal={page_01_bg_png}
          alt="page_01_people_png"
          classpic="Picture-section h-0 w-screen fixed bottom-0 z-0 mix-blend-overlay opacity-40"
          classimg="mx-auto w-full absolute bottom-0"
        />
        {/* //?Background - Ending */}
        {/* //?Page 01 */}
        <section className="Page-section relative flex">
          <Picture
            webp={page_01_people_webp}
            normal={page_01_people_png}
            alt="page_01_people_png"
            classpic="Picture-section w-full mx-auto absolute bottom-0 z-10"
            classimg="mx-auto"
          />
          <section className="Text-section z-20 mt-[25vh] flex flex-col gap-4">
            <h1 className="Heading-text text-white">
              {configJSON.CONTENT.SECTION_01.HEADING_01}
            </h1>
            <h2 className="Sub-heading-text text-orange">
              {configJSON.CONTENT.SECTION_01.SUB_HEADING_01}
            </h2>
          </section>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section relative">
          <Picture
            webp={page_01_people_webp}
            normal={page_01_people_png}
            alt="page_01_people_png"
            classpic="Picture-section w-full mx-auto absolute bottom-0 z-10"
            classimg="mx-auto"
            lazy
          />
        </section>
        {/* //?Page 03 */}
        <section className="Page-section relative flex items-end justify-center">
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
