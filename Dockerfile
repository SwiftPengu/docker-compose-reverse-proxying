FROM nginx:alpine

RUN apk add --update --no-cache nodejs
COPY src/* templates/* main.sh /
CMD ["/bin/sh", "main.sh"]
