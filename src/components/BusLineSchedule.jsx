import TimetableList from "./TimetableList"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { useSwipeable } from "react-swipeable"

function BusLineSchedule({
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
        <button className="text-2xl" onClick={previousLine}>
          <IoIosArrowBack />
        </button>

        <button onClick={openModal} className=" sm:w-96 text-center">
          <h2 className="text-xl sm:text-2xl font-bold">
            Linha {linha}: {nome}
          </h2>
        </button>

        <button className="text-2xl" onClick={nextLine}>
          <IoIosArrowForward />
        </button>
      </span>

      <span {...swipeable} className="flex gap-4">
        <TimetableList title="Dias Úteis" day={dias_uteis} />
        <TimetableList title="Sábados" day={sabados} />
        {domingos && <TimetableList title="Domingos" day={domingos} />}
      </span>
    </div>
  )
}

export default BusLineSchedule
