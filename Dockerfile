# Use a lightweight Node.js image as a base
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the production version of the app
RUN npm run build

# Use a lightweight Nginx image as a base for serving the app
FROM nginx:alpine

# Copy the production build from the previous stage to the Nginx image
COPY --from=0 /app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file to the image
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for serving the app
EXPOSE 80

# Start Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
