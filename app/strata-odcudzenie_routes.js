const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('strata-odcudzenie/index.html', buildRequestData(req))
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
                description: 'Blalal lala al OP',
                href: urlTo('/'),
                isActive: request.path === '/'
            },
            {
                number: 'O',
                title: 'Občiansky preukaz',
                description: 'Blalal lala al OP',
                href: urlTo('/op'),
                isActive: request.path === '/op'
            },
            {
                number: 'P',
                title: 'Cestovný doklad',
                description: 'bla bvla',
                href: urlTo('/pas'),
                isActive: request.path === '/pas'
            },
            {
                number: 'T',
                title: 'Osvedčenie o evidencii vozidla',
                description: 'technický preukaz',
                href: urlTo('/tp'),
                isActive: request.path === '/tp'
            },
            {
                number: 'K',
                title: 'Karta poistenca',
                description: 'Postenca karta',
                href: urlTo('/karta-poistenca'),
                isActive: request.path === '/karta-poistenca'
            },
            {
                number: 'C',
                title: 'Platobná karta',
                description: 'Platobná karta',
                href: urlTo('/platobna-karta'),
                isActive: request.path === '/platobna-karta'
            },
            {
                number: 'R',
                title: 'Rodný list',
                description: 'Rodný list',
                href: urlTo('/rodny-list'),
                isActive: request.path === '/rodny-list'
            },
            {
                number: 'S',
                title: 'Sobášny list',
                description: 'Sobášny list',
                href: urlTo('/sobasny-list'),
                isActive: request.path === '/sobasny-list'
            },
            {
                number: 'U',
                title: 'Úmrtný list',
                description: 'Úmrtný list',
                href: urlTo('/umrtny-list'),
                isActive: request.path === '/sobasny-list'
            },
            {
                number: 'T',
                title: 'Potvrdenie o trvalom pobyte (cudzinci žijúci na Slovensku)',
                description: 'Povolenie na pobyt',
                href: urlTo('/povolenie-na-pobyt'),
                isActive: request.path === '/povolenie-na-pobyt'
            },
            {
                number: 'T',
                title:  'Preukaz zahraničného Slováka',
                description: 'preukaz zahraničného Slováka',
                href: urlTo('/preukaz-slovaka'),
                isActive: request.path === '/preukaz-slovaka'
            },

        ]
    }


}

module.exports = router
