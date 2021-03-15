# Lesson 4: Intro to Orchestration with Kubernetes

## Sample deployment.yaml: used to specify how our pods should be created.
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: simple-node
        image: YOUR_DOCKER_HUB/simple-node
        ports:
        - containerPort: 80
```

## Sample service.yaml: used to specify how our pods are exposed.
```
apiVersion: v1
kind: Service
metadata:
  name: my-app
  labels:
    run: my-app
spec:
  ports:
  - port: 80
    protocol: TCP
  selector:
    run: my-app
```

## Running EKS cluster locally:
    - set aws context: `aws eks --region <region> update-kubeconfig --name <cluster name>`

## Useful kubectl commands:
    - shell to running container: `kubectl exec -it {pod_name} /bin/bash`

## Resources:
- [Container Wars](https://codefresh.io/containers/age-container-wars/)
- [Kubernetes Documentation](https://kubernetes.io/docs/home/)
- [Round Robin Load Balancing](https://www.nginx.com/resources/glossary/round-robin-load-balancing/)
- [Docker with Kubernetes](https://www.docker.com/products/kubernetes)
- [AWS EKS](https://aws.amazon.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc)
- [AWS EKS Versioning](https://aws.amazon.com/blogs/compute/updates-to-amazon-eks-version-lifecycle/)
- [Why use EKS](https://itnext.io/kubernetes-is-hard-why-eks-makes-it-easier-for-network-and-security-architects-ea6d8b2ca965)
- [Kubernetes Cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- `kubectl` [Overview](https://kubernetes.io/docs/reference/kubectl/overview/)
- [Kubernetes API](https://kubernetes.io/docs/concepts/overview/kubernetes-api/)
- `kubectl` [Documentation](https://kubectl.docs.kubernetes.io)
- [Get a Shell to a Running Container](https://kubernetes.io/docs/tasks/debug-application-cluster/get-shell-running-container/)

## New Terms in This Lesson
  | Term | Definition |
  | ------------- | ------------- |
  | Horizontal Scaling | Handling increased traffic by creating additional replicas so that traffic can be divided across the replicas |
  | Kubernetes Service | An abstraction of a set of pods and interface for how to interact with the pods |
  | Pods | A set of containers that are deployed together |
  | Load Balancing | Handling traffic by distributing it across different endpoints |
  | Replica | A redundant copy of a resource often used for backups or load balancing |
  | Consumer | An external entity such as a user or program that interfaces with an application |
  | Cluster | A group of resources that are connected to act as a single system |

