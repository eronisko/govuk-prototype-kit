const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('strata-odcudzenie/op/index.html', buildRequestData(req))
})

router.get('/docasny', function (req, res) {
    res.render('strata-odcudzenie/op/docasny.html', buildRequestData(req))
})

router.get('/vystavenie', function (req, res) {
    res.render('strata-odcudzenie/op/vystavenie.html', buildRequestData(req))
})

router.get('/poplatky', function (req, res) {
    res.render('strata-odcudzenie/op/poplatky.html', buildRequestData(req))
})

function buildRequestData (request) {
    function urlTo (path) {
        return '/strata-odcudzenie/op' + path
    }

    return {
        'parentServiceName': 'Strata odcudzenie dokladov',
        'parentServiceUrl': '/strata-odcudzenie',
        'serviceName': 'Strata odcudzenie dokladov: Občiansky preukaz',
        'serviceUrl': '/strata-odcudzenie/op',
        'navigationSteps': [
            {
                number: '0',
                title: 'Nahlásenie straty',
                description: 'Blalal lala al OP',
                href: urlTo('/'),
                isActive: request.path === '/'
            },
            {
                number: '1',
                title: 'Vybavenie potvrdenia o OP',
                description: 'Elektronicky OP',
                href: urlTo('/docasny'),
                isActive: request.path === '/docasny'
            },
            {
                number: '2',
                title: 'Vystavenie nového OP',
                description: 'Elektronicky OP',
                href: urlTo('/vystavenie'),
                isActive: request.path === '/vystavenie'
            },
            {
                number: 'Z',
                title: 'Poplatky',
                description: 'Elektronicky OP',
                href: urlTo('/poplatky'),
                isActive: request.path === '/poplatky'
            },

        ]
    }


}

module.exports = router
