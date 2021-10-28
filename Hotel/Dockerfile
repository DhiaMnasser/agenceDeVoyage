FROM node:8

# Create app directory and epgpub directory

WORKDIR /Hotel
COPY package.json .
RUN npm install
COPY . .
CMD npm start