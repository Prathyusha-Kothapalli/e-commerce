# Luna Dresses E-Commerce Container Specification
FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application source code
COPY . .

# Expose application port
EXPOSE 8000

# Start application server
CMD ["npm", "start"]
