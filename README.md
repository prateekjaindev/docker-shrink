# Docker Image Optimization: A Step-by-Step Guide

This repository contains Dockerfiles demonstrating the process of optimising Docker images for efficiency, security, and performance. The goal is to reduce the size of your Docker images while maintaining functionality and improving deployment times.

## Phases

### Phase 1: The Standard Baseline Approach  
Start with a typical Node.js Dockerfile — large, simple, and unoptimized.

### Phase 2: Choosing the Right Base Image  
Swap the default base image for a lighter alternative to immediately cut image size.

### Phase 3: Using Alpine Base Images  
Leverage Alpine Linux to dramatically reduce image size, with caveats to consider.

### Phase 4: Multi-Stage Builds + `.dockerignore`  
Use multi-stage builds to separate build-time and runtime dependencies and exclude unnecessary files.

### Phase 5: Going Distroless  
Eliminate the OS layer entirely for maximum security and minimal attack surface.

### Phase 6: Static Binaries  
Compile the app into a self-contained binary to strip away all runtime dependencies.