//#region Weather API
const weatherapiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-23.5475&lon=-46.6361&exclude=&appid=4a560932da68c6d09051ac9825c6d318";

fetch(weatherapiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const temperature = document.querySelector(".temperature");
    temperature.textContent = Math.round(jsonObject.current.temp);

    const condition = document.querySelector(".condition");
    condition.textContent = jsonObject.current.weather[0].description;

    const humidity = document.querySelector(".humidity");
    humidity.textContent = jsonObject.current.humidity;

    //#region Forecast
    Object.keys(jsonObject.daily)
      .slice(1, 4)
      .forEach((i) => {
        let forecastdate = new Date(jsonObject.daily[i].dt * 100);

        let flexcol = document.createElement("div");
        flexcol.classList.add("flex-col");

        let col_head_span = document.createElement("span");
        col_head_span.classList.add("col-head");
        col_head_span.textContent = forecastdate.toLocaleString("default", {
          weekday: "short",
        });
        flexcol.appendChild(col_head_span);

        let weather_info_div = document.createElement("div");
        weather_info_div.classList.add("weather-info");
        flexcol.appendChild(weather_info_div);

        let img = document.createElement("img");
        img.setAttribute(
          "src",
          `images/${jsonObject.daily[i].weather[0].icon}.png`
        );
        img.setAttribute(
          "alt",
          `Icon depicting ${jsonObject.daily[i].weather[0].description} in Sao Paulo, Brazil`
        );
        img.setAttribute("loading", "lazy");
        img.setAttribute("height", "128");
        img.setAttribute("width", "128");
        weather_info_div.appendChild(img);

        let data_span = document.createElement("span");
        data_span.classList.add("data");
        data_span.innerHTML = `${Math.round(
          jsonObject.daily[i].temp.day
        )}&#176;F`;
        weather_info_div.appendChild(data_span);

        document.querySelector("div.flex").appendChild(flexcol);
      });
    //#endregion

    //#region Weather Alerts
    if (jsonObject.alerts) {
      Object.keys(jsonObject.alerts).forEach((i) => {
        let banner = document.createElement("section");
        banner.classList.add("weather-alert");

        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.innerHTML = "&times;";
        button.classList.add("close-button");
        button.addEventListener("click", () => {
          banner.remove("weather-alert");
        });

        let title = document.createElement("h2");
        title.textContent = jsonObject.alerts[i].event;

        let description = document.createElement("p");
        description.style.display = "none";
        description.textContent = jsonObject.alerts[i].description;
        description.textContent = description.textContent.replaceAll(
          "...",
          " - "
        );
        description.innerHTML = description.innerHTML.replaceAll(
          "*",
          "<br><br>"
        );

        let showbutton = document.createElement("button");
        showbutton.setAttribute("type", "button");
        showbutton.innerHTML = "Show Details &#9651;";
        showbutton.classList.add("show-button");
        showbutton.addEventListener("click", () => {
          if (description.style.display == "none") {
            description.style.display = "block";
            showbutton.innerHTML = "Show Details &#9661;";
          } else {
            description.style.display = "none";
            showbutton.innerHTML = "Show Details &#9651;";
          }
        });

        banner.appendChild(button);
        banner.appendChild(title);
        banner.appendChild(showbutton);
        banner.appendChild(description);

        const body = document.querySelector("body");
        body.prepend(banner);
      });
    } else {
      bannerClass = document.querySelector("weather-alert");
      if (bannerClass) {
        banner.remove("weather-alert");
      }
    }
    //#endregion
  });
//#endregion
