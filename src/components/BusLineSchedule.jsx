import TimetableList from "./TimetableList"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

function BusLineSchedule({ linha, nome, horarios, previousLine, nextLine }) {
  const { dias_uteis, sabados, domingos } = horarios
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <span className="flex justify-between items-center gap-4">
        <button className="text-2xl" onClick={previousLine}>
          <IoIosArrowBack />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold sm:w-96 text-center">
          Linha {linha}: {nome}
        </h2>

        <button className="text-2xl" onClick={nextLine}>
          <IoIosArrowForward />
        </button>
      </span>

      <span className="flex gap-8">
        <TimetableList title="Dias Úteis" day={dias_uteis} />
        <TimetableList title="Sábados" day={sabados} />
        {domingos && <TimetableList title="Domingos" day={domingos} />}
      </span>
    </div>
  )
}

export default BusLineSchedule

BusLineSchedule.propTypes = {
  linha: String,
  nome: String,
  horarios: {
    dias_uteis: [],
    sabados: [],
    domingos: [],
  },
  previousLine: () => {},
  nextLine: () => {},
}
