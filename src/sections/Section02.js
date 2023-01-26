import page_01_people_webp from "../images/webp/page-01-people.webp";
import page_01_people_png from "../images/png/page-01-people.png";

export default function Section02({ changeStage }) {
  return (
    <>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap bg-blue w-full h-full snap-proximity snap-y overflow-y-scroll">
        {/* //?Page 01 */}
        <section className="Page-section flex relative">
          <picture className="Picture-section w-full mx-auto absolute bottom-0 z-10">
            <source className="mx-auto" srcSet={page_01_people_webp} />
            <img
              className="mx-auto"
              src={page_01_people_png}
              alt="page_01_people_png"
            />
          </picture>
          <section className="Text-section mt-[25vh] flex flex-col gap-4 z-20">
            <h1 className="Heading-text text-white">Section02</h1>
            <h2 className="Sub-heading-text text-orange">
              Have you ever met this problem before?
            </h2>
          </section>
        </section>
        {/* //?Page 02 */}
        <section className="Page-section"></section>
        {/* //?Page 03 */}
        <section className="Page-section">
          {/* //?Page Down */}
          <button onClick={() => changeStage("+")}>plus</button>
          {/* //?Page Up */}
          <button onClick={() => changeStage("-")}>minus</button>
        </section>
      </div>
      {/* //?Main - Ending */}
    </>
  );
}
