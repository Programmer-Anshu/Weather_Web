const temp=document.querySelector(".temp")
const humidity=document.querySelector(".humidity")
const button=document.querySelector(".btn")
const wind=document.querySelector(".wind")
// const location=document.querySelector(".location")
const xn=document.querySelector(".x")

async function getweather(){
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=35b2887901a20030bc8485b096561560")
let data=await response.json();
// console.log(data)
temp.textContent=`${data?.main?.temp}`
humidity.textContent=`${data?.main.humidity}`
wind.textContent=`${data?.main?.pressure}`
}

getweather()

button.addEventListener('click',()=>{
    getlocation();
})

//location acess 
function getlocation(){

   
 navigator.geolocation.watchPosition(showPosition)
 
 function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
 
let apikey="https://maps.googleapis.com/maps/api/geocode/json?value="+position.coords.latitude+"&value="+position.coords.longitude+""
x.innerHTML=apikey;

    }


}
