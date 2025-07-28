FROM nginx

COPY nginx.conf /etc/nginx/conf.d/

COPY index.html /var/www/html/
COPY styles.css /var/www/html/
COPY scripts.js /var/www/html/