/* eslint-disable react/prop-types */
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { useSwipeable } from "react-swipeable"

function BottomNavBar({ currentLine, previousLine, nextLine }) {
  const swipes = useSwipeable({
    onSwipedLeft: nextLine,
    onSwipedRight: previousLine,
  })
  return (
    <div
      {...swipes}
      className="fixed bottom-0 w-full md:w-1/3 md:left-1/2 md:-translate-x-1/2"
    >
      <span className="flex justify-between  p-4 bg-custom-green rounded">
        <button className="text-2xl" onClick={previousLine}>
          <IoIosArrowBack />
        </button>
        <p className="font-bold text-lg">
          Linha {currentLine.linha}: {currentLine.nome}
        </p>
        <button className="text-2xl" onClick={nextLine}>
          <IoIosArrowForward />
        </button>
      </span>
    </div>
  )
}

export default BottomNavBar
