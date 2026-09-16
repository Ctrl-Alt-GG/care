FROM nginxinc/nginx-unprivileged:1

LABEL org.opencontainers.image.description="Support and care hub for the Ctrl-Alt-GG LAN community, served as a static Hugo site by nginx."

COPY public/ /usr/share/nginx/html/

EXPOSE 8080
