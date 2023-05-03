FROM node:18-buster
RUN mkdir /ranch-frontend
WORKDIR /ranch-frontend

# Install dependencies
RUN npm i -g pnpm
COPY ./ranch-frontend/package*.json .
COPY ./ranch-proto /ranch-proto 
RUN pnpm i --verbose
COPY ./ranch-frontend .

# Run
CMD ["npm", "run", "dev"]