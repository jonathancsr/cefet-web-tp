var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extend: false }))

var Users = require('./routes/Users')
var Atributes = require('./routes/Atributes')
var Widgets = require('./routes/Widgets')
var WidgetsHasAtt = require('./routes/WidgetHasAtts')
var World = require('./routes/World')
var WorldHasWidgets = require('./routes/WorldHasWidgets')
var Images = require('./routes/Images')

app.use('/users', Users)
app.use('/atributes', Atributes)
app.use('/widgets', Widgets)
app.use('/widgetsHasAtts', WidgetsHasAtt)
app.use('/world', World)
app.use('/worldHasWidgets', WorldHasWidgets)
app.use('/images', Images)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})