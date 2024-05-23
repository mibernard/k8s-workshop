FROM node:20

# create app directory
WORKDIR /app

# Make sure both package.json AND package-lock.json are copied
COPY package*.json ./

# install app dependencies
RUN npm install

# bundle app source inside Docker image
COPY . .

EXPOSE 3000
CMD ["npm", "start"]

