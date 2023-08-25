const API_KEY = '7ce788c7f9a92d457fd3bd16562d7222';
const city = 'são paulo'

// Get the weather and temperature in the city
function gerWeather(city){

    const Temp = document.getElementById('temp');
    const Weather = document.getElementById('weather');
    const name = document.getElementById('city');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(promisse => promisse.json())
        .then(data => {
            name.innerHTML = data['name']
            Weather.innerHTML= data['weather'][0]['main']
            Temp.innerHTML = (parseInt(data['main']['temp'] - 273)).toFixed()
        })
}

gerWeather('são paulo')

// this function is used to add zeros to the left on hours
function zero(value){
    if(value < 10){
        return '0' + value;
    }
    return value
}

// Get the time now
const getTime = ()=> {
    const date = new Date();
    return {
        "hours": zero(date.getHours()),
        "minutes": zero(date.getMinutes()),
        "seconds": zero(date.getSeconds())
    };
}

// call the getTime function and write to the html in a loop  
setInterval(() => {
    const {hours, minutes, seconds} = getTime();
    const Hour = document.getElementById('Hour'); 
    const icon = document.getElementById('icon');

    if(hours <=13){
        icon.src = '../Assets/icons/summer.png'
    }else{
        if (hours <= 18){
            icon.src = '../Assets/icons/afternoon.png'
        }else{
            icon.src = '../Assets/icons/evening.png'
        }
    }

    Hour.innerHTML = hours + ':' + minutes + ':' + seconds;
})

