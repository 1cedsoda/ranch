FROM node:18-buster
RUN mkdir /ranch-frontend
WORKDIR /ranch-frontend

# Install ranch-proto
COPY ./ranch-proto /ranch-proto 

# Install dependencies
COPY ./ranch-frontend/package.json .
RUN npm i
COPY ./ranch-frontend .

# Run
CMD ["npm", "run", "dev"]