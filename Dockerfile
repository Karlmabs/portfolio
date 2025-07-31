# Multi-stage build for production optimization
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage with nginx
FROM nginx:alpine AS production

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create non-root user and set up nginx for non-root execution
RUN addgroup -g 1001 -S nodejs && \
    adduser -S portfolio -u 1001 && \
    chown -R portfolio:nodejs /usr/share/nginx/html && \
    chown -R portfolio:nodejs /var/cache/nginx && \
    chown -R portfolio:nodejs /var/log/nginx && \
    chown -R portfolio:nodejs /etc/nginx/conf.d && \
    chown -R portfolio:nodejs /var/run && \
    chown -R portfolio:nodejs /tmp && \
    # Create a custom nginx.conf without user directive and writable pid location
    echo 'worker_processes auto;' > /etc/nginx/nginx.conf && \
    echo 'error_log /tmp/nginx_error.log notice;' >> /etc/nginx/nginx.conf && \
    echo 'pid /tmp/nginx.pid;' >> /etc/nginx/nginx.conf && \
    echo 'events { worker_connections 1024; }' >> /etc/nginx/nginx.conf && \
    echo 'http { include /etc/nginx/mime.types; default_type application/octet-stream; include /etc/nginx/conf.d/*.conf; }' >> /etc/nginx/nginx.conf

# Switch to non-root user
USER portfolio

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]