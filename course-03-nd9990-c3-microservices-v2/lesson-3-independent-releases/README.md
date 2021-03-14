# Lesson 3: Independent Releases

## Travis File example
The Travis file is always named `.travis.yaml` and stored in the top-level of your git directory. This is detected by Travis CI and turned into a build pipeline.
```
language: node_js
node_js:
  - 13

services:
  - docker

# Pre-testing installs
install:
  - echo "nothing needs to be installed"

# Scripts to be run such as tests
before_script:
  - echo "no tests"

script:
  - docker --version # print the version for logging
  - docker build -t simple-node .
  - docker tag simple-node YOUR_DOCKER_HUB/simple-node:latest

# Tasks to perform after the process is successful. Formatting the Docker username and password as below enables you to programmatically log in without having the password exposed in logs.
after_success:
  - echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
  - docker push YOUR_DOCKER_HUB/simple-node
```

## Resources:
- [The Art of Shipping Early and Often](https://www.ycombinator.com/library/40-the-art-of-shipping-early-and-often)
- [Travis CI Features](https://docs.travis-ci.com/user/for-beginners/)
    - [Best Practices in Securing Your Data](https://docs.travis-ci.com/user/best-practices-security/)
- Alternative CI Tools:
    - [Jenkins](https://www.jenkins.io) - most flexible but more overhead of setup
    - [CircleCI](https://circleci.com) - alternative to Travis CI with many competing features
    - [AWS CodeBuild](https://aws.amazon.com/codebuild) - integrates easily with other AWS tools
