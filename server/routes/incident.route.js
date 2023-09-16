import { Router } from 'express'
import { createIncident, getIncidents } from '../controllers/incident.controller.js'
import { verifyToken } from '../middleware/jwt.js'
const router  = Router()

router.post('/', verifyToken, createIncident)
router.get('/',getIncidents)


export default router;