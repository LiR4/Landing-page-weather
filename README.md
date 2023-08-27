# Landing page weather

Hello everyone, this project was created to be a simple news and weather page. To evaluate HTML/CSS/JavaScript skills.

You can see the design in the [Figma](https://www.figma.com/file/TQKv5INk3GoYBl8oSDmtHY/Landing-page-weather?type=design&node-id=1%3A204&mode=design&t=inawf4e8kNVGmMu6-1)

## 🚀 Starting

Let's move on to the first stage of using the project.

you need to have [git](https://git-scm.com/downloads) on your computer to clone the repository.

```bash
git clone https://github.com/LiR4/Landing-page-weather.git
```

Before this step, you need to create an account on [OpenWeather](https://openweathermap.org/api) and [News api](https://newsapi.org), as you will need the API keys.

With the keys in your hands, place them in the first line of the [index.js](https://github.com/LiR4/Landing-page-weather/blob/main/Js/index.js)


```javascript
const API_KEY = ['keyWeather', 'keyNews'] //If you reverse the order, it won't work
```
We now have functions to get data from the API and correct the time.

### getWeather

* This function needs a parameter, which is the name of the city, to get the climate of that location.

After that, it makes a request and returns data such as weather and temperature for visualization in html.


```javascript
function getWeather(city){
    //DOM
    const Temp = document.getElementById('temp');
    const Weather = document.getElementById('weather');
    const name = document.getElementById('city');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY[0]}`) //Request
        .then(promisse => promisse.json())
        .then(data => { 
            name.innerHTML = data['name']
            Weather.innerHTML= data['weather'][0]['main']
            Temp.innerHTML = (parseInt(data['main']['temp'] - 273)).toFixed() + '°'
        }) //Data
}
```

### getNews 

* This function needs a parameter, which is the name of the news item.

it is the same as getWeather, but there is a lot of news that I limit with the use of "for".

```javascript
function getNews(theme){
    fetch(`https://newsapi.org/v2/everything?q=${theme}&apiKey=${API_KEY[1]}`)//Request
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
    })//Data
}

```

### getTime

* This function returns the time, but there's a problem it's static.
  
Using setInterval(), you can return the current time.

```javascript
const getTime = ()=> {
    const date = new Date();
    return {
        "hours": zero(date.getHours()),
        "minutes": zero(date.getMinutes()),
        "seconds": zero(date.getSeconds())
    };
}

```
### setInterval

* This function is repeated every second to change the time, the day period icon and the background

**that periods is:**

* Morning:  6am at 1pm
* Afternoon: 1pm at 6pm
* Evening: 8pm at 6am 

You can see in the [Figma](https://www.figma.com/file/TQKv5INk3GoYBl8oSDmtHY/Landing-page-weather?type=design&node-id=1%3A204&mode=design&t=inawf4e8kNVGmMu6-1)



```javascript
    setInterval(() => {
    const {hours, minutes, seconds} = getTime();
    const Hour = document.getElementById('Hour'); 
    const icon = document.getElementById('icon');

    if(hours >=6 && hours <=13){//time changes other images for the background
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
```

### zero 
* This function places leading zeros if the value of hours, minutes and seconds is less than ten.

```javascript
function zero(value){
    if(value < 10){
        return '0' + value;
    }
    return value
}

```


## 🛠️ Made with

* [Bootstrap](http://www.dropwizard.io/1.0.2/docs/) - CSS Framework

## ✒️ Create by


* [LiR4](https://github.com/linkParaPerfil)