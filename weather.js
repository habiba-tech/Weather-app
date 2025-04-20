const apikey = "ccfa55a59a748dc957948c1e43bd1fad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await respone.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr" ;

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
