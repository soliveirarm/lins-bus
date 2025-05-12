import { useState } from "react"
import { useLocalStorage } from "@uidotdev/usehooks"

import { itinerario } from "./data/itinerario.json"

import { Header } from "./components/Header"
import { BusLines } from "./components/BusLines"
import { Legend } from "./components/Legend"
import { LinesModal } from "./components/LinesModal"
import { Footer } from "./components/Footer"

export function App() {
  const [line, setLine] = useLocalStorage("line", 1)
  const [isModalHidden, setIsModalHidden] = useState(true)

  const nextLine = () => {
    if (line === 11) setLine(1)
    else setLine((prevLine) => prevLine + 1)
  }

  const previousLine = () => {
    if (line === 1) setLine(11)
    else setLine((prevLine) => prevLine - 1)
  }

  const [currentLine] = itinerario.filter((item) => item.linha == line)

  return (
    <div className="flex flex-col h-full bg-zinc-900 text-white">
      <Header />

      <main className="grow my-5">
        <BusLines
          nextLine={nextLine}
          previousLine={previousLine}
          {...currentLine}
          openModal={() => setIsModalHidden(false)}
        />
      </main>

      <LinesModal
        isHidden={isModalHidden}
        setIsHidden={setIsModalHidden}
        line={line}
        setLine={setLine}
        itinerario={itinerario}
      />

      <Legend />

      <Footer />
    </div>
  )
}
