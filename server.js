const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/', (req,res) => {
    res.send({
        token : 'testtestestestest',
        notToken : 'Not a token '
    })
})

app.listen(8080, () => console.log("'API is running on http://localhost:8080/login"))