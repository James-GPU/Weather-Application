function error() {
 console.log("There was an error");
}
$(document).ready(function () {
 // Requires jquery to be referenced
 // Requests the location from the user
 navigator.geolocation.getCurrentPosition(success, error);

 function success(pos) {
  var lat = pos.coords.latitude; // latitude
  var long = pos.coords.longitude; // longitude
  weather(lat, long);
 }

 // Call Weather
 function weather(lat, long) {
  var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`; // URL uses the current latitude and longitude of the user

  $.getJSON(URL, function (data) {
   updateDOM(data);
  });
 }

 // Update Dom
 function updateDOM(data) {
  var city = data.name; // The city
  var temp = Math.round(data.main.temp); // The temperature of the current day
  var desc = data.weather[0].description;
  var icon = data.weather[0].icon;
  var lowtemp = Math.round(data.main.temp_min); // This rounds the lowest temperature of the current day
  var hightemp = Math.round(data.main.temp_max); // This rounds the highest temperature of the current day
  var humidity = data.main.humidity; // This is the humidity

  $("#city").html(city); // Updates the city with the updated DOM
  $("#temp").html(temp); // Updates the temperature with the updated DOM
  $("#desc").html(desc); // Updates the description with the updated DOM
  $("#icon").attr("src", icon);
  $("#humidity").html(humidity); // Updates the humidity with the updated DOM
  $("#lowtemp").html(lowtemp); // Updates the low temperature with the updated DOM
  $("#hightemp").html(hightemp); // Updates the high temperature with the updated DOM
 }
});
