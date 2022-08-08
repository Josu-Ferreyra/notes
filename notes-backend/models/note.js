const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  content: {
    type: String,
    minLength: 8,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  important: {
    type: Boolean,
    require: false
  }
})
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)
