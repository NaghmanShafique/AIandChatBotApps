function getWheather() {
    apiKey = "9bde8dd003f38ffd54c7a38be63de3ba";
    let cityName = document.getElementById("text-ip").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?&q=${cityName}&appid=9bde8dd003f38ffd54c7a38be63de3ba`
    console.log(url);

    axios.get(url)
        .then(function (response) {
            // handle success
            console.log("Success Response");
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log("Error Response");
            console.log(error);
        })

}