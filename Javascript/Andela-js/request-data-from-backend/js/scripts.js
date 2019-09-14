// Access DOM elements
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

let apiRequest = new XMLHttpRequest();

cityForm.addEventListener('submit', ($event) => {
    $event.preventDefault();
    const choseCity = cityInput.value;
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + choseCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e' );
    apiRequest.send();
    console.log(apiRequest);
})


apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4){
        if (apiRequest.status === 404){
            reportSection.textContent = 'City Not Found!'
        }
        const response = JSON.parse(apiRequest.response);
        reportSection.textContent = 'The weather in ' + response.name + ' is ' + response.weather[0].main + '.';
    }
}