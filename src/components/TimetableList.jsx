function TimetableList({ title, day = [] }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-3 text-center text-white">
        {title}
      </h3>

      <ul className="flex flex-col items-center gap-1.5">
        {day.map(({ horario, tags }) => (
          <li
            className="relative flex flex-col py-2.5 rounded bg-custom-green text-dark w-24 text-center shadow-inner shadow-dark/15"
            key={horario}
          >
            <p>{horario}</p>
            {tags &&
              tags.map((tag) =>
                tags.length == 2 ? (
                  <TwoIcons key={tag} />
                ) : (
                  <OneIcon key={tag} tag={tag} />
                )
              )}
          </li>
        ))}
      </ul>
    </div>
  )
}

const OneIcon = ({ tag }) => (
  <span>
    <img
      className="w-4 absolute right-1 bottom-1"
      src={`/${tag}.svg`}
      alt={`Ícone ${tag}`}
    />
  </span>
)

const TwoIcons = () => (
  <span>
    <img
      className="w-4 absolute right-1 top-1"
      src="/bellagio.svg"
      alt={`Ícone bellagio`}
    />
    <img
      className="w-4 absolute right-1 bottom-1"
      src="/fatec.svg"
      alt={`Ícone fatec`}
    />
  </span>
)
  
export default TimetableList
