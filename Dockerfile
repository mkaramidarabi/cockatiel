FROM node:16-alpine as build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


FROM node:16-alpine as production

ARG APP_MODE=PRODUCTION
ENV APP_MODE=${APP_MODE}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i --omit=dev

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/server.js"]
