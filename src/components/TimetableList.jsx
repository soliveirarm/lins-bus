function TimetableList({ title, day }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <ul className="flex flex-col gap-1 items-center">
        {day.map(({ horario, tags }) => (
          <li
            className="relative flex flex-col py-3 rounded bg-custom-green text-white shadow-md w-28 text-center cursor-pointer"
            key={horario}
          >
            <p>{horario}</p>
            {tags &&
              tags.map((tag) => {
                if (tags.length != 2) {
                  return (
                    <span key={tag}>
                      <img
                        className="w-5 absolute right-1 bottom-1"
                        src={`icons/${tag}.svg`}
                        alt={`Ícone ${tag}`}
                      />
                    </span>
                  )
                } else
                  return (
                    <span key={tag}>
                      <img
                        className="w-5 absolute right-1 top-1"
                        src={`icons/bellagio.svg`}
                        alt={`Ícone bellagio`}
                      />
                      <img
                        className="w-5 absolute right-1 bottom-1"
                        src={`icons/fatec.svg`}
                        alt={`Ícone fatec`}
                      />
                    </span>
                  )
              })}
          </li>
        ))}
      </ul>
    </div>
  )
}

TimetableList.propTypes = {
  title: String,
  day: [],
}

export default TimetableList
