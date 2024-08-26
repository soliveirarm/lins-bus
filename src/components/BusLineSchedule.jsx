/* eslint-disable react/prop-types */
import TimetableList from "./TimetableList"

function BusLineSchedule({ horarios }) {
  const { dias_uteis, sabados, domingos } = horarios

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <span className="flex gap-4 sm:gap-8">
        <TimetableList title="Dias Úteis" day={dias_uteis} />
        <TimetableList title="Sábados" day={sabados} />
        {domingos && <TimetableList title="Domingos" day={domingos} />}
      </span>
    </div>
  )
}

export default BusLineSchedule
