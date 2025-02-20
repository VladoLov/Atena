# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before running npm install
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install 

# Copy the entire project to the working directory
COPY . .

# Set environment variables at build time


# Build the Next.js app
RUN npm run build

# Create a new stage for the final container
FROM node:18-alpine AS runner

# Set working directory inside the container
WORKDIR /app

# Docker Secrets - Ensure it is mounted in /run/secrets/
RUN mkdir -p /run/secrets

# Copy required files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Expose the Next.js port (default: 3000)
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
