export function Legend() {
  return (
    <section className="self-center flex flex-col gap-4 p-4 mb-10">
      <h2 className="text-xl font-bold text-center">Legenda</h2>

      <LegendItem icon="fatec" title="Fatec" />
      <LegendItem icon="etec" title="Etec" />
      <LegendItem icon="cais" title="Cais Clemente Ferreira" />
      <LegendItem icon="ventura" title="Residencial Ventura" />
      <LegendItem icon="bellagio" title="Residencial Bellagio" />
      <LegendItem icon="himalaia" title="Residencial Himalaia" />
    </section>
  )
}

const LegendItem = ({ icon, title }) => (
  <div className="flex gap-2 items-center">
    <img
      className="w-8"
      src={`special-lines/${icon}.svg`}
      alt={`Ícone ${icon}`}
    />{" "}
    -<p>{title}</p>
  </div>
)
