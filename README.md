## Description

Nginx as load balancer for 3 NodeJs apps connected to common server via grpc

## Usage

```shell
docker-compose up --build
```

```shell
for counter in {1..3}; do curl -i http://127.0.0.1:18000 && echo; done
HTTP/1.1 200 OK
Server: nginx/1.23.2
Date: Wed, 04 Jan 2023 19:12:48 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 46
Connection: keep-alive
X-Powered-By: Express
ETag: W/"2e-zh6kdd3ougklgGrZm8o5Gr8MAak"

{"serverId":"1","ip4":"172.18.0.3","rnd":1561}
HTTP/1.1 200 OK
Server: nginx/1.23.2
Date: Wed, 04 Jan 2023 19:12:48 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 46
Connection: keep-alive
X-Powered-By: Express
ETag: W/"2e-+H8IO8Nz+L3fCLPn+HIeOTZhzGU"

{"serverId":"2","ip4":"172.18.0.5","rnd":3986}
HTTP/1.1 200 OK
Server: nginx/1.23.2
Date: Wed, 04 Jan 2023 19:12:48 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 46
Connection: keep-alive
X-Powered-By: Express
ETag: W/"2e-tUgv5fW2E82XsUYIIr47G4z5ur4"

{"serverId":"3","ip4":"172.18.0.6","rnd":5924}
```

## License

[MIT](./LICENSE)