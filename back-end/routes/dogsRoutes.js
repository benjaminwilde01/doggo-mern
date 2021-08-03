import express from 'express'

import { getDogs, createDogs } from '../controllers/dogsController.js'

const router = express.Router()

router.get('/', getDogs)
router.post('/', createDogs)


export default router