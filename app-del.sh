TARGET=$1
HOSTNAME=$(hostname)

if [ -z "$TARGET" ]; then
  echo "Error: Environment argument ['test', 'dev', 'prod'] is missing."
  exit 1
fi

if [ "$TARGET" != "test" ] && [ "$TARGET" != "dev" ] && [ "$TARGET" != "prod" ]; then
  echo "Error: Environment argument must be one of ['test', 'dev', 'prod']."
  exit 2
fi

echo "AppDelTarget($TARGET, $HOSTNAME)..............................Start"

echo "DockerCompose..............................Start"
echo "[docker compose down]"
TARGET=$TARGET HOSTNAME=$HOSTNAME docker compose -f ./docker-compose-loa-wiki-batch down
echo "DockerCompose..............................End"

echo "AppDelTarget($TARGET, $HOSTNAME)..............................End"
