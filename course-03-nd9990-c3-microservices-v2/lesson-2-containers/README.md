# Lesson 2: Containers

- example create base container:
    - https://www.youtube.com/watch?v=8wsqbWDeDxA
    ```
    Solution Recap
    Our original Dockerfile contained a lot of code to install NodeJS that takes a long time to run.
    Installing NodeJS is a redundant operation -- it shouldn't need to be reinstalled every time we build an image because we don’t expect to make changes to it.
    By using a base image that has NodeJS installed, we can reduce the amount of time it takes to build an image for NodeJS and our application’s code. We would use a pre-existing image that already has NodeJS and just build on top of it for the application’s code
    ```


## Resources:
- debugging containers:
    -  [docker logs](https://docs.docker.com/engine/reference/commandline/logs/)
    - [docker exec](https://docs.docker.com/engine/reference/commandline/exec/)
    - [docker ps](https://docs.docker.com/engine/reference/commandline/ps/)
    - [docker inspect](https://docs.docker.com/engine/reference/commandline/inspect/)
- container registries:
    - [docker registry](https://docs.docker.com/registry/)
    - [Best practices for speeding up builds](https://cloud.google.com/build/docs/speeding-up-builds)
    - pushing to docker hub registries:
        - `docker login --username=<username>`
        - `docker tag <image> <your_dockerhub_name>/<image>`
        - `docker push <your_dockerhub_name>/<image>`
- Additional reading:
    - [Attaching to containers](https://docs.docker.com/engine/reference/commandline/container_attach/)
    - [Debugging Docker](https://www.docker.com/blog/live-debugging-docker/)
