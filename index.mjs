import Ora from 'ora';
import { get } from 'axios';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
  const res = await get('https://swapi.dev/api/people/')
  const data = await res.data
  return data
}

async function getCharacters(data) {
  const characters = await data.results
  return characters
}

async function main() {
  data = await getData()
  characters = await getCharacters(data)
  console.log(characters[1])
}

main()