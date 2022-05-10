const URL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=d5e1087943c31ddacb335771fb3f6e90&q=";


const $input = $(`input[type="text"]`);
const $form = $('form');
const $weather = $('#weather');
const $temp = $('#temp');
const $feels_like = $('#feels_like');
const $icon = $('.icon');
const $name = $('#name');

$form.on('submit', getData)

function getData(event) {

    event.preventDefault();
    var city = $input.val();
   


    $.ajax(URL + city).then(function (data) {
        console.log('weather data')
        
        $name.text(data.name)
        $weather.text(data.weather[0].description)
        $temp.text(Math.floor(data.main.temp))
        $feels_like.text(Math.floor(data.main.feels_like))},
        function (error) {
        console.log(error)
    })



}


$form.on('submit', getIcon)

function getIcon(event) {
    event.preventDefault();
    var city = $input.val();

    $.ajax(URL + city).then(function (data) {
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $(".icon").attr("src", icon);
    })
};