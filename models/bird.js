import mongoose from 'mongoose'
const Schema = mongoose.Schema

const birdSchema = new Schema({
  color: String,
  type: String,
  doesItFly: Boolean,
})

const Bird = mongoose.model("Bird", birdSchema)

export {
  Bird
}