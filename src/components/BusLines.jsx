import { BusLineColumn } from "./BusLineColumn"
import {
  LuMinus,
  LuChevronLeftCircle,
  LuChevronRightCircle,
} from "react-icons/lu"
import { useSwipeable } from "react-swipeable"

export function BusLines({
  linha,
  nome,
  horarios,
  previousLine,
  nextLine,
  openModal,
}) {
  const { dias_uteis, sabados, domingos } = horarios

  const swipeable = useSwipeable({
    onSwipedLeft: nextLine,
    onSwipedRight: previousLine,
  })

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <span className="w-full sm:w-auto flex justify-around items-center gap-4">
        <PreviousLine onClick={previousLine} />
        <BusLinesModal onClick={openModal} line={linha} name={nome} />
        <NextLine onClick={nextLine} />
      </span>

      <span {...swipeable} className="flex gap-6">
        <BusLineColumn title="Dias Úteis" day={dias_uteis} />
        <BusLineColumn title="Sábados" day={sabados} />
        {domingos && <BusLineColumn title="Domingos" day={domingos} />}
      </span>
    </div>
  )
}

const PreviousLine = ({ onClick }) => (
  <button className="text-2xl" onClick={onClick}>
    <LuChevronLeftCircle />
  </button>
)

const BusLinesModal = ({ onClick, line, name }) => (
  <button onClick={onClick} className="sm:w-96">
    <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
      <span className="text-accent">{line}</span> <LuMinus /> {name}
    </h2>
  </button>
)

const NextLine = ({ onClick }) => (
  <button className="text-2xl" onClick={onClick}>
    <LuChevronRightCircle />
  </button>
)
