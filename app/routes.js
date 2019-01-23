const express = require('express')
const router = express.Router()
const zivnostRouter = require('./zalozenie_zivnosti_routes')
const zalozenieSroRouter = require('./zalozenie_sro_routes')
const trvalyPobyt = require('./trvaly_pobyt_routes')
const drevinyRouter = require('./dreviny_routes')
const eidRouter = require('./aktivacia_eid_routes')
const strataRouter = require('./strata-odcudzenie_routes')
const strataOPRouter = require('./strata-odcudzenie_routes_op')
const narodenieDietataRouter = require('./narodenie_dietata_routes')

// Add your routes here - above the module.exports line
router.use('/zalozenie-zivnosti', zivnostRouter)
router.use('/aktivacia-eid', eidRouter)
router.use('/zalozenie-zivnosti', zivnostRouter)
router.use('/zalozenie-sro',zalozenieSroRouter)
router.use('/strata-odcudzenie', strataRouter)
router.use('/strata-odcudzenie/op', strataOPRouter)
router.use('/zalozenie-zivnosti', zivnostRouter)
router.use('/trvaly-pobyt', trvalyPobyt)
router.use('/dreviny', drevinyRouter)
router.use('/narodenie-dietata', narodenieDietataRouter)

module.exports = router
