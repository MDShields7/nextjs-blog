// const fetch = require('node-fetch')
const axios = require('axios')

export const getServerSideProps = async (context) => {
    const id = 54131832;
    console.log('Server Side Request, id is', id)
    const res = {}
    axios.get(`https://api.inaturalist.org/v1/observations/${id}`)
    .then(function (response) {
      // handle success
      console.log(response.data.results.species_guess);
      res =  response.data.results.species_guess
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    return res
}

export default function (props){
return <div>{props}</div>
}