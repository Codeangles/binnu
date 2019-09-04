const request = require('request');

const forecast = (location, callback) =>{
    const url = 'https://api.darksky.net/forecast/82650db54627ec83d3b813a92400bdbb/'+ location.latitude +','+ location.longitude ;
    request({url : url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect weather service', undefined);
        } else if(response.body.error){
            callback('unable to find the location', undefined);
        } else {
            callback(undefined, {
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability,
               
            })
        }
    })
    }
    
    module.exports = {
        forecast: forecast,
    }