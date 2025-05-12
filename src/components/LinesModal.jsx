import { IoIosClose } from "react-icons/io"

export function LinesModal({
  itinerario,
  line,
  setLine,
  isHidden,
  setIsHidden,
}) {
  const hideLineMenu = () => setIsHidden(true)
  const handleClick = (line) => {
    setLine(line)
    hideLineMenu()
  }

  const smallClasses =
    "sm:h-auto sm:w-1/2 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:border-2 sm:border-[#2a2a2a] sm:rounded-lg"

  const lines = itinerario.map(({ linha, nome }, i) => (
    <span
      onClick={() => handleClick(linha)}
      className={`${
        line === linha && "selected"
      } line-button text-xl font-medium py-3 px-4 cursor-pointer rounded-lg`}
      key={i}
    >
      {linha} - {nome}
    </span>
  ))

  return (
    <div
      className={`w-screen h-full fixed top-0 left-[10%] overflow-hidden ${smallClasses} ${
        isHidden && "hidden"
      }`}
    >
      <div className="relative bg-accent-darker h-screen sm:h-auto">
        <CloseModal onClick={hideLineMenu} />
        <div className="flex flex-col p-4 pt-20 gap-2">{lines}</div>
      </div>
    </div>
  )
}

const CloseModal = ({ onClick }) => (
  <button onClick={onClick} className="absolute right-12 sm:right-6 pt-5">
    <IoIosClose size="36" />
  </button>
)
