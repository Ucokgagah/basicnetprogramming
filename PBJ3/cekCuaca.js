const request = require('postman-request')
const urlCuaca =
'http://api.weatherstack.com/current?access_key=683736ed07ca9cc5cd6a27303770f5b7&query=-0.8969903936252707, 100.35076508055'
request({ url: urlCuaca, json: true }, (error, response) => {
console.log('Saat ini suhu diluar mencapai ' +
response.body.current.temperature +
' derajat celcius. Kemungkinan terjadinya hujan adalah' + response.body.current.precip
+ '%')
})
