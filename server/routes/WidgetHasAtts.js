const express = require('express')
const widgetsHasAtt = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const WidgetsHasAtt = require("../models/WidgetsHasAtt")
widgetsHasAtt.use(cors())

widgetsHasAtt.get('/findById', (req, res) => {
    WidgetsHasAtt.findOne({
        where: {
            id: req.body.id
        }
    })
    .then(widgetsHasAtt => {
        res.json(widgetsHasAtt)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

widgetsHasAtt.get('/findAll', (req, res) => {
    WidgetsHasAtt.findAll({
    })
    .then(widgetsHasAtt => {
        res.json(widgetsHasAtt)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = widgetsHasAtt