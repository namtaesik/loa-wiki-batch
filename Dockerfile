FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN apk add --no-cache openssl
RUN npm install
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env.* ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma/loa-wiki ./prisma/loa-wiki
RUN apk add --no-cache openssl
RUN npm install --production

EXPOSE 7001
ENV TARGET="dev"
CMD ["sh", "-c", "npm run start:$TARGET"]
