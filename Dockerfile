# Base config
FROM node:22 AS base
WORKDIR /app
COPY package*.json ./

# Dev build
FROM base AS dev
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production build
FROM base AS prod
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start"]
