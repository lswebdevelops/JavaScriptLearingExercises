const select = document.getElementById('weather');
const select2 = document.getElementById('temperature');

const para = document.getElementById('p1');
const forChoice = document.getElementById("p2");
const forTemp = document.getElementById("p3");

select.addEventListener('change', setWeather);
select2.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;
  const choice2 = select2.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach,\
        or the park, and get an ice cream.';
    forChoice.textContent="☀";
    if (choice2 === "warm") {
        forTemp.textContent = `It is ${choice2}  outside — nice and sunny.\
         Let\'s go out to the beach, or the park, and get an ice cream.`;
      } else if (choice2 === "hot") {
        forTemp.textContent = `It is ${choice2}  outside — REALLY HOT!\
         If you want to go outside, make sure to put some sunscreen.`;
      }
      else if (choice2 === "freezing") {
        forTemp.textContent = ``;
      }
      else if (choice2 === "cold") {
        forTemp.textContent = ``;
      }
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, \
    and don\'t stay out for too long.';
    forChoice.textContent = "🌧";

    if (choice2 === "warm") {
        forTemp.textContent = `It is ${choice2} and ${choice} outside \
        don't forget your umbrella`;
      } else if (choice2 === "hot") {
        forTemp.textContent = `It is ${choice2} and ${choice} outside. \
        Get home as soon as possible. We may have a storm coming...`;
      }
      else if (choice2 === "cold") {
        forTemp.textContent = `It is ${choice2} and ${choice} outside \
        a nice pair of boots is always  and fashionable.`;
      }
      else if (choice2 === "freezing") {
        forTemp.textContent = ``;
      }


  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in \
    with a cup of hot chocolate, or go build a snowman.';
    forChoice.textContent = "⛄";


    if (choice2 === "warm") {
        forTemp.textContent = ``;
      } else if (choice2 === "hot") {
        forTemp.textContent = ``;
      }
      else if (choice2 === "freezing") {
        forTemp.textContent = `Man! Get inside. I\'m freezing to death here.`;
      }
      else if (choice2 === "cold") {
        forTemp.textContent = `May a nice pair of gloves could help`;
      }







  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could \
    turn any minute, so take a rain coat just in case.';
    forChoice.textContent = "🌡";

    if (choice2 === "warm") {
        forTemp.textContent = `At least it\'s not so hot.`;
      } else if (choice2 === "hot") {
        forTemp.textContent = `Man, cloudy and hot.It\'s dead hot outside.`;
      }
      else if (choice2 === "freezing") {
        forTemp.textContent = `Sun please. I\'d appreciate`;
      }
      else if (choice2 === "cold") {
        forTemp.textContent = `The last think could happen to get worse is start to rain. Oh wait! Now it\'s raining.`;
      }





  } else {
    para.textContent = '';
  }
}

