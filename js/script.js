const URL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=d5e1087943c31ddacb335771fb3f6e90&q=";
const UNSPLASH = "https://api.unsplash.com/search/photos/?client_id=hAGyXP36wUo0lx8QMbe7XAfMmj8KyEv1DlwTZtIb-ZM&query=";

const $input = $(`input[type="text"]`);
const $form = $('form');
const $weather = $('#weather');
const $temp = $('#temp');
const $feels_like = $('#feels_like');
const $icon = $('.icon');
const $name = $('#name');
const $picture = $('.picture');
const $splash = $('.splash');
const $min = $('#min');
const $max = $('#max');
const $humidity = $('#humidity');



$form.on('submit', getPic)

function getPic(event) {
    event.preventDefault();
    var pic = $input.val();

    $.ajax(UNSPLASH + pic).then(function (data) {
        // console.log(data)

        $('.picture').html(`<img src="${data.results[0].urls.small}"/>`)
        

    })
};






$form.on('submit', getData)

function getData(event) {

    event.preventDefault();
    var city = $input.val();
   


    $.ajax(URL + city).then(function (data) {
        console.log(data)
        
        $name.text(data.name)
        $weather.text(data.weather[0].description)
        $temp.text(Math.floor(data.main.temp) + "°F")
        $min.text(Math.floor(data.main.temp_min) + "°F")
        $max.text(Math.floor(data.main.temp_max) + "°F")
        $humidity.text("Humidity: " + data.main.humidity + "%")
        $feels_like.text("Feels Like: " + Math.floor(data.main.feels_like) +"°F")},
        function (error) {
        console.log(error)
    })



};


$form.on('submit', getIcon)

function getIcon(event) {
    event.preventDefault();
    var city = $input.val();

    $.ajax(URL + city).then(function (data) {
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $(".icon").attr("src", icon);
    })
};



