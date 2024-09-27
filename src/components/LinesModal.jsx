import { IoIosClose } from "react-icons/io"

function LinesModal({ itinerario, line, setLine, isHidden, setIsHidden }) {
  const hideLineMenu = () => setIsHidden(true)
  const handleClick = (line) => {
    setLine(line)
    hideLineMenu()
  }
  const smallClasses =
    "sm:h-auto sm:w-1/2 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:border-2 sm:border-custom-green/80 sm:rounded-md"
  return (
    <div
      className={`${
        isHidden ? "hidden" : null
      } w-screen h-full fixed top-0 left-[10%] overflow-y-scroll ${smallClasses} `}
    >
      <div className="relative bg-white h-screen sm:h-auto">
        <button
          onClick={hideLineMenu}
          className="absolute right-12 sm:right-6 pt-5"
        >
          <IoIosClose size="36" />
        </button>
        <div className="flex flex-col p-4 pt-20 gap-2">
          {itinerario.map(({ linha, nome }, i) => (
            <span
              onClick={() => handleClick(linha)}
              className={`${
                line === linha ? "selected" : null
              } line-button text-xl font-semibold py-3 px-4 cursor-pointer rounded`}
              key={i}
            >
              {linha} - {nome}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LinesModal
