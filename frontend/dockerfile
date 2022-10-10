FROM node:16.17.1-alpine3.16 as builder

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm install

COPY . .

RUN npm run build.static

RUN node server/entry.static.js

FROM nginxinc/nginx-unprivileged:1.23-alpine

COPY ./nginx.conf  /etc/nginx/

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 20965
