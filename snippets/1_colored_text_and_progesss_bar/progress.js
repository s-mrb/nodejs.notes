
// Creates a Progress Bar
// npm install progress
const ProgressBar = require('progress')

// Plain bar
const bar = new ProgressBar(":bar", { total: 10 })

// Colored bar
// const chalk = require('chalk')
// const bar = new ProgressBar(`${chalk.red(":bar")}`, { total: 10 })

const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
