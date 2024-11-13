import { BusLineColumn } from "./BusLineColumn"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
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
      <span className="w-full sm:w-auto flex justify-between items-center gap-4">
        <PreviousLine onClick={previousLine} />
        <OpenModal onClick={openModal} line={linha} name={nome} />
        <NextLine onClick={nextLine} />
      </span>

      <span {...swipeable} className="flex gap-4">
        <BusLineColumn title="Dias Úteis" day={dias_uteis} />
        <BusLineColumn title="Sábados" day={sabados} />
        {domingos && <BusLineColumn title="Domingos" day={domingos} />}
      </span>
    </div>
  )
}

const PreviousLine = ({ onClick }) => (
  <button className="text-2xl" onClick={onClick}>
    <IoIosArrowBack />
  </button>
)

const OpenModal = ({ onClick, line, name }) => (
  <button onClick={onClick} className=" sm:w-96 text-center">
    <h2 className="text-xl sm:text-2xl font-bold">
      Linha {line}: {name}
    </h2>
  </button>
)

const NextLine = ({ onClick }) => (
  <button className="text-2xl" onClick={onClick}>
    <IoIosArrowForward />
  </button>
)
