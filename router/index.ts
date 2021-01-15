import express from 'express'
import newsRouter from './newsRouter'
import examsRouter from './examsRouter'
import labsRouter from './labsRouter'

const router = express.Router()

router.use('/news', newsRouter)
router.use('/exams', examsRouter)
router.use('/labs', labsRouter)

export default router


