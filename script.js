const API_Key ="f9faf3402444dc72144d3ed49c947b1c";
function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C `;
    document.body.appendChild(newPara);
}


async function fetchWeatherDetails(){
    try{
        let city ="Vijayawada";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`);
        const data = await response.json();
        console.log("Weather data:->" , data);
        renderWeatherInfo(data);
    }
    catch(e){
       console.log("Error found",e);
    }
    
}


async function getCustomerWeatherDetails(){
    try{
        let latitude = 16.5062;
        let longitude = 80.6480;
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?
                                lat=${latitude}&lon=${longitude}&appid=${API_Key}&units=metric`);
    
        let data = await result.json();
        console.log(data);
    }
    catch(e){
        console.log("Error found",e);
     }
    
}

function switchTab(clickedTab){
    apiErrorContainer.classList.remove("active");
    if (clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab")
    }

    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessCotainer.classList.remove("active");
        searchForm.classList.add("active");
    }
    else{
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
    }
}
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geolocation Support");
    }
}
function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    concole.log(longi);
}