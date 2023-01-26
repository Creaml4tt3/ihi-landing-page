import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Section01 from "./sections/Section01";
import Section02 from "./sections/Section02";

export default function App() {
  //? ตั้งค่าหน้าที่จะแสดงหน้าแรก
  const [sectionStage, setSectionStage] = useState(1);
  const [onLoad, setOnLoad] = useState(true);

  //? ฟังก์ชั่นการเปลี่ยนหน้า
  function sectionStageChange(operation) {
    if (operation === "+") {
      setSectionStage(sectionStage + 1);
    } else if (operation === "-") {
      setSectionStage(sectionStage - 1);
    }
  }

  //? ตอนโหลดเว็บครั้งแรก
  //? ถ้าก่อนออกไม่ได้อยู่ที่หน้าแรกจะทำการดึงหน้าที่เก็บไว้ใน localstorage
  //? เช็คว่าเนื้อหาโหลดเสร็จแล้วจึงเอาหน้าโหลดออก
  useEffect(() => {
    if (localStorage.getItem("currentStage") > 1)
      setSectionStage(parseInt(localStorage.getItem("currentStage")));

    window.addEventListener("load", () => {
      setTimeout(() => {
        setOnLoad(false);
      }, 3000);
    });
  }, []);

  //? ทุกครั้งที่มีการเปลี่ยนหน้าจะทำการเก็บบันทึกเลขหน้าเอาไว้
  useEffect(() => {
    localStorage.setItem("currentStage", sectionStage);
  }, [sectionStage]);

  return (
    <div className="App w-screen h-screen overflow-x-hidden">
      {/* //?Header - Starting */}
      <header className="App-header"></header>
      {/* //?Header - Ending */}

      {onLoad ? (
        <Loading />
      ) : (
        <>
          {sectionStage === 1 && <Section01 changeStage={sectionStageChange} />}
          {sectionStage === 2 && <Section02 changeStage={sectionStageChange} />}
        </>
      )}
    </div>
  );
}
