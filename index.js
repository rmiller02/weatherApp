

var button = document.querySelector('.button')






button.addEventListener('click',function(){
    var inputValue = document.querySelector('.inputValue').value
    var name = document.querySelector('.name');
    var temp = document.querySelector('.temp');
    var desc = document.querySelector('.desc');
    var NowMoment = moment();

    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${inputValue}&units=imperial&appid=0ef181ee838ec666086a46756df9018e`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        
        
        
        temp.innerHTML = Math.floor(data.main.temp) + '&#8457;'
        name.innerHTML = data.name
        desc.innerHTML = data.weather[0].description
       
        
    
    var lat=(data.coord.lat);
    var lon=(data.coord.lon);
    console.log(lat)
    console.log(lon)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=0ef181ee838ec666086a46756df9018e`)
    .then(response => response.json())
    .then(data => {
        console.log(data.timezone)

      


        var time=(moment().tz(data.timezone).format('hh:mm z'))






        let eDisplayMoment = document.getElementById('displayMoment');
        eDisplayMoment.innerHTML = time;

    })    


.catch(err => alert("invalid zip!"))
});

})


   
   
   
   
   
   
   
  















