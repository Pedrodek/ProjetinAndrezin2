const express = require('express')

const app = express()

app.use(express.static('myProject'))


app.listen(3000, () => {
    console.log('App listening :3')
})

