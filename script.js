// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd93b6f1812msh06704719ba46df1p1e7b5cjsnbbc13988f03a',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const weatherapp = (city) => {
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then((responce) => { return responce.json() })
    .then((data) => {
      console.log(data)
      temp.innerHTML = data.temp
      humid.innerHTML = data.humidity
      wind.innerHTML = data.wind_speed
    })

}

button.addEventListener("click", (event) => {
  event.preventDefault()
  weatherapp(city.value)
})

weatherapp("pune")





