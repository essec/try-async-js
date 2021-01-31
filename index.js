const Ora = require('ora')
const axios = require('axios')


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {

  const res = await axios.get('https://swapi.dev/api/people/')
  const data = await res.data
  return data
}

async function getCharacters(data) {
  const characters = await data.results
  if (!characters) {
    return err
  }
  return characters
}

async function main() {
  const spinner = Ora('Starting').start()
  spinner.color = 'cyan'
  spinner.text = 'Loading from swapi'
  data = await getData().then(async res => {
    return res
  }).catch(err => spinner.fail("I don't like sand"))

  spinner.text = 'Loading Characters'
  spinner.color = 'yellow'
  characters = await getCharacters(data).then(async res => {
    await sleep(1000)
    spinner.succeed("Hello there")
    return res
  }).catch(err => spinner.fail("I don't like sand"))
  console.log(characters[0])
}

main()