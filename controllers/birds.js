import { Bird } from '../models/bird.js'

function index(req, res) {
  Bird.find({})
  .then(birds => {
    res.status(200).json(birds)
  })
  .catch(e => {
    console.log(e)
  })
}

function show(req, res) {
  Bird.findById(req.params.id)
  .then(bird => {
    res.json(bird)
  })
  .catch(e => {
    console.log(e)
  })
}

function create(req, res) {
  Bird.create(req.body)
  .then(puppy => {
    res.json(puppy)
  })
  .catch(e => {
    console.log(e)
  })
}

function update(req, res) {
  Bird.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(bird => {
    res.json(bird)
  })
  .catch(e => {
    console.log(e)
  })
}

function deleteBird(req, res) {
  Bird.findByIdAndDelete(req.params.id)
  .then(bird => {
    res.json(bird)
  })
  .catch(e => {
    console.log(e)
  })
}

export {
  index,
  show,
  create,
  update,
  deleteBird as delete
}