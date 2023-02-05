const APIKey = `436b24e0d7bd611aac594cd2b661224e`;

const searchValue = $(`#search-input`);
const searchBtn = $(`#search-button`);
const limit = `&limit=3`;
const history = $(`#history`);
let locationName
// Hardcode Limit? To what?


let searchBtnCounter = 0;

// let lat
// let long


searchBtn.on(`click`, function (event) {
    event.preventDefault();
    searchBtnCounter++;
    let searchTerm = searchValue.val();

    let queryURL = (`http://api.openweathermap.org/geo/1.0/direct?q=` + searchTerm + limit + `&appid=` + APIKey);

    if (searchBtnCounter !== 0) {
        $(`#placeholderWeather`).empty();
    };

    $.ajax({
        url: queryURL,
        method: `GET`
    }).then(function (response) {
        
        console.log(response[0].name + `, ` + response[0].country);
        for (i = 0; i < 3; i++) {

            // Creates button and changes button text
            locationName = $(`<button>`);
            locationName.attr(`class`, `locationResult`);
            locationName.attr(`id`, locationName + [i])
            locationName.text(response[i].name + `, `  + response[i].country)
            history.append(locationName);
            locationNameLat = response[i].lat;
            locationNameLon = response[i].lon;
        }
    });
});


// console.log(response[0].name);
// console.log(response[0].country);
// console.log(response[0].lat);
// console.log(response[0].lon);


