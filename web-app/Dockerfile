FROM node:18

WORKDIR /web-app

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3080

CMD ["npm", "start"]
