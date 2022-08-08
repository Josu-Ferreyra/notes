import { useState } from 'react'
import { postNote } from './services/notes/notes'

export function AddNotes ({ props }) {
  const [inputNote, setInputNote] = useState('')
  const { setNotes, setNotification } = props
  const handleOnChange = (e) => setInputNote(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = {
      content: inputNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }
    postNote(newNote)
      .then(response => {
        const data = response.data
        setNotification({ message: `Note: '${data.content}' created!` })
        setNotes(prev => [...prev, { ...data }])
      })
      .catch(error => {
        const errorMessage = error.response.data.error
        setNotification({ message: errorMessage, error: true })
      })
    setInputNote('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputNote} onChange={handleOnChange} />
        <button>Add Note</button>
      </form>
    </div>
  )
}
