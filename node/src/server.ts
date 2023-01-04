import * as grpc from '@grpc/grpc-js'
import * as ip from 'ip'
import process from 'process'
import { rand } from './lib'

const ip4 = ip.address()
const grpcPort = process.env.GRPC_PORT || 28000
const randGen = (from: number, to: number): number => {
    return Math.floor(Math.random() * (to - from + 1) + from)
}

// @ts-ignore
const sendRand = (call, callback) => {
    callback(null, {
        rnd: randGen(call.request.from, call.request.to)
    })
};

(() => {
    const server = new grpc.Server()
    // @ts-ignore
    server.addService(rand.Randomizer.service, {
        SendRand: sendRand,
    })
    server.bindAsync(`${ip4}:${grpcPort}`, grpc.ServerCredentials.createInsecure(), () => {
        console.log(`grpc server listening @ grpc://${ip4}:${grpcPort}`)
        server.start()
    })
})()