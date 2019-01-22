const express = require('express')
const router = express.Router()

const rootPath = 'narodenie-dietata'
const rodnyListPath = '/rodny-list'
const zdravotnaPoistovna = '/zdravotna-poistovna'
const materskePath = '/materske'
const pediaterPath = '/pediater'
const trvalyPobytPath = '/trvaly-pobyt'
const prispevokNarodenieStatPath = '/prispevok-pri-narodeni-stat'
const prispevokNarodenieObecPath = '/prispevok-pri-narodeni-obec'
const dalsiePrispevkyPath = '/dalsie-prispevky'
const cestovnyDokladPath = '/cestovny-doklad'

router.get('/', function (req, res) {
  res.render(`${rootPath}/index.html`, buildRequestData(req))
})

router.get(rodnyListPath, function (req, res) {
  res.render(`${rootPath}/rodny_list.html`, buildRequestData(req))
})

router.get(zdravotnaPoistovna, function (req, res) {
  res.render(`${rootPath}/zdravotna_poistovna.html`, buildRequestData(req))
})

router.get(materskePath, function (req, res) {
  res.render(`${rootPath}/materske.html`, buildRequestData(req))
})

router.get(pediaterPath, function (req, res) {
  res.render(`${rootPath}/pediater.html`, buildRequestData(req))
})

router.get(trvalyPobytPath, function (req, res) {
  res.render(`${rootPath}/trvaly_pobyt.html`, buildRequestData(req))
})

router.get(prispevokNarodenieStatPath, function (req, res) {
  res.render(`${rootPath}/prispevok_pri_narodeni_stat.html`, buildRequestData(req))
})

router.get(prispevokNarodenieObecPath, function (req, res) {
  res.render(`${rootPath}/prispevok_pri_narodeni_obec.html`, buildRequestData(req))
})

router.get(dalsiePrispevkyPath, function (req, res) {
  res.render(`${rootPath}/dalsie_prispevky.html`, buildRequestData(req))
})

router.get(cestovnyDokladPath, function (req, res) {
  res.render(`${rootPath}/cestovny_doklad.html`, buildRequestData(req))
})

function mapErrorrs (errors) {
  const errorsMap = {}
  for (const error of errors) {
    errorsMap[error.param] = {text: error.msg}
  }
  return errorsMap
}

function buildRequestData (request, errors) {
  function urlTo (path) {
    return `/${rootPath}${path}`
  }

  return {
    'errors': errors ? mapErrorrs(errors.array()) : null,
    'activeHref': urlTo(request.path),
    'serviceName': 'Narodenie dieťaťa: krok po kroku',
    'serviceUrl': `/${rootPath}`,
    'sessionToken': request.query.token,
    'navigationSteps': [
      {
        number: '0',
        title: 'Úvod',
        href: urlTo('/'),
        isActive: request.path === '/'
      },
      {
        number: '1',
        title: 'Vyzdvihnutie rodného listu na matrike',
        href: urlTo(rodnyListPath),
        isActive: request.path === rodnyListPath
      },
      {
        number: '2',
        title: 'Prihlásenie do zdravotnej poisťovne',
        href: urlTo(zdravotnaPoistovna),
        isActive: request.path === zdravotnaPoistovna
      },
      {
        number: '3',
        title: 'Materské',
        href: urlTo(materskePath),
        isActive: request.path === materskePath
      },
      {
        number: '4',
        title: 'Prihlásenie dieťaťa k pediatrovi',
        href: urlTo(pediaterPath),
        isActive: request.path === pediaterPath
      },
      {
        number: '5',
        title: 'Prihlásenie dieťaťa k trvalému pobytu',
        href: urlTo(trvalyPobytPath),
        isActive: request.path === trvalyPobytPath
      },
      {
        number: '6',
        title: 'Príspevok pri narodení dieťaťa',
        href: urlTo(prispevokNarodenieStatPath),
        isActive: request.path === prispevokNarodenieStatPath
      },
      {
        number: '7',
        title: 'Príspevok pri narodení dieťaťa (obec, mestská časť)',
        href: urlTo(prispevokNarodenieObecPath),
        isActive: request.path === prispevokNarodenieObecPath
      },
      {
        number: '8',
        title: 'Ďalšie príplatky a príspevky',
        href: urlTo(dalsiePrispevkyPath),
        isActive: request.path === dalsiePrispevkyPath
      },
      {
        number: '9',
        title: 'Cestovný doklad',
        href: urlTo(cestovnyDokladPath),
        isActive: request.path === cestovnyDokladPath
      }
    ]
  }
}

module.exports = router
