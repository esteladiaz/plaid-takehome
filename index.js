const express = require('express')
const app = express()

const PORT = process.env.PORT || 4040

app.use(express.static('public'))

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`Server is listening at https://localhost:${PORT}/`)
})