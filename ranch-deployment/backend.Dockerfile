FROM node:18-buster
RUN mkdir /ranch-backend
WORKDIR /ranch-backend

# Install C++ & git-lfs
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get -y install gcc mono-mcs rsync git-lfs && \
    rm -rf /var/lib/apt/lists/*
RUN git-lfs install

# Install alpaca.cpp
RUN cd / && git-lfs clone https://github.com/antimatter15/alpaca.cpp
RUN cd /alpaca.cpp && make chat

# Install ranch-proto
COPY ./ranch-proto /ranch-proto

# Install dependencies
COPY ./ranch-backend/package.json .
RUN npm i
COPY ./ranch-backend .

# Run
CMD ["sh","run.sh"]