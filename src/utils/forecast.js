const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/156f0ab50f6743e86accf97010bf4c4a/${latitude},${longitude}?units=si`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find locations', undefined)
    } else {
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degree out. There is a ${body.currently.precipProbability}% of chance of rain`)
    }
  })
}

module.exports = forecast
