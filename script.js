const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '&APPID=ddcecc6a50929e769589b8bc72b9a2b3';
const celcius = '&units=metric';
const fahrenheit = '&units=imperial';
const search = document.querySelector('#city-name')
const submit = document.querySelector('#submit')
const error = document.querySelector('#error')

const placeName = document.getElementById('title')
const temperature = document.getElementById('temp')
const desc = document.getElementById('desc')
const tempLimit = document.getElementById('high-min')
const humidity = document.getElementById('humidity')
const speed = document.getElementById('wind')

submit.addEventListener('click',() => {
    console.log(search.value)
    getData(search.value)
})

search.addEventListener(('input'),()=>{error.textContent = ''})

function getData(location) {

    console.log(location)
    fetch( url +location + celcius + key)
    .then(function(resp){return resp.json()})
    .then(function(data){

        console.log(data)
        placeName.textContent = data.name
        desc.textContent = data.weather[0].description + ','
        temperature.textContent = data.main.temp + " C"
        tempLimit.textContent = data.main.temp_min +  " C / " + data.main.temp_max + " C"
        humidity.textContent = "humidity: " +  data.main.humidity;
        wind.textContent = " Wind-deg: " + data.wind.deg + ", Wind-speed:" + data.wind.speed
    
        return data;
    })
    .catch((data) => {
        document.getElementById('error').textContent = 'City not found'
      });
}

getData('London')