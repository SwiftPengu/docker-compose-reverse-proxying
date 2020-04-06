# Nginx Reverse SSL-proxy image

## Why reverse proxying?

When exposing multiple HTTP servers, you'd normally want to enable SSL for security.
However, this requires generating and/or distribution SSL certificates over multiple applications.

It is possible to set up a reverse HTTP proxy which provides an HTTPS endpoint to the outside world, while forwarding all traffic as regular HTTP traffic.
Using such a reverse proxy may alleviate the configuration side of things by requiring configuration of said reverse proxy.

## What is this project?

This project includes a docker image with an augmented version of the nginx HTTP server. This image allows configuration of the reverse proxy using ENV vars. As a result, no (knowledge of) nginx configuration is required to set up a reverse SSL proxy.

As an example, this project demonstrates how to use the image to set up a reverse proxy for a docker-compose stack.