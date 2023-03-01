import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="Error-page"
      className="Error-page flex-center h-screen w-screen flex-col gap-4 overflow-hidden bg-blue"
    >
      <h1 className="Error-heading text-5xl text-white">เกิดข้อผิดพลาดขึ้น</h1>
      <span className="Error-sub-heading text-4xl text-white">
        ขอโทษสำหรับปัญหาที่เกิดขึ้น
      </span>
      <pre className="Error flex-center rounded-lg bg-navy p-4">
        <code className="text-2xl text-orange">
          {error.statusText || error.message}
        </code>
      </pre>
      {/* //?Page Down */}
      <div className="Page-controller flex-center mb-24 mt-10">
        <a href="/" className="Link" rel="noreferrer">
          <button
            className="Home-page group/button bg-white py-5 px-8 transition-all hover:bg-blue"
            id="Home"
          >
            <span className="Text-Button text-xl font-semibold text-blue transition-all group-hover/button:text-white">
              กลับสู่หน้าหลัก
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
