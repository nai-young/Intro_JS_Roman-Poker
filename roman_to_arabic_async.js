'use strict'

const fs = require('fs')
fs.readFileSync('values_to_convert.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    const dataArray = data.split('\n')
    console.log(dataArray)
  }
})
