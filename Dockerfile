# Base image
FROM node:22.0.0-alpine AS base

RUN corepack enable

# Install all dependencies
FROM base AS deps

WORKDIR /app

ADD package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Build with dev dependencies
FROM base AS build

ENV NODE_ENV=production

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

ADD ./package.json ./pnpm-lock.yaml ./
ADD ./babel.config.json ./postcss.config.js ./tailwind.config.js ./tsconfig.json ./webpack.config.js ./
ADD ./src ./src
ADD ./public ./public

RUN pnpm run build

# Serve static site
FROM pierrezemb/gostatic

COPY --from=build /app/build/ /srv/http/
