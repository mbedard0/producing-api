import { Router } from 'express'
import * as birdsCtrl from '../controllers/birds.js'
const router = Router()

router.get('/birds', birdsCtrl.index)

router.get('/birds/:id', birdsCtrl.show)

router.post('/birds', birdsCtrl.create)

router.put('/birds/:id', birdsCtrl.update)

router.delete('/birds/:id', birdsCtrl.delete)

export {
  router
}
