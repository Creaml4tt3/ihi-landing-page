import page_01_people_webp from "./images/webp/page-01-people.webp";
import page_01_people_png from "./images/png/page-01-people.png";
import page_01_bg_webp from "./images/webp/page-01-bg.webp";
import page_01_bg_png from "./images/png/page-01-bg.png";

export default function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden">
      {/* Header - Starting */}
      <header className="App-header"></header>
      {/* Header - Ending */}

      {/* Main - Starting */}
      <main className="Page-inner-wrap bg-blue w-full h-full snap-mandatory snap-y overflow-y-scroll scroll-padding">
        {/* Page 01 */}
        <section className="Page-section flex relative">
          <picture className="Picture-section w-full absolute bottom-0 z-0 mix-blend-overlay opacity-80">
            <source className="mx-auto" srcSet={page_01_bg_webp} />
            <img
              className="mx-auto"
              src={page_01_bg_png}
              alt="page_01_people_png"
            />
          </picture>
          <picture className="Picture-section w-full mx-auto absolute bottom-0 z-10">
            <source className="mx-auto" srcSet={page_01_people_webp} />
            <img
              className="mx-auto"
              src={page_01_people_png}
              alt="page_01_people_png"
            />
          </picture>
          <section className="Text-section mt-[25vh] flex flex-col gap-4">
            <h1 className="Heading-text text-white">
              “คุณเคยประสบปัญหานี้หรือไม่ ?"
            </h1>
            <h2 className="Sub-heading-text text-orange">
              Have you ever met this problem before?
            </h2>
          </section>
        </section>
        {/* Page 02 */}
        <section className="Page-section"></section>
        {/* Page 03 */}
        <section className="Page-section"></section>
      </main>
      {/* Main - Ending */}
    </div>
  );
}
