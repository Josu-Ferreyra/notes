import { useEffect, useState } from 'react'
import { Notification } from './Notification'
import { AddNotes } from './AddNotes'
import { ShowNotes } from './ShowNotes'
import { FilterImportant } from './FilterImportant'
import { getNotes } from './services/notes/notes'
import './App.css'

function App () {
  const [notes, setNotes] = useState([])
  const [filterNotes, setFilterNotes] = useState(false)
  const [notification, setNotification] = useState({ message: '', error: true })

  useEffect(() => {
    getNotes()
      .then(notes => setNotes(notes))
  }, [])

  return (
    <div className='App'>
      <h1>Notes</h1>
      <Notification props={{ notification, setNotification }} />
      <FilterImportant props={{ filterNotes, setFilterNotes }} />
      <ShowNotes props={{ notes, setNotes, filterNotes, setNotification }} />
      <AddNotes props={{ notes, setNotes, setNotification }} />
    </div>
  )
}

export default App
