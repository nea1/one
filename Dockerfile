FROM node:11-alpine

COPY one.js ./
COPY package*.json ./
RUN npm install

ARG tag
ENV TAG ${tag}

ENTRYPOINT ["node", "one.js" ]