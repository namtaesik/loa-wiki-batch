# Base image
FROM node:20-alpine AS builder
# Create app directory
WORKDIR /app
## Copy WORKDIR /app
COPY . .
## NestJS project install & build
RUN npm install
#Prisma.sql`` 사용을 위함
RUN npx prisma generate
RUN npm run build
## Application run
EXPOSE 7001
ENV TARGET="dev"
CMD ["sh", "-c", "npm run start:$TARGET"]
