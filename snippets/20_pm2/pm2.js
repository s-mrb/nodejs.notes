// pm2 start index.js -i 0
const express = require('express')
const app = express()

function cpu_intensive_task(time_to_take) {
const start = Date.now()
while (Date.now() - start < time_to_take) {}
}

app.get('/heavy_task', (req, res) => {
cpu_intensive_task(6000)
res.send('Hey Idiot!!!')
})

app.get('/light_task', (req, res) => {
res.send('Hey Idiot!!!')
})

const port = Number.parseInt(process.env.PORT)
app.listen(process.env.PORT, () => {
console.log(`Listening on port ${port}`)
})
