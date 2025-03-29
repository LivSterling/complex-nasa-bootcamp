//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://data.nasa.gov/resource/gvk9-iz74.json`
  const weatherUrl = `https://api.weatherbit.io/v2.0/current?key=24dea913fd5046a8a94720d1ed563839&units=I`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

