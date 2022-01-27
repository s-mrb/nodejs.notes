const cluster = require('cluster')

// If there isn't any Master then the first instance
// which require cluster is master by default

if (cluster.isMaster) {

  // two server means that doing the light_task immediately after heavy_task
  // would serve light_task immediately
  // in case of single fork (server) there would be delay in serving
  // light_task immediately after heavy_task 
  cluster.fork()
  cluster.fork()

} else {
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
}
