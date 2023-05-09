FROM node:18-buster
RUN mkdir /ranch-frontend
WORKDIR /ranch-frontend

# Install ranch-proto
COPY ./ranch-proto/package*.json /ranch-proto/
RUN cd /ranch-proto && npm i --verbose --omit=dev --omit=optional
COPY ./ranch-proto /ranch-proto

# Install dependencies
COPY ./ranch-frontend/package*.json .
RUN npm i --verbose --omit=dev --omit=optional
COPY ./ranch-frontend .

# Run
CMD ["npm", "run", "dev"]