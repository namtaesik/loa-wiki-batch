echo "AppBuildTarget(ALL)..............................Start"

echo "Docker..............................Start"
echo "[docker img rm]"
docker image rm loa-wiki-batch-img:current-code

echo "[docker img load]"
docker load -i loa-wiki-batch-img-current-code.tar
echo "Docker..............................End"

echo "AppBuildTarget(ALL)..............................End"
