# Create image based on the official Node 6 image from dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/toyweb

# Change directory so that our commands run inside this new directory
WORKDIR /usr/toyweb

# Copy dependency definitions
COPY package.json /usr/toyweb

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/toyweb

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]