let api_key = '49895a1324a52a77fad64f8bc8ec36dd';
let urlBase = `https://api.openweathermap.org/data/2.5/weather`;

document.getElementById("botonBusqueda").addEventListener('click', () =>{
const ciudad = document.getElementById('ciudadEntrada').value
if (ciudad) {
    fetchDatosClima(ciudad);
}
}); 

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&limit=5&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){

    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.ciudadNombre
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const icon = data.weather[0].icon


    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre;

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `la temperatura es: ${temperatura}C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;


    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);
    
}
 

/* 
let urlBase = `https://api.openweathermap.org/data/2.5/weather?      lat=57&lon=-2.15&appid={API key}&units=metric`

let api_key = '49895a1324a52a77fad64f8bc8ec36dd';


fetch(`${urlBase}?q=${ciudad}&limit=5&appid=${api_key}&units=metric`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
 */