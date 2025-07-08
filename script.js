const link = "https://goweather.xyz/weather/";
const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");
const temperature1 = document.querySelector(".temperature1");
const temperature2 = document.querySelector(".temperature2");
const temperature3 = document.querySelector(".temperature3");
const wind1 = document.querySelector(".wind1");
const wind2 = document.querySelector(".wind2");
const wind3 = document.querySelector(".wind3");
const wind = document.querySelector(".wind");
const temperature = document.querySelector(".temp");
const locate = document.querySelector(".locate");
const image = document.querySelector(".defaultImage");
const address = document.querySelector(".addLocation");
const condition = document.querySelector(".condition")
const btn = document.querySelector(".logoBtn");
const information = document.querySelector(".informations");
btn.addEventListener("click", () => {
    const visit = link + address.value;
    console.log(visit)
    if (!address.value) {
        alert('!Invalid location');
    } else {
        setTimeout(() => {
            information.style.display = "grid";

        }, 5000);
    }
    fetch(visit)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            locate.innerText = address.value;
            temperature.innerText = data.temperature;
            wind.innerText = 'Wind:' + data.wind;
            condition.innerText = data.description;
            let days = data.forecast;
            wind1.innerText = "Wind:" + (days[0].wind);
            temperature1.innerText = "Temperature:" + (days[0].temperature);
            wind2.innerText = "Wind:" + (days[1].wind);
            temperature2.innerText = "Temperature:" + (days[1].temperature);
            wind3.innerText = "Wind:" + (days[2].wind);
            temperature3.innerText = "Temperature:" + (days[2].temperature);
            let description = data.description;
            if (description == "Rain in vicinity") {
                image.src = "./images/rainny.png"
            }
            else if (description == "Partly cloudy") {
                image.src = "./images/cloudy.jpg";
            } else if (description == "Sunny") {
                image.src = "./images/sunnycartoon.avif";
            } else if (description == "Patchy rain nearby") {
                image.src = "./images/rainny.png";
            } else if (description == "Patchy light rain") {
                image.src = "./images/patchyrain.png";
            } else if (description == "Light rain shower") {
                image.src = "./images/patchyrain.png";
            } else if (description == "Light rain") {
                image.src = "./images/patchyrain.png";
            } else if (description == "Patchy light drizzle") {
                image.src = "./images/partlylittledizzle.png";
            } else if (description == "Clear") {
                image.src = "./images/clearsky.png";
            } else if (description == "Patchy light rain in area with thunder") {
                image.src = "./images/rainny.png";
            } else if (description == "Thundery outbreaks in nearby") {
                image.src = "./images/rainny.png";
            } else if (description == "Drizzle") {
                image.src = "./images/drizz.png";
            } else {
                image.src = "./images/winter.png";
            }
        }
        )

    address.value = "";
})

