FROM node:alpine

WORKDIR /opt/app

COPY *.json ./

COPY *.proto ./

RUN npm i -g pnpm

RUN pnpm i

COPY . ./

CMD ["pnpm", "start:server"]
