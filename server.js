const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
app.use(express.statis(path.join(_dirname, 'build')));

app.listen(process.env.PORT || 8080)
