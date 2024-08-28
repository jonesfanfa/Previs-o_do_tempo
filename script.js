const apiKey = 'd7a8d944e376f6e9e6fd3af2bb39f6d9';
const lang = 'pt_br';

document.getElementById('cidForm').addEventListener('submit', function(event) {
    event.preventDefault();

        const cityName = document.getElementById('cidInput').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=${lang}&units=metric`;
        
        if (cityName) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
<<<<<<< HEAD
                    if (data === 404) {
                        document.getElementById('resultado').textContent = 'Cidade nao encontrada.';

                    } else {
                        const windSpeed = data.wind.gust ? data.wind.gust : data.wind.speed;
                        document.getElementById('resultado').textContent = `Clima: ${data.weather[0].description}. | Temperatura: ${data.main.temp}ºC | Umidade: ${data.main.humidity}% | Vento: ${windSpeed} km/h`;
                    }
                })
                .catch(error => {
                    document.getElementById('resultado').textContent = 'Não foi possível buscar a cidade.';
                });
        } else {
            document.getElementById('resultado').textContent = 'Digite uma cidade válida.';
        }
    });
=======
                    if (data.erro) {
                        document.getElementById('resultado').textContent = 'Cidade nao encontrada.';

                    } else {
                        
                        document.getElementById('resultado').textContent = `Clima: ${data.weather.main}. | Temperatura: ${data.main.temp}ºC | Umidade: ${data.main.humidity}% | Vento: ${data.wind.gust} km/h`;
                    }
                })
                .catch(error => {
                    document.getElementById('resultado'),textContent = 'Não foi possivel buscar cidade.';

                });
             } else {
                    document.getElementById('resultado').textContent = 'Digite uma cidade válida.';

                }
        });

>>>>>>> c5d146d55e28da05d6542a3157e91ef250515b5d
    
