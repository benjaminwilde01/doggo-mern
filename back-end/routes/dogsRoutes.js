import express from 'express'

import { getDogs, createDogs, updateSubmission } from '../controllers/dogsController.js'

const router = express.Router()

router.get('/', getDogs)
router.post('/', createDogs)
router.patch('/:id', updateSubmission)


export default router