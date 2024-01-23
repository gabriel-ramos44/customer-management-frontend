FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the React App
RUN npm run build


EXPOSE 3000

CMD [ "node", "build/server.js" ]