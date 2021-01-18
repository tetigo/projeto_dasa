import express from 'express'
import examsRouter from './examsRouter'
import labsRouter from './labsRouter'

const router = express.Router()

router.use('/exams', examsRouter)
router.use('/labs', labsRouter)

export default router


