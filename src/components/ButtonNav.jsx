import { useState, useEffect } from "react";
export default function ButtonNav({ endRef }) {
  return (
    <section className="Button-top-container flex-center fixed right-8 top-8 z-50 h-10 w-10 rounded-full bg-white">
      <button
        id="Button-top"
        className="Button-nav w-full -scale-y-100 text-xl"
        onClick={(e) => {
          endRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ^
      </button>
    </section>
  );
}
