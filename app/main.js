import "dotenv/config";
// console.log(process.env.OCM_API_KEY);

console.log("Hello World!");

// Base URL - https://api.openchargemap.io/v3/poi
// URL for Map: https://api.openchargemap.io/v3/poi/?output=json&countrycode=AU&maxresults=10
// Required Paramaters
// - ApiKey: ?key=123...
// Optional Paramaters

const baseUrl = "https://api.openchargemap.io/v3/poi";

// fetch fetchMapData() {
const apiKeyOCM = process.env.OCM_API_KEY;
// }

console.log(apiKeyOCM);

// function MapSearch() {
//     return (
//         <div>
//             <h1>Charging Station App</h1>
//         </div>
//     );
// }

// export default MapSearch;
