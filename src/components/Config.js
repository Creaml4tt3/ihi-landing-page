import { useEffect, useRef, useState } from "react";
import configJSON from "../config.json";
import Picture from "../components/Picture";
import page_01_bg_webp from "../images/webp/page-01-bg.webp";
import page_01_bg_png from "../images/png/page-01-bg.png";
export default function Config() {
  const formatJSON = JSON.stringify(configJSON, undefined, 2);
  const [downloaded, setDownloaded] = useState(false);
  const [editing, setEditing] = useState();
  const jsonCode = useRef(null);

  const downloadJson = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      /* JSON.stringify(configJSON) */ editing
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "config.json";
    link.click();
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  useEffect(() => {
    setEditing(formatJSON);
    jsonCode.current.innerText = formatJSON;
  }, []);

  return (
    <>
      <div className="Page-container flex h-full max-h-screen min-h-screen w-full justify-center overflow-hidden bg-blue p-16">
        <Picture
          webp={page_01_bg_webp}
          normal={page_01_bg_png}
          alt="page_01_people_png"
          classpic="Picture-section h-0 w-screen fixed bottom-0 z-0 mix-blend-overlay opacity-40"
          classimg="mx-auto w-full absolute bottom-0"
        />
        <div className="Json-container flex w-full max-w-[640px] flex-col items-center justify-between rounded-xl bg-black p-12 text-white">
          <pre className="Code-container mb-8 w-full max-w-3xl flex-1 overflow-y-auto">
            <code
              className="Json h-full w-full break-all"
              ref={jsonCode}
              onInput={(e) => {
                setEditing(e.target.innerText);
              }}
              contentEditable
            ></code>
          </pre>
          <section className="Button-container flex gap-4">
            <button
              className="Download-button rounded-full border-2 border-solid border-white bg-orange px-4 py-3 shadow"
              type="button"
              onClick={downloadJson}
            >
              <span className="Download-text text-base font-black">
                DOWNLOAD
              </span>
            </button>
          </section>
        </div>
        {/*        {saved && (
          <section className="Modal-container absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border-2 border-solid border-white bg-blue px-8 py-4">
            <span className="Saved-text font-black text-white">SAVED</span>
          </section>
        )} */}
        {downloaded && (
          <section className="Modal-container absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border-2 border-solid border-white bg-blue px-8 py-4">
            <span className="Saved-text font-black text-white">
              You should have download file now...
            </span>
          </section>
        )}
      </div>
    </>
  );
}
