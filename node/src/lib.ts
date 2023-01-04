import * as loader from '@grpc/proto-loader'
import * as grpc from '@grpc/grpc-js'

const def = loader.loadSync(`${__dirname}/../rand.proto`, {
    defaults: true,
    enums: String,
    keepCase: true,
    longs: String,
    oneofs: true,
})
export const { rand } = grpc.loadPackageDefinition(def)