function getWheather() {
    apiKey = "9bde8dd003f38ffd54c7a38be63de3ba";
    let cityName = document.getElementById("text-ip").value;
    let city     = document.getElementById("city");
    let country     = document.getElementById("country");
    let temp     = document.getElementById("temp");
    let flike     = document.getElementById("flike");
    let tmin     = document.getElementById("tmin");

    let url = `https://api.openweathermap.org/data/2.5/weather?&q=${cityName}&units=metric&appid=9bde8dd003f38ffd54c7a38be63de3ba`
    console.log(url);

    axios.get(url)
        .then(function (response) {
            // handle success
            console.log("Success Response");
            console.log(response.data);
            console.log(response.data.name);
            console.log(response.data.main.temp);
            city.innerHTML = `City:`+ response.data.name;
            country.innerHTML = `Country:`+ response.data.sys.country;
            temp.innerHTML = `Temprature:`+ response.data.main.temp+`°C`;
            flike.innerHTML = `Feel Like    :`+ response.data.main.feels_like+`°C`;
            tmin.innerHTML = `Minumun Tempreture    :`+ response.data.main.temp_min+`°C`;
        })
        .catch(function (error) {
            // handle error
            console.log("Error Response");
            console.log(error);
        })

}