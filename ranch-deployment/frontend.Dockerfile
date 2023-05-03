FROM node:18-buster
RUN mkdir /ranch-frontend
WORKDIR /ranch-frontend

# Install dependencies
COPY ./ranch-frontend/package*.json .
COPY ./ranch-proto /ranch-proto 
RUN npm i
COPY ./ranch-frontend .

# Run
CMD ["npm", "run", "dev"]