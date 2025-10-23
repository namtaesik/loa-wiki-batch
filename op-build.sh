echo "AppBuildTarget(ALL)..............................Start"

echo "Git..............................Start"
echo "[git log]"
git log -1
echo "Git..............................End"

echo "Docker..............................Start"
echo "[docker img build]"
docker build -t loa-wiki-batch-img:current-code -f Dockerfile .

echo "[docker img save]"
docker save -o loa-wiki-batch-img-current-code.tar loa-wiki-batch-img:current-code

echo "[docker images <none> delete]"
docker images -f "dangling=true" -q | xargs -r docker rmi

echo "[docker cache delete]"
docker builder prune -a -f
echo "Docker..............................End"

echo "AppBuildTarget(ALL)..............................End"
