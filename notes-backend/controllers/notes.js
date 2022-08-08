const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', (req, res, next) => {
  Note.find({})
    .then(data => res.json(data))
    .catch(error => next(error))
})
notesRouter.get('/:id', (req, res, next) => {
  const id = req.params.id
  Note.findById(id).then(data =>
    res.json(data))
    .catch(error => next(error))
})
notesRouter.post('/', (req, res, next) => {
  const newNote = new Note({
    content: req.body.content,
    date: req.body.date,
    important: req.body.important
  })
  newNote.save()
    .then(data => res.json(data))
    .catch(error => next(error))
})
notesRouter.put('/:id', (req, res, next) => {
  const id = req.params.id
  const importance = req.body.important
  Note.findByIdAndUpdate(id, { important: importance })
    .then(data => res.json(data))
    .catch(error => next(error))
})
notesRouter.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Note.findByIdAndRemove(id)
    .then(data => res.json(data))
    .catch(error => next(error))
})

module.exports = notesRouter
