import "dotenv/config";

console.log("Hello World!");

// Base URL - https://api.openchargemap.io/v3/poi
// Base URL: https://api.openchargemap.io/v3/poi/?output=json&countrycode=AU&maxresults=10
// Required Paramaters
// - apiKeyOCM: ?key=123...
// Optional Paramaters

const url = "https://api.openchargemap.io/v3/poi/";

function displayMapData(responseData) {
    debugger;
}

function waitForResponse(response) {
    return response.json();
}

function fetchMapData() {
    const location = "Melbourne";
    const apiKeyOCM = process.env.OCM_API_KEY;
    const units = 2;
    const queryString = `?key=${apiKeyOCM}&Site=${location}`;
    fetch(url + queryString)
        .then(waitForResponse)
        .then(displayMapData);
}

fetchMapData();

// console.log(data);
// console.log(apiKeyOCM);

// function MapSearch() {
//     return (
//         <div>
//             <h1>Charging Station App</h1>
//         </div>
//     );
// }

// export default MapSearch;

// What is the base URL?

// const url = "https://api.openchargemap.io/v3/poi/";
// const outputDiv = document.querySelector("#output");

// // What are the parameters? (Both required and optional)
// // - q (City Name - Required)
// // - appid (API Key - Required)
// // - units ("metric" - Optional)

// function displayCurrentWeather(responseData) {
//     const currentTemp = responseData.main.temp;
//     const minTemp = responseData.main.temp_min;
//     const maxTemp = responseData.main.temp_max;
//     const html = `
//     <p>Current Temperature: ${currentTemp}</p>
//     <p>Minimum Temperature: ${minTemp}</p>
//     <p>Maximum Temperature: ${maxTemp}</p>
//   `;
//     outputDiv.innerHTML = html;
// }

// function waitForResponse(r) {
//     return r.json();
// }

// // Default Parameter
// // If a location is provided, that will be used
// // If no location is provided, location will be set to "Sydney"

// function fetchCurrentWeather(location = "Sydney") {
//     outputDiv.innerHTML = "Loading...";
//     const apiKeyOCM = process.env.OCM_API_KEY;
//     const units = "metric";
//     const queryString = `?q=${location}&key=${apiKeyOCM}&units=${units}`;
//     fetch(url + queryString)
//         .then(waitForResponse)
//         .then(displayCurrentWeather);
// }

// // fetchCurrentWeather();

// const form = document.querySelector("form");

// function onFormSubmit(event) {
//     event.preventDefault();
//     const input = document.querySelector("input");
//     // Ternary Operator
//     const location = input.value.trim() === "" ? "Sydney" : input.value;
//     // Regular Expressions (check whether it matched a pattern!)
//     fetchCurrentWeather(location);
// }

// form.addEventListener("submit", onFormSubmit);
