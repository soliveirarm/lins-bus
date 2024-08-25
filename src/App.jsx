import { useState } from "react"
import { itinerario } from "./data/itinerario.json"
import BusLineSchedule from "./components/BusLineSchedule"
import { useSwipeable } from "react-swipeable"
import Legend from "./components/Legend"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [line, setLine] = useState(1)

  const nextLine = () => {
    if (line === 11) setLine(1)
    else setLine((prevLine) => prevLine + 1)
  }

  const previousLine = () => {
    if (line === 1) setLine(11)
    else setLine((prevLine) => prevLine - 1)
  }

  const swipes = useSwipeable({
    onSwipedLeft: nextLine,
    onSwipedRight: previousLine,
  })

  const filteredArray = itinerario.filter((item) => item.linha == line)
  const selectedItem = filteredArray[0]

  return (
    <div className="flex flex-col h-full bg-gradient-to-r from-slate-50 to-slate-100">
      <Header />

      <main {...swipes} className="grow my-10">
        <BusLineSchedule
          nextLine={nextLine}
          previousLine={previousLine}
          {...selectedItem}
        />
      </main>

      <Legend />

      <Footer />
    </div>
  )
}

export default App
