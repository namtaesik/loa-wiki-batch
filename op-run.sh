TARGET=$1
HOSTNAME=$(hostname)

if [ -z "$TARGET" ]; then
  echo "Error: Environment argument ['local', 'dev', 'prod'] is missing."
  exit 1
fi

if [ "$TARGET" != "local" ] && [ "$TARGET" != "dev" ] && [ "$TARGET" != "prod" ]; then
  echo "Error: Environment argument must be one of ['local', 'dev', 'prod']."
  exit 2
fi

echo "AppRunTarget($TARGET, $HOSTNAME)..............................Start"

echo "Docker..............................Start"
echo "[docker compose down]"
TARGET=$TARGET HOSTNAME=$HOSTNAME docker compose -f ./docker-compose-loa-wiki-batch.yml down

echo "[docker compose up]"
TARGET=$TARGET HOSTNAME=$HOSTNAME docker compose -f ./docker-compose-loa-wiki-batch.yml up -d
echo "Docker..............................End"

echo "AppRunTarget($TARGET, $HOSTNAME)..............................End"
