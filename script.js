const select = document.querySelector('select');
const para = document.getElementById('p1');
const forChoice = document.querySelector("p");

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach,\
        or the park, and get an ice cream.';
    forChoice.textContent="☀";
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, \
    and don\'t stay out for too long.';
    forChoice.textContent = "🌧";
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in \
    with a cup of hot chocolate, or go build a snowman.';
    forChoice.textContent = "⛄";
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could \
    turn any minute, so take a rain coat just in case.';
    forChoice.textContent = "🌡";
  } else {
    para.textContent = '';
  }
}

textContent

choice === select.value;
