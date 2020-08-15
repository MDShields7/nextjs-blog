import useSWR from 'swr'
const fetch = require('node-fetch')
const axios = require('axios');

export default async function Observation() {
    const id = 54131832;
    console.log('Client Request, id is', id)
    const res = {}
    axios.get(`https://api.inaturalist.org/v1/observations/${id}`)
    .then(function (response) {
      // handle success
      console.log(response.data.results.species_guess);
      res = response.data.results.species_guess
       // return response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    // const { data, error } = useSWR(`https://api.inaturalist.org/v1/observations/${id}`, fetch)
    // if (error) return <div> Did not load</div>
    // if (!data) return <div> Loading...</div>
    // console.log(data)
return <div>{res}</div>
}