const APIKey = `436b24e0d7bd611aac594cd2b661224e`;

const searchValue = $(`#search-input`);
const searchBtn = $(`#search-button`);
const limit = `&limit=1`;
const history = $(`#history`);
// Hardcode Limit? To what?


let userSearch = [];
let i = localStorage.getItem(`i`)
let locationName = $(userSearch[i]);
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
        let responseData = (JSON.stringify(response));
        localStorage.setItem(`responseData`, responseData)
        searchBtnCounter++;
        // createBtn();
        
        
        // if (searchBtnCounter !== 0) {
        //     $(`#placeholderWeather`).empty();
        // };

        // push user input into usersearch array
        //TODO: search push function to push all searched cities to the end of the userSearch array
        // TODO: Find out how to push 2d arrays 
        for (let i = 0; i < userSearch.length; i++) {
            
            // Creates button and changes button text
            locationName = $(`<button>`);
            locationName.attr(`class`, `locationResult`);
            locationName.attr(`id`, userSearch[i]);
            locationName.text(response[i].name + `, ` + response[i].country);
            history.prepend(locationName);
            let locationNameLat = response[i].lat;
            localStorage.setItem('latData' + [i + 1], locationNameLat);
            let locationNameLon = response[i].lon;
            localStorage.setItem(`lonData`, locationNameLon);
            localStorage.setItem(`i`, i);


        }
    });
});

userSearch.forEach(function())

locationName.on(`click`, function (event) {
    event.preventDefault();
    const lat = localStorage.getItem(`latdata` + i);
    const lon = localStorage.getItem(`lonData1` + i);
    let queryURL = (`api.openweathermap.org/data/2.5/forecast?lat=` + lat + `&lon=` + lon * `&appid=` + APIKey);
    console.log(lat);
    console.log(lon);
    console.log(locationName);
    $.ajax({
        url: queryURL,
        method: `GET`
    }).then(function (response) {
        console.log(response)

    });
})

// accesses longitude and latitude for each created button
// TODO: May need to be in arrays
// let createBtn = function () {


    //     for (let i = 0; i < userSearch.length; i++) {

    //         // Creates button and changes button text
    //         locationName = $(`<button>`);
    //         locationName.attr(`class`, `locationResult`);
    //         locationName.attr(`id`, userSearch[i]);
    //         locationName.text(response[i].name + `, ` + response[i].country);
    //         history.prepend(locationName);
    //         let locationNameLat = response[i].lat;
    //         localStorage.setItem('latData' + [i], locationNameLat);
    //         let locationNameLon = response[i].lon;
    //         localStorage.setItem(`lonData` + [i], locationNameLon);
    // console.log(response)
    // console.log(json.stringify(response));
// }

