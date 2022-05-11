import "dotenv/config";

const url = "https://api.openchargemap.io/v3/poi/";

// Base URL - https://api.openchargemap.io/v3/poi
// Base URL: https://api.openchargemap.io/v3/poi/?output=json&countrycode=AU&maxresults=10
// Required Paramaters
// - apiKeyOCM: ?key=123...
// Optional Paramaters

function displayMapData(responseData) {
    console.log("This ran");
    debugger;
}

function waitForResponse(response) {
    return response.json();
}

export function fetchMapData() {
    const location = "Melbourne";
    const apiKeyOCM = process.env.OCM_API_KEY;
    const units = 2;
    const queryString = `?key=${apiKeyOCM}&Site=${location}`;
    fetch(url + queryString)
        .then(waitForResponse)
        .then(displayMapData);
}
