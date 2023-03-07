export default function ButtonNav() {
  return (
    <>
      <section className="Button-top-container flex-center fixed right-8 top-8 z-50 h-10 w-10 rounded-full bg-white">
        <button
          id="Button-top"
          className="Button-nav w-full -scale-y-100 text-xl shadow-soft"
        >
          ^
        </button>
      </section>
      <section className="Button-top-container flex-center fixed right-8 bottom-8 z-50 h-10 w-10 rounded-full bg-white shadow-soft">
        <button id="Button-top" className="Button-nav w-full0 text-xl">
          ^
        </button>
      </section>
    </>
  );
}
