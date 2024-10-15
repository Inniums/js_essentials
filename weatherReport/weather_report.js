
function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value
    const apiKey = `d1acad1bc92083c26b09960630f17524`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    // get weather details for identified city
    fetch(apiUrl)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${result.name} </h2>
        <p>Temperature: ${result.main.temp}</p>
        <p>Weather: ${result.weather[0].description}</p>`
    })
}
// set weather report event on form submit
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails)
