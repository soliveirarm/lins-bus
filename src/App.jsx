import { useState } from "react"
import { useLocalStorage } from "@uidotdev/usehooks"

import { itinerario } from "./data/itinerario.json"

import { BusLines } from "./components/BusLines"
import { Legend } from "./components/Legend"
import { LinesModal } from "./components/LinesModal"

export function App() {
  const [line, setLine] = useLocalStorage("line", 1)
  const [isHidden, setIsHidden] = useState(true)

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
    <div className="flex flex-col h-full bg-dark text-white">
      <Header />

      <main className="grow my-10">
        <BusLines
          nextLine={nextLine}
          previousLine={previousLine}
          {...currentLine}
          openModal={() => setIsHidden(false)}
        />
      </main>

      <LinesModal
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        line={line}
        setLine={setLine}
        itinerario={itinerario}
      />

      <Legend />

      <Footer />
    </div>
  )
}

const Header = () => (
  <header className="flex items-center gap-4 p-4 bg-accent-darker text-white">
    <img className="w-8 text-white" src="/bus.svg" alt="Ônibus verde" />
    <h1 className="font-bold text-2xl">Lins Bus</h1>
  </header>
)

const Footer = () => (
  <footer className="bg-[#222222] text-white p-4 text-center">
    <p>
      Desenvolvido por{" "}
      <a
        className="font-medium transition underline hover:opacity-80 text-accent"
        target="_blank"
        href="https://github.com/soliveirarm"
      >
        Sarah Oliveira
      </a>
    </p>
  </footer>
)
