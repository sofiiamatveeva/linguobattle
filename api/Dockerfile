FROM node:18

WORKDIR /api

COPY package*.json /api/
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]