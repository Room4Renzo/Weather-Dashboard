const APIKey = `436b24e0d7bd611aac594cd2b661224e`;

const searchValue = $(`#search-input`);
const searchBtn = $(`#search-button`);
const limit = `&limit=1`;
const history = $(`#history`);
// Hardcode Limit? To what?
let buttons = $(`.btn`);


let userSearch = [];
let i = localStorage.getItem(`i`)
let locationName = $(userSearch[i]);
let searchBtnCounter = 0;

searchBtn.on(`click`, function (event) {
    event.preventDefault();
    let searchTerm = searchValue.val();

    let queryURL = (`http://api.openweathermap.org/geo/1.0/direct?q=` + searchTerm + limit + `&appid=` + APIKey);


    $.ajax({
        url: queryURL,
        method: `GET`
    }).then(function (response) {
        let responseData = (JSON.stringify(response));
        localStorage.setItem(`responseData`, responseData)
        searchBtnCounter++;

        userSearch.push({
            city: searchValue.val(),
            lat: response[0].lat,
            lon: response[0].lon
        })

        // if (searchBtnCounter !== 0) {
        //     $(`#placeholderWeather`).empty();
        // };

        // push user input into usersearch array
        //TODO: search push function to push all searched cities to the end of the userSearch array
        // TODO: Find out how to push 2d arrays 

        // Creates button and changes button text
        locationName = $(`<button>`);
        locationName.attr(`class`, `btn`);
        locationName.attr(`name`, response[0].name);
        locationName.attr(`lat`, response[0].lat);
        locationName.attr(`lon`, response[0].lon);
        locationName.text(response[0].name + `, ` + response[0].country);
        history.prepend(locationName);

    });
});
userSearch.forEach(function (singleSearch) {
    console.log(singleSearch);

})

localStorage.getItem(responseData)
let locationLat = responseData

function showWeather(event) {
    if (event.target.className === `btn`) {
        console.log(`It worked!`)
    }
}

buttons.on(`click`, function (event) {
    event.preventDefault();

    let queryURL = (`api.openweathermap.org/data/2.5/forecast?lat=` + lat + `&lon=` + lon * `&appid=` + APIKey);

    $.ajax({
        url: queryURL,
        method: `GET`
    }).then(function (response) {
        console.log(response)
        showWeather();

    });
})


// accesses longitude and latitude for each created button

