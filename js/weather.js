const API_KEY = "4071a421db13b17c34564a8a494fe6d6";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = `${data.name}\n`;
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}℃`;
        console.log(position);
    });
}
function onGeoError(){
    alert("位置情報が見つかりませんでした。(´・ω・`)");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);