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

# Install dependencies
RUN npm i -g pnpm
COPY ./ranch-backend/package.json .
COPY ./ranch-proto /ranch-proto
RUN pnpm i --verbose
COPY ./ranch-backend .

# Run
CMD ["npm", "run", "start"]