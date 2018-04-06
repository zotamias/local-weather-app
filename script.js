$(document).ready(function(){
  
  //Geolocation
  navigator.geolocation.getCurrentPosition(success, error);
  
  function success(position){
    var lat= position.coords.latitude;
    var long= position.coords.longitude;   
    weather(lat,long);
  }
  
  function error(){
    console.log(error);
  }
  
  //Weather function
  function weather(lat, long) {
     //API
  var api=`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    
    
    //JSON
    $.getJSON(api, currentTemp); 
  }
  // end of weather function
   
  function currentTemp(data) {
    var location = data.name;
    var country = data.sys.country;
    var cTemp = data.main.temp;
    var fTemp = cTemp * 9 / 5 + 32;   
    var description = data.weather[0].description;
    var icon = data.weather[0].icon;
    var humidity = data.main.humidity;
    var windSpeed = data.wind.speed;
    windSpeed=2.237*(windSpeed);
    //the wind speed is converted from m/s to mph
    
   //Changing background function  
   var mainWeather= data.weather[0].main; 
  if(mainWeather=="Snow"){
    $("body").css("background-image", "url('https://cdn.magdeleine.co/wp-content/uploads/2016/01/6624374227_602a09c9dd_o-1400x1050.jpg')");
  } else if (mainWeather=="Rain"){
    $("body").css("background-image", "url('https://cdn.magdeleine.co/wp-content/uploads/2018/01/redd-angelo-95717-1400x788.jpg')");
  } else if (mainWeather=="Drizzle"){
   $("body").css("background-image", "url('https://cdn.magdeleine.co/wp-content/uploads/2017/03/schxy2nxw_i-lydia-harper-1400x969.jpg')"); 
  } else if (mainWeather=="Thunderstorm"){
   $("body").css("background-image", "url('https://images.unsplash.com/photo-1513284358928-18e6b0e6f685?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83efc4f09236d781cfce498e9e6185c5&auto=format&fit=crop&w=1350&q=80')");          
  } else if (mainWeather=="Clear"){
    $("body").css("background-image", "url('https://images.unsplash.com/photo-1502623547075-299b5ba76c53?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e322673d7c122d4f6184371422509bdb&auto=format&fit=crop&w=1350&q=80')");
  } else if (mainWeather=="Clouds"){
    $("body").css("background-image", "url('https://cdn.magdeleine.co/wp-content/uploads/2016/04/photo-1421081177127-339f586c9b49-1400x935.jpeg')"); 
  } 
  //end of background
   
    //using jQuery to show weather results
   $("#location").html(location + ", " + country); 
   $("#fahrenheit").html(Math.round(fTemp) + "°F");
   $("#celsius").html(Math.round(cTemp) + "°C");
    
   $("#description").html(description);
   $("#icon").attr("src", icon);
   $("#humidity").html("Humidity:  "+humidity+"% ");
   $("#windSpeed").html("Wind Speed: "+windSpeed+" mph");
  }
  
//Toggle Button 
  $("#weather").click(function() {
     $(".temp").toggle();   
  });//end of Toggle Button

  
});// end 

/*
Weather types used for changing background:
-Snow
-Rain
-Drizzle
-Thunderstorm
-Clear sky
-Clouds

Background stock photos from:
-Magdeleine.co
-Unsplash.com
*/