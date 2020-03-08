FROM node:8
COPY . .
RUN npm install
EXPOSE 80
WORKDIR .
CMD node app.js
CMD npm start
