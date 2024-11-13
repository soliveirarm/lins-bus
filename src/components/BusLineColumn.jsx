export function BusLineColumn({ title, day = [] }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-3 text-center text-zinc-200">
        {title}
      </h3>

      <ul className="flex flex-col items-center gap-1.5">
        {day.map(({ horario, tags }, i) => (
          <Time key={i} horario={horario}>
            {tags &&
              tags.map((tag) =>
                tags.length == 2 ? (
                  <TwoIcons key={tag} />
                ) : (
                  <OneIcon key={tag} tag={tag} />
                )
              )}
          </Time>
        ))}
      </ul>
    </div>
  )
}

const Time = ({ horario, children }) => (
  <li className="relative flex flex-col py-2.5 rounded-lg text-white border-2 border-accent/60 w-24 text-center bg-accent/15 font-medium">
    <p>{horario}</p>
    {children}
  </li>
)

const OneIcon = ({ tag }) => (
  <span>
    <img
      className="w-4 absolute right-1 bottom-1"
      src={`special-lines/${tag}.svg`}
      alt={`Ícone ${tag}`}
    />
  </span>
)

const TwoIcons = () => (
  <span>
    <img
      className="w-4 absolute right-1 top-1"
      src="special-lines/bellagio.svg"
      alt="Ícone bellagio"
    />
    <img
      className="w-4 absolute right-1 bottom-1"
      src="special-lines/fatec.svg"
      alt="Ícone fatec"
    />
  </span>
)
