export default function NavDot({ changeStage, currentStage }) {
  const navButton = [
    {
      id: 1,
      goTo: 1,
      text: "หน้าแรก",
    },
    {
      id: 2,
      goTo: 2,
      text: "ปัญหา",
    },
    {
      id: 3,
      goTo: 3,
      text: "ลดลง",
    },
    {
      id: 4,
      goTo: 4,
      text: "นวัตกรรม",
    },
    {
      id: 5,
      goTo: 5,
      text: "โลกน่าอยู่",
    },
  ];
  return (
    <div className="Nav-container fixed top-1/2 left-[2vw] z-50 flex -translate-y-1/2 flex-col items-center gap-4">
      {navButton &&
        navButton.map((button) => {
          let currentActive = false;
          if (button.id === currentStage) {
            currentActive = true;
          }
          return (
            <div
              className="Nav-button flex-center group relative h-4 w-full"
              key={button.id}
            >
              <button
                className="Nav z-40 h-[6px] w-[6px] rounded-full bg-white mix-blend-multiply shadow-outline transition-all group-hover:h-[10px] group-hover:w-[10px]"
                onClick={() => changeStage(button.goTo)}
                style={currentActive ? { width: 10, height: 10 } : {}}
              ></button>
              <span className="Nav-text pointer-events-none absolute left-8 -top-1/2 min-w-max rounded-full bg-white px-3 py-1 text-lg font-semibold text-blue opacity-0 transition-all group-hover:opacity-100">
                {button.text}
              </span>
            </div>
          );
        })}
    </div>
  );
}
