import page_01_people_webp from "./images/webp/page-01-people.webp";
import page_01_people_png from "./images/png/page-01-people.png";

export default function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden">
      {/* Header - Starting */}
      <header className="App-header"></header>
      {/* Header - Ending */}

      {/* Main - Starting */}
      <main className="Page-inner-wrap bg-blue w-full h-full snap-mandatory snap-y overflow-y-scroll scroll-padding">
        {/* Page 01 */}
        <section className="Page-section flex items-end">
          <picture className="Picture-section w-full mx-auto">
            <source className="mx-auto" srcSet={page_01_people_webp} />
            <img
              className="mx-auto"
              src={page_01_people_png}
              alt="page_01_people_png"
            />
          </picture>
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
