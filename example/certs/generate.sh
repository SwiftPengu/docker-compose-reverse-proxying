#!/bin/sh
# Example cert generation command which expires within 7 days
openssl req -x509 -nodes -days 7 -newkey rsa:4096 -keyout nginx.key -out nginx.crt