FROM node:16-alpine3.11 as builder

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npm", "run", "start"]