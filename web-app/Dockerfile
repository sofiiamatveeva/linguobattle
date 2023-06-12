FROM node:18

WORKDIR /web-app

COPY package*.json /web-app/
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
