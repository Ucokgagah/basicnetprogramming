const request = require('postman-request')
const url =
'http://api.weatherstack.com/current?access_key=683736ed07ca9cc5cd6a27303770f5b7&query=-0.8969903936252707, 100.35076508055';
request({ url: url }, (error, response) => {
console.log(response)
// const data = JSON.parse(response.body)
// console.log(data)
// console.log(data.current)
// console.log(data.current.temperature)
})