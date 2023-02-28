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
      <span className="Error text-2xl text-orange">
        <i>{error.statusText || error.message}</i>
      </span>
    </div>
  );
}
