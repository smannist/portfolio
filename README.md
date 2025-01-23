# Personal portfolio

This repository contains the source code to my portfolio, which is still under
heavy development. The design principle focuses on a minimalistic style,
avoiding excessive embellishments. Link to the
[portfolio](https://portfolio-dun-phi-86.vercel.app/).

## Running the app in dev mode using Docker

Pull the image from Docker Hub

```bash
docker image pull smannist/portfolio:1.0
```

And run it

```bash
docker run -p 3000:3000 smannist/portfolio:1.0
```

Alternatively, you can chain the commands this will first pull the image and
then run it

```bash
docker image pull smannist/portfolio:1.0 && docker run -p 3000:3000 smannist/portfolio:1.0
```

Then navigate to http://localhost:3000 to preview the website
