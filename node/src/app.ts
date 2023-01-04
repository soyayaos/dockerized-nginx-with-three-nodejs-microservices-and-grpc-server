import express from 'express'
// @ts-ignore
import * as grpc from '@grpc/grpc-js'
import * as ip from 'ip'
import * as process from 'process'
import { rand } from './lib'

const ip4 = ip.address()
const port = process.env.PORT ?? 18000
const serverId = process.env.SERVER_ID ?? -1
const grpcHost = process.env.GRPC_HOST || 'server'
const grpcPort = process.env.GRPC_PORT || 28000
const randFrom = process.env.RAND_FROM || 10
const randTo = process.env.RAND_TO || 20
const app = express()

// @ts-ignore
const grpcClient = new rand.Randomizer(`${grpcHost}:${grpcPort}`, grpc.credentials.createInsecure())
app.get('/', async (req, res) => {
    grpcClient.SendRand(
        {
            from: randFrom,
            to: randTo,
        },
        // @ts-ignore
        (err, result) => {
            res.json({
                serverId,
                ip4,
                rnd: result.rnd,
            }).end()
        }
    )

})

app.listen(port, () => {
    console.log(`app instance #${serverId} listening @ http://${ip4}:${port}`)
})
