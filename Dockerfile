# Use the official Node.js runtime as the base image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
# Install all dependencies (including devDependencies) for building
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
# Install build dependencies for lightningcss
RUN apk add --no-cache libc6-compat python3 make g++
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Accept build arguments for environment variables
ARG NEXT_PUBLIC_ENVIRONMENT
# Debug: Print received build args
RUN echo "Build args received:"
RUN echo "NEXT_PUBLIC_ENVIRONMENT=${NEXT_PUBLIC_ENVIRONMENT}"

# Set them as environment variables for the build process
ENV NEXT_PUBLIC_ENVIRONMENT=$NEXT_PUBLIC_ENVIRONMENT

# Debug: Print environment variables
RUN echo "Environment variables set:"
RUN printenv | grep NEXT_PUBLIC

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1


# Build the Next.js application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED=1

# Install SSH server and other necessary packages for Azure
RUN apk add --no-cache openssh-server openrc \
    && mkdir -p /run/openrc \
    && touch /run/openrc/softlevel \
    && ssh-keygen -A \
    && echo "root:Docker!" | chpasswd

# Copy SSH configuration
COPY sshd_config /etc/ssh/

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy package.json and install production dependencies (including next CLI)
COPY package.json package-lock.json* ./
RUN npm ci --only=production && npm cache clean --force

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Set the correct permission for prerender cache
RUN chown -R nextjs:nodejs .next

# Copy and set permissions for entrypoint script
COPY entrypoint.sh ./
RUN chmod +x ./entrypoint.sh

# Expose both Next.js and SSH ports
EXPOSE 3000 2222

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Use entrypoint script
ENTRYPOINT ["./entrypoint.sh"]

## Build this image:
# docker build --no-cache --pull -t oxmaint-ai-website:latest .

## Build this image for AMD64:
# docker build --no-cache --pull --platform linux/amd64 -t oxmaint-ai-website:latest .

## Push the image to a registry:
# docker login -u rahuldhiman1234 -p Password1234!

# Tag the image with your Docker Hub username:
# docker tag oxmaint-ai-website rahuldhiman1234/oxmaint-ai-website:latest

# Push the image to Docker Hub:
# docker push rahuldhiman1234/oxmaint-ai-website:latest

## Run a new container
# docker run -p 3000:3000 -p 2222:2222 --name oxmaint-ai-website-container oxmaint-ai-website:latest

## Pause a container
# docker pause oxmaint-ai-website-container

## Re-start an exited container with changes intact
# docker start oxmaint-ai-website-container
