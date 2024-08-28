import { useState } from "react"
import { IoIosClose } from "react-icons/io"

/* eslint-disable react/prop-types */
function LinesModal({ itinerario, setLine, isHidden, setIsHidden }) {
  const [selected, isSelected] = useState(1)

  const hideLineMenu = () => setIsHidden(true)
  const handleClick = (line) => {
    setLine(line)
    isSelected(line)
    hideLineMenu()
  }
  return (
    <div
      className={`${
        isHidden ? "hidden" : null
      } h-full overflow-y-scroll fixed top-0 left-[10%] w-full`}
    >
      <div className="relative bg-black">
        <button onClick={hideLineMenu} className="absolute right-12 pt-5">
          <IoIosClose size="36" />
        </button>
        <div className="flex flex-col p-4 pt-20 gap-2">
          {itinerario.map((item) => (
            <span
              onClick={() => handleClick(item.linha)}
              className={`${
                selected === item.linha ? "selected" : null
              } line-button text-xl font-semibold py-3 px-4`}
              key={crypto.randomUUID()}
            >
              {item.linha} - {item.nome}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LinesModal
