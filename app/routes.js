const express = require('express')
const router = express.Router()
const zivnostRouter = require('./zalozenie_zivnosti_routes')
const strataRouter = require('./strata-odcudzenie_routes')
const strataOPRouter = require('./strata-odcudzenie_routes_op')

// Add your routes here - above the module.exports line
router.use('/zalozenie-zivnosti', zivnostRouter)
router.use('/strata-odcudzenie', strataRouter)
router.use('/strata-odcudzenie/op', strataOPRouter)

module.exports = router
