FROM node:12
WORKDIR /Store
COPY package.json/Store
RUN npm install
COPY .  /Store
CMD node server.js 
EXPOSE 8081
