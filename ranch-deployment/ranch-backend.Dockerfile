FROM node:18-buster
RUN mkdir /ranch-backend
WORKDIR /ranch-backend

# Install C++
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get -y install gcc && \
    rm -rf /var/lib/apt/lists/*

# Install alpaca.cpp
RUN cd / && git clone https://github.com/antimatter15/alpaca.cpp
RUN cd /alpaca.cpp && make chat

# Install ranch-proto
COPY ./ranch-proto/package*.json /ranch-proto/
RUN cd /ranch-proto && npm i --verbose --omit=dev --omit=optional
COPY ./ranch-proto /ranch-proto

# Install dependencies
COPY ./ranch-backend/package*.json .
RUN npm i --verbose --omit=optional
COPY ./ranch-backend .

# Generate prisma client
RUN npx prisma generate

# Run
CMD ["npm", "run", "start"]