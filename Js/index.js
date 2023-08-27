const API_KEY = ['7ce788c7f9a92d457fd3bd16562d7222', '11caa10a82f84fa289027aafd37fead7'];
const city = 'são paulo'

// Get the weather and temperature in the city
function gerWeather(city){

    const Temp = document.getElementById('temp');
    const Weather = document.getElementById('weather');
    const name = document.getElementById('city');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY[0]}`)
        .then(promisse => promisse.json())
        .then(data => {
            name.innerHTML = data['name']
            Weather.innerHTML= data['weather'][0]['main']
            Temp.innerHTML = (parseInt(data['main']['temp'] - 273)).toFixed() + '°'
        })
}

gerWeather('são paulo')

// Function get theme the news and writing in html
function getNews(theme){
    fetch(`https://newsapi.org/v2/everything?q=${theme}&apiKey=${API_KEY[1]}`)
    .then(promisse => promisse.json())
    .then(data => {
        for(i = 0; i <=5; i++){
            const img = document.getElementById(`img${i}`)
            const title = document.getElementById(`title${i}`)
            const info = document.getElementById(`info${i}`)
            img.src = data['articles'][i]['urlToImage']
            title.innerHTML = data['articles'][i]['title']
            info.innerHTML = data['articles'][i]['description']
        }
    })
}

getNews('Ia')

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

/* call the getTime function and write to the html in a loop, 
there is a condition that changes an image for the background based on the time */

setInterval(() => {
    const {hours, minutes, seconds} = getTime();
    const Hour = document.getElementById('Hour'); 
    const icon = document.getElementById('icon');

    if(hours >=6 && hours <=13){
        icon.src = 'Assets/icons/summer.png'
        document.body.style.backgroundImage = 'Assets/images/Morning.png'
    }else{
        if (hours >= 13 && hours <= 18){
            icon.src = 'Assets/icons/afternoon.png'
            document.body.style.backgroundImage = "url('Assets/images/Afternoon.png')"
        }else{
            icon.src = 'Assets/icons/evening.png'
            document.body.style.backgroundImage = "url('Assets/images/Evening.png')"
        }
    }

    Hour.innerHTML = hours + ':' + minutes + ':' + seconds;
}, 1000)

