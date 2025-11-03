# Use a lightweight Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the dev port
EXPOSE 5173

# Enable hot reload and run the dev server
CMD ["npm", "run", "dev", "--", "--host"]
