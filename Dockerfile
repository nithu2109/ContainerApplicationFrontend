FROM node:18-alpine
# 20.18.0

WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

RUN npm install --force

CMD ["npm", "start"]