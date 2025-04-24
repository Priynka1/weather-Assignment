const weatherData = {
  "himachal pradesh": {
    temp: 20,
    condition: "sunny",
    location: "himachal pradesh",
  },

  delhi: {
    temp: 40,
    condition: "hot",
    location: "delhi",
  },
  chandigarh: {
    temp: 30,
    condition: "hot",
    location: "chandigarh",
  },
};

const searchbtn = document.querySelector("#searchbtn");
searchbtn.addEventListener("click", () => {
  const city = document.getElementById("inputBox");
  const inputCity = city.value.toLowerCase();
  city.value = "";

  const result = document.getElementById("result");
  const data = weatherData[inputCity];

  if (data) {
    result.innerHTML = `
      <h3> ${inputCity.toUpperCase()}</h3>
      <p> ${data.temp} °C</p>
      <p> ${data.condition}</p>
      <p> ${data.location}</p>
      
    `;
  } else {
    alert(" Please enter a valid state.");
    // result.innerHTML = `<p>Weather data  not found.</p>`;
  }
});
