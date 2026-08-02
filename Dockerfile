FROM nginxinc/nginx-unprivileged:1

COPY public/ /usr/share/nginx/html/

EXPOSE 8080
