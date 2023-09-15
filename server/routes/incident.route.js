import { Router } from 'express'
import { createIncident, getIncidents } from '../controllers/incident.controller.js'
const router  = Router()

router.post('/', createIncident)
router.get('/',getIncidents)


export default router;