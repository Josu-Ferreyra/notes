import axios from 'axios'
const baseUrl = '/api/notes'

async function getNotes () {
  const notes = await axios.get(`${baseUrl}`)
  return notes.data
}
const postNote = (note) => axios.post(`${baseUrl}`, note)
const deleteNote = (id) => axios.delete(`${baseUrl}/${id}`)
const changeImportance = (id, importance) => axios.put(`${baseUrl}/${id}`, { important: importance })
export {
  getNotes,
  postNote,
  deleteNote,
  changeImportance
}
