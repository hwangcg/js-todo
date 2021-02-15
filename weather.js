const API_KEY = '29b22deef3a1ee874281a770c917c4a6';
const weatherCon = document.querySelector(".weather_con");

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();  
    }).then(function(json){
        const city = json.name, temp = json.main.temp;
        weatherCon.innerText = `오늘 ${city} 기온은 ${temp}º 입니다.`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem("coords", JSON.stringify(coordsObj));

}

function getGeoSucces(position){
    const lati = position.coords.latitude;
    const long = position.coords.longitude;
    const coordsObj = {
        latitude: lati, 
        longitude: long
    }

    saveCoords(coordsObj);
    getWeather(lati, long);
}

function getGeoError(){
    console.log('Can`t access geo location.');
}

function getCoords(){
    navigator.geolocation.getCurrentPosition(getGeoSucces, getGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem("coords");
    if( loadedCoords === null ){
        getCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();