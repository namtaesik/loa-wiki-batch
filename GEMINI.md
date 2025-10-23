- 사용자에게 보내는 답변은 한국어로 해야 합니다.
# Database 마이그레이션 - Prisma
## DB 변경사항 적용 Shell Script
npx prisma genegate schema=./prisma/schema.prisma
npx dotenv -e .env.local prisma db push
