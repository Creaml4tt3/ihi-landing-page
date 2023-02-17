import page_01_people_webp from "../images/webp/page-01-people.webp";
import page_01_people_png from "../images/png/page-01-people.png";

export default function Section02({ changeStage }) {
  return (
    <>
      {/* //?Main - Starting */}
      <div className="Page-inner-wrap h-full w-full snap-y snap-proximity overflow-y-scroll bg-blue">
        {/* //?Page 01 */}
        <section className="Page-section relative flex">
          <picture className="Picture-section absolute bottom-0 z-10 mx-auto w-full">
            <source className="mx-auto" srcSet={page_01_people_webp} />
            <img
              className="mx-auto"
              src={page_01_people_png}
              alt="page_01_people_png"
            />
          </picture>
          <section className="Text-section z-20 mt-[25vh] flex flex-col gap-4">
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
              <picture className="Picture-section sticky top-[30%] mx-auto w-full">
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
