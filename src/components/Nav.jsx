export default function Nav({ changeStage }) {
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
    <div className="Nav-container flex-center fixed top-[10vh] left-1/2 z-50 -translate-x-1/2 gap-4">
      {navButton &&
        navButton.map((button) => {
          return (
            <>
              <button
                className="Nav group z-40 bg-white px-4 py-2 shadow-soft transition-all hover:bg-blue"
                onClick={() => changeStage(button.goTo)}
                key={button.id}
              >
                <span className="Nav-text text-lg font-semibold text-blue group-hover:text-white">
                  {button.text}
                </span>
              </button>
            </>
          );
        })}
    </div>
  );
}
