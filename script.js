const APIKey = `436b24e0d7bd611aac594cd2b661224e`;
const searchValue = $(`#search-input`);
const searchBtn = $(`#search-button`);
const limit = `&limit=1`;
const history = $(`#history`);
const today = $(`#today`);
const forecast = $(`#forecast`)
let buttons = $(`.btn`);


let userSearch = [];
let i = localStorage.getItem(`i`)
let locationName = $(userSearch[i]);
// TODO: prevent same city button from being created
let searchBtnCounter = 0;

// On search enter || click prevent default (refresh), store search value in variable called cityName, add it and globally defined variables to geo API call. Store lat and lon in their own variables
searchBtn.on(`click`, function (event) {
    event.preventDefault();
    searchWeather(searchValue.val());
});
function searchWeather(cityName) {
    let geoURL = (`https://api.openweathermap.org/geo/1.0/direct?q=` + cityName + limit + `&appid=` + APIKey);

    $.ajax({
        url: geoURL,
        method: `GET`
    }).then(function (response) {
        console.log(response[0].lat, response[0].lon, cityName)
        let lat = response[0].lat;
        let lon = response[0].lon;
        localStorage.setItem(`lat`, lat);
        localStorage.setItem(`lon`, lon);

        let forecastURL = (`https://api.openweathermap.org/data/2.5/forecast?lat=` + lat + `&lon=` + lon + `&appid=` + APIKey);

        $.ajax({
            url: forecastURL,
            method: `GET`
        }).then(function (response) {
            userSearch.push(response.city.name);
            let locationName = $(`<button>`);
            locationName.attr(`class`, `btn`);
            locationName.text(response.city.name);
            history.prepend(locationName);
            console.log(response)

            let tempData = (JSON.stringify(response.list[0].main.temp));
            let windData = response.list[0].wind.speed;
            let humidityData = response.list[0].main.humidity;
            let dateNow = moment().format('YYYY/MM/DD hh:mm:ss');
            let iconsrc = response.list[0].weather[0].icon;
            let mainIcon = (`http://openweathermap.org/img/wn/` + iconsrc + `@2x.png`)
            let dailyIcon = (`http://openweathermap.org/img/wn/` + iconsrc + `.png`)
            locationName.on(`click`, function dailyWeather() {
                // function to create cards and match callback data to variables
                let dailyCard = $(`<div>`);
                // let mainCard = $(`<div>`)
                let title = $(`<h1>`)
                let temp = $(`<p>`);
                let wind = $(`<p>`);
                let humidity = $(`<p>`);
                let date = $(`<p>`);
                let iconMain = $(`<img>`)
                let iconDaily = $(`<img>`)

                title = (response.city.name, date, iconMain);
                temp.text(tempData);
                wind.text(windData);
                humidity.text(humidityData);
                date = dateNow;
                iconMain.attr({ src: mainIcon });
                iconDaily.attr({ src: dailyIcon });

                today.prepend(title)
                today.append(date)
                today.append(iconMain)
                today.append(temp)
                today.append(wind)
                today.append(humidity)

                forecast.append(dailyCard)
                dailyCard.prepend(date);
                dailyCard.append(iconDaily);
                dailyCard.append(temp);
                dailyCard.append(wind);
                dailyCard.append(humidity);
            });
        })
    });
}






// let historyGeoURL = (`https://api.openweathermap.org/geo/1.0/direct?q=` + cityName + limit + `&appid=` + APIKey);

// $.ajax({
//     url: historyGeoURL,
//     method: `GET`
// }).then(function (response) {

//     let lat = response[0].lat;
//     let lon = response[0].lon;

//     let historyForecastURL = (`https://api.openweathermap.org/data/2.5/forecast?lat=` + lat + `&lon=` + lon + `&appid=` + APIKey);

//     buttons.on(`click`, function (event) {
//         event.preventDefault
//         dailyWeather()

//         $.ajax({
//             url: historyForecastURL,
//             method: `GET`
//         }).then(function (response) {
//             
//             dailyWeather(response);

//         });
//     });
// });


// searchBtn.on(`click`, function (event) {
// event.preventDefault();
// let searchTerm = searchValue.val();

// let geoURL = (`https://api.openweathermap.org/geo/1.0/direct?q=` + searchTerm + limit + `&appid=` + APIKey);


// $.ajax({
//     url: geoURL,
//     method: `GET`
// }).then(function (response) {
//     let locationData = (JSON.stringify(response));
//     localStorage.setItem(`locationData`, locationData)
//     searchBtnCounter++;
//     console.log(response);
//     console.log(response[0].lat);
//     console.log(response[0].lon);
//     let lat = response[0].lat;
//     let lon = response[0].lon;


//     let forecastURL = (`https://api.openweathermap.org/data/2.5/forecast?lat=` + lat + `&lon=` + lon + `&appid=` + APIKey);

//     $.ajax({
//         url: forecastURL,
//         method: `GET`
//     }).then(function (response) {
        // console.log(response);







        // if (searchBtnCounter !== 0) {
        //     $(`#placeholderWeather`).empty();
        // };

        // push user input into usersearch array
        //TODO: search push function to push all searched cities to the end of the userSearch array
        // TODO: Find out how to push 2d arrays

        // Creates button and changes button text
        // locationName = $(`<button>`);
        // locationName.attr(`class`, `btn`);
        // locationName.attr(`name`, response[0].name);
        // locationName.attr(`lat`, response[0].lat);
        // locationName.attr(`lon`, response[0].lon);
        // locationName.text(response[0].name + `, ` + response[0].country);
        // locationName.on(`click`, function (event) {
        //     console.log(event);
        //     console.log(event.target);
        // })
        // history.prepend(locationName);

//     });
// });
    // userSearch.forEach(function (singleSearch) {
    //     console.log(singleSearch);


