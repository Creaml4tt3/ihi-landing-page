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
        <section className="Page-section">
          <section className="Section-container flex">
            <section className="Column-container w-1/2">
              <span className="Text text-6xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </section>
            <section className="Column-container w-1/2">
              <picture className="Picture-section w-full mx-auto sticky top-[30%]">
                <source className="mx-auto" srcSet={page_01_people_webp} />
                <img
                  className="mx-auto"
                  src={page_01_people_png}
                  alt="page_01_people_png"
                />
              </picture>
            </section>
          </section>
        </section>
        {/* //?Page 03 */}
        <section className="Page-section flex justify-center items-end">
          {/* //?Page Up */}
          <div className="Page-controller w-screen h-8">
            <button
              className="Next-page w-full bg-orange h-full"
              onClick={() => changeStage("-")}
            ></button>
          </div>
          {/* //?Page Down */}
          <div className="Page-controller w-screen h-8">
            <button
              className="Next-page w-full bg-white h-full"
              onClick={() => changeStage("+")}
            ></button>
          </div>
        </section>
      </div>
      {/* //?Main - Ending */}
    </>
  );
}
