# Harry Kwon's Website

A website showcasing my work!

Built with React and Material-UI.

# Docker Instructions
`Dockerfile` creates the image deploy the server
Build with:
```
docker build -f Dockerfile -t portfolio.dev .
```

Run with:
```
docker run -it --rm -p 3000:3000 portfolio:dev
```

Will serve the app on port 3000