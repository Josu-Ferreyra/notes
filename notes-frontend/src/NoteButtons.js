import { deleteNote as deleteNoteAtServer, changeImportance, getNotes } from './services/notes/notes'

export function NoteButtons ({ id, props }) {
  const { notes, setNotes, setNotification } = props
  const deleteNote = (e) => {
    const idTargetNote = e.target.id.split('-')[0]
    deleteNoteAtServer(idTargetNote)
      .then(response => {
        setNotification({
          message: `Note: '${response.data.content}' has been deleted`,
          error: false
        })
        setNotes(notes.filter(note => note.id !== response.data.id))
      })
      .catch(error => {
        const errorMessage = error.response.data.error
        setNotification({
          message: errorMessage,
          error: true
        })
      })
  }
  const toggleImportance = (e) => {
    const idTargetNote = e.target.id.split('-')[0]
    const note = notes.find(note => note.id === idTargetNote)
    changeImportance(idTargetNote, !note.important)
      .then(() => {
        getNotes()
          .then(serverNotes => setNotes(serverNotes))
      })
  }
  return (
    <div>
      <button id={`${id}-delete`} onClick={deleteNote}>Eliminar</button>
      <button id={`${id}-importance`} onClick={toggleImportance}>Cambiar Importancia</button>
    </div>
  )
}
