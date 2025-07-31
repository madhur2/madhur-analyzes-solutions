FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install Vite globally for CLI access
RUN npm install -g vite

# Copy only package files for dependency install
COPY package.json package-lock.json* bun.lockb* ./


# Install bun if bun.lockb exists, otherwise use npm
RUN if [ -f "bun.lockb" ]; then npm install -g bun && bun install; else npm install; fi

# Expose port (Vite default is 8080)
EXPOSE 8080

# Start the dev server
CMD ["npm", "run", "dev"]
