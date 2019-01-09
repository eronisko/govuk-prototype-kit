const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('strata-odcudzenie/index.html', buildRequestData(req))
})

router.get('/pas', function (req, res) {
    res.render('strata-odcudzenie/pas.html', buildRequestData(req))
})

router.get('/vodicsky_preukaz', function (req, res) {
    res.render('strata-odcudzenie/vodicsky_preukaz.html', buildRequestData(req))
})

router.get('/karta_poistenca', function (req, res) {
    res.render('strata-odcudzenie/karta_poistenca.html', buildRequestData(req))
})

router.get('/platobna_karta', function (req, res) {
    res.render('strata-odcudzenie/platobna_karta.html', buildRequestData(req))
})

function buildRequestData (request) {
    function urlTo (path) {
        return '/strata-odcudzenie' + path
    }

    return {
        'serviceName': 'Strata, odcudzenie dokladov: krok po kroku',
        'serviceUrl': '/strata-odcudzenie',
        'navigationSteps': [
            {
                number: '0',
                title: 'Úvod',
                description: 'Úvodné informácie k strate dokladov',
                href: urlTo('/'),
                isActive: request.path === '/'
            },
            {
                number: '1',
                title: 'Občiansky preukaz',
                description: 'Čo robiť keď stratíte občiansky preukaz',
                href: urlTo('/op'),
                isActive: request.path === '/op'
            },
            {
                number: '2',
                title: 'Cestovný doklad',
                description: 'Čo robiť keď stratíte cestovný doklad - pas',
                href: urlTo('/pas'),
                isActive: request.path === '/pas'
            },
            {
                number: '3',
                title: 'Vodičský preukaz',
                description: 'Čo robiť keď stratíte vodičský preukaz',
                href: urlTo('/vodicsky_preukaz'),
                isActive: request.path === '/vodicsky_preukaz'
            },
            {
                number: '4',
                title: 'Platobná karta a iné',
                description: 'Čo robiť keď stratíte platobnú kartu ',
                href: urlTo('/platobna_karta'),
                isActive: request.path === '/platobna_karta'
            }
        ]
    }


}

module.exports = router
