# Base config
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

# Dev build
FROM base AS dev
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production build
FROM base AS builder
ARG NEXT_PUBLIC_APPURL
ARG NEXT_PUBLIC_PAYPAL_CLIENTID
ENV NEXT_PUBLIC_APPURL=$NEXT_PUBLIC_APPURL
ENV NEXT_PUBLIC_PAYPAL_CLIENTID=$NEXT_PUBLIC_PAYPAL_CLIENTID

RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS prod
WORKDIR /app

RUN addgroup -g 1001 -S comunidadeff && \
    adduser -u 1001 -S usercomunidadeff  -G comunidadeff

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN chown -R usercomunidadeff:comunidadeff /app
USER usercomunidadeff

EXPOSE 3000
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["node", "server.js"]