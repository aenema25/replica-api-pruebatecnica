var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/points', function (req, res, next) {
  const points = {
    "rectangle1": [{ "x": -3, "y": 0 }, { "x": -3, "y": 3 }, { "x": 3, "y": 3 }, { "x": 3, "y": 0 }],
    "triangle": [{ "x": -3, "y": 3 }, { "x": 0, "y": 6 }, { "x": 3, "y": 3 }],
    "rectangle2": [{ "x": -0.5, "y": 0 }, { "x": -0.5, "y": 1.5 }, { "x": 0.5, "y": 1.5 }, { "x": 0.5, "y": 0 }]
  }
  res.send(points)
});

router.post('/login', function (req, res, next) {
  if (req.body.user.toLowerCase() === 'oscar' && req.body.password === '6Xk5Q05%CHuJ') {
    res.send({ "key": "Donald Duck" })
  } else {
    res.send({ "message": "Internal Server Error" })
  }
})

router.get('/welcome/:key', function (req, res, next) {
  const saludos = [
    `Ciao ${req.params.key}!`,
    `Namaste ${req.params.key}!`,
    `Hallo ${req.params.key}!`,
    `Hello ${req.params.key}!`,
    `Konnichi wa ${req.params.key}!`,
    `Kaixo ${req.params.key}!`,
    `Bonjour ${req.params.key}!`,
  ]
  res.send({ "welcome": saludos[Math.floor(Math.random() * saludos.length)] })
})
module.exports = router;
