<<<<<<< HEAD
const APIKey = `436b24e0d7bd611aac594cd2b661224e`;

const searchValue = $(`#search-input`);
const searchBtn = $(`#search-button`);
const limit = `&limit=1`;
const history = $(`#history`);
let locationName
// Hardcode Limit? To what?


let userSearch = [];
let searchBtnCounter = 0;

searchBtn.on(`click`, function (event) {
    event.preventDefault();
    let searchTerm = searchValue.val();
    userSearch.push(searchTerm)

    let queryURL = (`http://api.openweathermap.org/geo/1.0/direct?q=` + searchTerm + limit + `&appid=` + APIKey);


    $.ajax({
        url: queryURL,
        method: `GET`
    }).then(function (response) {

        searchBtnCounter++;

        // if (searchBtnCounter !== 0) {
        //     $(`#placeholderWeather`).empty();
        // };

        // push user input into usersearch array
        //TODO: search push function to push all searched cities to the end of the userSearch array
        // TODO: Find out how to push 2d arrays 
        // for (let i = 0; i < userSearch.length; i++) {

        //     // Creates button and changes button text
        //     locationName = $(`<button>`);
        //     locationName.attr(`class`, `locationResult`);
        //     locationName.attr(`id`, userSearch[i]);
        //     locationName.text(response[i].name + `, `  + response[i].country);
        //     history.append(locationName);
        //     let locationNameLat = response[i].lat;
        //     localStorage.setItem('latData' + [i], locationNameLat);
        //     let locationNameLon = response[i].lon;
        //     localStorage.setItem(`lonData` + [i], locationNameLon + userSearch[i]);
        // console.log(locationNameLat)
    });
});
// });

// accesses longitude and latitude for each created button
// TODO: May need to be in arrays

const createBtn = function () {


    for (let i = 0; i < userSearch.length; i++) {

        // Creates button and changes button text
        locationName = $(`<button>`);
        locationName.attr(`class`, `locationResult`);
        locationName.attr(`id`, userSearch[i]);
        locationName.text(response[i].name + `, ` + response[i].country);
        history.prepend(locationName);
        let locationNameLat = response[i].lat;
        localStorage.setItem('latData' + [i], locationNameLat);
        let locationNameLon = response[i].lon;
        localStorage.setItem(`lonData` + [i], locationNameLon);
        userSearch[
            {
                cityName: locationName,
                cityLat: locationNameLat,
                cityLon: locationNameLon
            }
        ];
console.log(userSearch.cityName);
    }
}
=======
>>>>>>> parent of e7867c0 (managed to get ajax to function, 3 buttons are now created with city names and country codes as text values, also stored indiviual latitude and longitude for each button. Will now attempt to use local storage to store and retrieve items outside of the .then function)
