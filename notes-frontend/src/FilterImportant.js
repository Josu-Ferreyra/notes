export function FilterImportant ({ props }) {
  const { filterNotes, setFilterNotes } = props
  return (
    <button
      onClick={() => setFilterNotes(prev => !prev)}
    >
      {filterNotes ? 'Mostrar Todas' : 'Mostrar Importantes'}
    </button>
  )
}
