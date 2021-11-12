# pull official node image
FROM node:16.13.0

# set working directory
WORKDIR /app

# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . ./

# install app dependencies
RUN npm install

# build the app
RUN npm run build

# install serve
RUN npm install -g serve

# start app
CMD ["serve", "-s", "build", "-l", "3000", "-n"]