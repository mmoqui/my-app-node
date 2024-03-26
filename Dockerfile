FROM node:bookworm-slim

MAINTAINER Miguel Moquillon "miguel.moquillon@gmail.com"
LABEL name="My App" description="My application accessible by a REST API"

RUN set -e; \
    mkdir -p /home/node/node_modules && chown -R node:node /home/node/

WORKDIR /home/node

USER node:node

COPY --chown=node:node package*.json ./
COPY --chown=node:node myapp.js queries.js ./

RUN npm install

EXPOSE 8080

CMD ["node", "myapp.js"]