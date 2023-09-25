document.addEventListener('DOMContentLoaded', function() {

  const apiKey = "cc1bfda95c5349db9b5144811232705";

  document.querySelector('#get-weather').addEventListener('click', getWeather);

  function data(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        document.querySelector('h2').innerHTML = `${data.location.name}, ${data.location.country}`;

        const iconCode = data.current.condition.code;

        const hours = new Date().getHours();

        let time = '';

        if (hours > 17 || hours < 6) {
          time = 'night';
        } else {
          time = 'day';
        }

        switch (iconCode) {
          case 1000:
            icon = `${time}_clear`;
            break;
          case 1003:
            icon = `${time}_partial_cloud`;
            break;
          case 1006:
            icon = 'cloudy';
            break;
          case 1009:
            icon = 'overcast';
            break;
          case 1030:
            icon = 'mist';
            break;
          case 1063:
          case 1150:
          case 1153:
          case 1168:
          case 1171:
          case 1180:
          case 1183:
          case 1186:
          case 1189:
          case 1192:
          case 1195:
          case 1198:
          case 1201:
          case 1240:
          case 1243:
          case 1246:
            icon = `${time}_rain`;
            break;
          case 1066:
          case 1114:
          case 1117:
          case 1210:
          case 1213:
          case 1216:
          case 1219:
          case 1222:
          case 1225:
          case 1255:
          case 1258:
            icon = `${time}_snow`;
            break;
          case 1069:
          case 1072:
          case 1204:
          case 1207:
          case 1237:
          case 1249:
          case 1252:
          case 1261:
          case 1264:
            icon = `${time}_sleet`;
            break;
          case 1087:
          case 1273:
          case 1276:
            icon = `${time}_rain_thunder`;
            break;
          case 1135:
          case 1147:
            icon = 'fog';
            break;
          case 1182:
            icon = `${time}_snow_thunder`;
            break;
        };

        document.querySelector('img').src = `icons/${icon}.png`;
        document.querySelector('.condition').innerHTML = data.current.condition.text;
        document.querySelector('.temp').innerHTML = `${data.current.temp_c}&deg;C`;
      });
  };

  function getWeather() {
      const city = document.querySelector('#city').value;
      data(city);
      error(city);
  };

});



