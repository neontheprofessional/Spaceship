FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY index.html /index.html