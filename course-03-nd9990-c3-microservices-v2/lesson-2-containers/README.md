# Lesson 2: Containers

## Sample Dockerfile
  ```
  # Use NodeJS base image
  FROM node:13

  # Create app directory in Docker
  WORKDIR /usr/src/app

  # Install app dependencies by copying
  # package.json and package-lock.json
  COPY package*.json ./

  # Install dependencies in Docker
  RUN npm install

  # Copy app from local environment into the Docker image
  COPY . .

  # Set the API’s port number
  EXPOSE 8080

  # Define Docker’s behavior when the image is run
  CMD ["node", "server.js"]
  ```

## Basic Commands:
  `docker build .` will run the Dockerfile to create an image
  `docker images` will print all the available images
  `docker run {IMAGE_ID}` will run a container with the image
  `docker ps` will print all the running containers
  `docker kill {CONTAINER_ID}` will terminate the container

## Example create base container:
    - https://www.youtube.com/watch?v=8wsqbWDeDxA
    ```
    Solution Recap
    Our original Dockerfile contained a lot of code to install NodeJS that takes a long time to run.
    Installing NodeJS is a redundant operation -- it shouldn't need to be reinstalled every time we build an image because we don’t expect to make changes to it.
    By using a base image that has NodeJS installed, we can reduce the amount of time it takes to build an image for NodeJS and our application’s code. We would use a pre-existing image that already has NodeJS and just build on top of it for the application’s code
    ```


## Resources:
- [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- Debugging containers:
    -  [docker logs](https://docs.docker.com/engine/reference/commandline/logs/)
    - [docker exec](https://docs.docker.com/engine/reference/commandline/exec/)
    - [docker ps](https://docs.docker.com/engine/reference/commandline/ps/)
    - [docker inspect](https://docs.docker.com/engine/reference/commandline/inspect/)
- Container registries:
    - [docker registry](https://docs.docker.com/registry/)
    - [Best practices for speeding up builds](https://cloud.google.com/build/docs/speeding-up-builds)
    - pushing to docker hub registries:
        - `docker login --username=<username>`
        - `docker tag <image> <your_dockerhub_name>/<image>`
        - `docker push <your_dockerhub_name>/<image>`
- Additional reading:
    - [Attaching to containers](https://docs.docker.com/engine/reference/commandline/container_attach/)
    - [Debugging Docker](https://www.docker.com/blog/live-debugging-docker/)


## New Terms in This Lesson
  | Term | Definition |
  | ------------- | ------------- |
  | Base Image | A set of common dependencies built into a Docker image that acts as a starting point to build an application’s Docker images to reduce build times |
  | Container	| Grouped software dependencies and packages that make it easier and more reliable to deploy software |
  | Container Registry	| A centralized place to store container images |
  | Docker-compose	| A tool used to run multiple Docker containers at once; often used to specify dependent relationships between containers |
  | Dockerfile	| A file containing instructions on how to translate an application into an image that can be run in containers |
  | Ephemeral	| Software property where an application is expected to be short-lived |
  | Image	| A snapshot of dependencies and code used by Docker containers to run an application |
  | System Process | A computer program run by the operating system |
