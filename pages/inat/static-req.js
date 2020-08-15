// const { getStaticProps } = require("..")
// const fetch = require('node-fetch')
const axios = require('axios')

export default function StaticReq () {
    let final;
    inatReq()
    .then(function (response) {
    // console.log(observationData)
    // return <div key={observationData.id}>{observationData}</div>
    final =  <div>
            {response.map(({name}) => {
                <p>{name}</p>
            {/* {observationData.map(({name}) => {
                <p>{name}</p> */}
            })}</div>
    })
    return final;
}
// export const getStaticProps = async (context) => {
export const inatReq = async (context) => {
    // const id = req.query.id;
    const id = 54131832;
    console.log('Build time request, id is', id)
    const res  = await axios.get(`https://api.inaturalist.org/v1/observations/${id}`)
    .then(function (response) {
        // handle success
        // console.log('guess',response.data.results[0].species_guess);
        const observationData = response.data.results[0].json();
        //   const observationData = JSON.stringify([response.data.results[0].species_guess]);
        //   const observationData = JSON.stringify([response.data.results[0].species_guess]);
        //   const observationData = JSON.stringify([{'name':response.data.results[0].species_guess}]);
        //   const observationData = [response.data.results[0].species_guess.json()];
        //   const observationData = {response.data.results[0].species_guess.json()};
        // const observationData = [{'id':response.data.results[0].species_guess}];
        console.log('observationData',observationData);
        // let final = {props:{'name':response.data.results[0].species_guess}};
        // return {
        //     props: {
        //         observationData
        //     }
        //   }
        return observationData;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}