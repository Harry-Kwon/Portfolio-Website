# Harry Kwon's Website

A website showcasing my work!

Built with React and Material-UI.

# Docker Instructions
`Dockerfile` creates the image for the dev server.
Build with:
```
docker run \
  -it \
  --rm \
  -v ${PWD}:/app \
  -v /app/node_modules \
  -p 3001:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  portfolio:dev
```

`Dockerfile.prod` create the image for the production server.
Build with: 
```
docker build -f Dockerfile.prod -t portfolio:prod .
```

And run with:
```
docker run -it --rm -p 8001:80 portfolio:prod
```