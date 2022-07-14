FROM node:16-alpine
COPY src/package.json /app/package.json
COPY src/yarn.lock /app/yarn.lock
WORKDIR /app
RUN ["yarn", "install"]

COPY src /app
RUN ["yarn", "build"]