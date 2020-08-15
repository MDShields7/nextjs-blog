const fetch = require('node-fetch')

export default async (req, res) => {
    // res.status(200).json({ text: 'Hello' })
    const id = req.query.id;
    console.log('id is', id)
    await fetch(`https://api.inaturalist.org/v1/observations/${id}`)
    .then(response => res.json(response))
    .catch(e => console.log('error',e))
  }
// 54131832