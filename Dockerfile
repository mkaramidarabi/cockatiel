FROM node:16-alpine as build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:16 as production

ARG APP_MODE=PRODUCTION
ENV APP_MODE=${APP_MODE}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production

COPY --from=build /usr/app/src/dist ./dist

CMD ["node", "dist/server.js"]
