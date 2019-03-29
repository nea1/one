const express = require('express')
const app = express()
const port = 8080

let tag = process.env.TAG
if (!tag) {
    tag = "0.1.0"
}

app.get('/', (req, res) => {
    res.send({
        "name" : "one",
        "version" : tag
    })
})

app.listen(port, () => console.log(`listening on port ${port}!`))