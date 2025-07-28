# Use a lightweight Nginx image as the base
    FROM nginx:alpine

    # Copy the application files into the Nginx web server directory
    COPY . /usr/share/nginx/html

    # Expose port 80 (default HTTP port)
    EXPOSE 80

    # Start Nginx when the container launches
    CMD ["nginx", "-g", "daemon off;"]