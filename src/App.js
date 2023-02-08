import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { CSSTransition } from "react-transition-group";
import configJSON from "./config.json";
import Loading from "./components/Loading";
import Section01 from "./sections/Section01";
import Section02 from "./sections/Section02";

export default function App() {
  //? ตั้งค่าหน้าที่จะแสดงหน้าแรก
  const [sectionStage, setSectionStage] = useState(
    configJSON.SETTING.FIRST_SECTION
  );
  //? ตั้งค่าว่าจะเอาหน้าโหลดไหม true = โหลด flase = ไม่โหลด
  const [onLoad, setOnLoad] = useState(configJSON.SETTING.LOADING_PAGE);
  const [onFinish, setOnFinish] = useState(false);

  //? ตั้งค่าเวลาในการเปลี่ยนหน้า
  const duration = configJSON.SETTING.DURATION;

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
      setOnLoad(false);
      setTimeout(() => {
        setOnFinish(true);
      }, duration);
    });
  }, []);

  //? ทุกครั้งที่มีการเปลี่ยนหน้าจะทำการเก็บบันทึกเลขหน้าเอาไว้
  useEffect(() => {
    localStorage.setItem("currentStage", sectionStage);
  }, [sectionStage]);

  /*   const styles = useSpring({
    loop: true,
    from: { opacity: "0" },
    to: { opacity: "1" },
    config: { duration: "2000" },
  }); */

  return (
    <>
      <div className="App h-screen w-screen overflow-x-hidden bg-blue">
        {/* //?Header - Starting */}
        <header className="App-header"></header>
        {/* //?Header - Ending */}

        <CSSTransition
          in={onLoad}
          timeout={duration}
          classNames="fade"
          unmountOnExit
        >
          <Loading />
        </CSSTransition>

        {onFinish && (
          <>
            {sectionStage === 1 && (
              <Section01 changeStage={sectionStageChange} />
            )}
            {sectionStage === 2 && (
              <Section02 changeStage={sectionStageChange} />
            )}
          </>
        )}
      </div>
    </>
  );
}
