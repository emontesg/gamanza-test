const BASE_URL = 'https://breakingbadapi.com/api/'

function getData(path) {
  return fetch(BASE_URL + path).then((res) => res.json())
}

export function getCharacters() {
  return getData('characters?limit=6')
}

export function getDeaths() {
  return getData('deaths')
}
