FROM node:10.16-alpine

# Copy app source
COPY . /app

# Set work directory to /app
WORKDIR /app

# Install Node.js dependencies
RUN cd /app

# 300sec
RUN yarn config set network-timeout 300000
RUN yarn install && yarn run build
RUN yarn global add serve

# expose the port to outside world
EXPOSE 5000

CMD ["serve", "-s", "build"]
