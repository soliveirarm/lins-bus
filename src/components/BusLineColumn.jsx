export function BusLineColumn({ title, day = [] }) {
  return (
    <div>
      <h3 className="font-medium text-lg mb-3 text-center">{title}</h3>

      <ul className="flex flex-col items-center gap-2.5">
        {day.map(({ horario, tags }, i) => (
          <Time key={i} horario={horario}>
            {tags &&
              tags.map((tag) =>
                tags.length == 2 ? (
                  <TwoTags key={tag} tags={tags} />
                ) : (
                  <OneTag key={tag} tag={tag} />
                )
              )}
          </Time>
        ))}
      </ul>
    </div>
  )
}

const Time = ({ horario, children }) => (
  <li className="relative flex flex-col p-3.5 rounded-lg text-white border-2 border-accent bg-accent/5 w-24 text-center">
    <p>{horario}</p>
    {children}
  </li>
)

const OneTag = ({ tag }) => (
  <span>
    <img
      className="w-4 absolute right-1 bottom-1.5"
      src={`special-lines/${tag}.svg`}
      alt={`Ícone ${tag}`}
    />
  </span>
)

const TwoTags = ({ tags }) => (
  <span>
    <img
      className="w-4 absolute right-1 top-1.5"
      src={`special-lines/${tags[0]}.svg`}
      alt="Ícone bellagio"
    />
    <img
      className="w-4 absolute right-1 bottom-1.5"
      src={`special-lines/${tags[1]}.svg`}
      alt="Ícone fatec"
    />
  </span>
)
