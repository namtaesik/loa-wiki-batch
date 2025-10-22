# Step 1
FROM node:20-alpine AS builder
WORKDIR /app
## Copy WORKDIR /app
COPY . .
## NestJS Project Build
RUN npm install
RUN npm run build

# Step 2
FROM node:20-alpine
WORKDIR /app
## Step 1 Builder Copy
COPY --from=builder /app ./
## Application Run
EXPOSE 7001
ENV TARGET="dev"
CMD ["sh", "-c", "npm run start:$TARGET"]
