TARGET=$1
TOKEN=$2
HOSTNAME=$(hostname)

if [ -z "$TARGET" ]; then
  echo "Error: Environment argument ['test', 'dev', 'prod'] is missing."
  exit 1
fi

if [ "$TARGET" != "test" ] && [ "$TARGET" != "dev" ] && [ "$TARGET" != "prod" ]; then
  echo "Error: Environment argument must be one of ['test', 'dev', 'prod']."
  exit 2
fi

echo "AppRunTarget($TARGET, $HOSTNAME)..............................Start"

echo "DockerCompose..............................Start"
echo "[docker compose down]"
TARGET=$TARGET HOSTNAME=$HOSTNAME docker compose -f ./docker-compose-loa-wiki-batch.yml down

echo "[docker compose up]"
TARGET=$TARGET HOSTNAME=$HOSTNAME docker compose -f ./docker-compose-loa-wiki-batch.yml up -d --build

echo "[docker images <none> delete]"
docker images -f "dangling=true" -q | xargs -r docker rmi

echo "[docker cache delete]"
docker builder prune -a -f
echo "DockerCompose..............................End"

echo "AppRunTarget($TARGET, $HOSTNAME)..............................End"
