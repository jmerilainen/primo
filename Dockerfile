# Base image
FROM node:16.17.1-alpine as base

# Install all dependencies
FROM base as deps

WORKDIR /app

ADD package.json yarn.lock ./

RUN yarn install

# Build with dev dependencies
FROM base as build

ENV NODE_ENV=production

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

ADD ./package.json ./yarn.lock ./
ADD ./babel.config.json ./postcss.config.js ./tailwind.config.js ./tsconfig.json ./webpack.config.js ./
ADD ./src ./src
ADD ./public ./public

RUN npm run build

# Serve static site
FROM pierrezemb/gostatic

COPY --from=build /app/build/ /srv/http/
