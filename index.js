const express = require("express")
const port = 2626
const axios = require("axios")

function main() {
  let app = express()

  app.get('/', async (req, res) => {
    try {
      let address = req.query["address"]

      const url = `https://testnet-api.jackalprotocol.com/jackal-dao/canine-chain/storage/providers/${address}`

      let r = await axios.get(url)

      let provUrl = r.data.providers.ip + "/version"

      let d = await axios.get(provUrl)

      res.send(d.data)
    } catch (error) {
      res.send({error: "unable to get version from provider"})

    }
    
  })

  app.listen(port, () => {
    console.log(`Jackal provider checker listening on port ${port}`)
  })
}

main()
