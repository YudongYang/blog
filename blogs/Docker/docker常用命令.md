# docker 常用命令

```
# 列出运行中的容器
docker ps
# 列出所有容器
docker ps -a
# 列出镜像
docker images
# 停止容器
docker stop [container id || container name]
# 删除容器
docker rm [container id || container name]
# 删除镜像
docker rmi [image id || image name]
# 运行容器
docker run --name [container id || container name] -d [background run] -p 8080:8080 image name

# 构建镜像
docker build -t [image name] [path]
# 常用，注意那个 .
docker build -t [image name] . 
# 这个意思是在当前目录使用 Dockerfile 进行构建

# 获取容器状态，包括 cpu 占用和 内存 占用
docker stats [--no-stream] [container id]
# 获取容器信息
docker inspect [container id]
# 获取容器 ip
docker inspect --format '{{.NetworkSettings.IPAddress}}' [container id]

# 启动 docker
systemctl daemon-reload && systemctl start docker

# 关闭docker
service docker stop
systemctl stop docker

# 清理
# https://www.cnblogs.com/mr-wuxiansheng/p/11412606.html
# 清理镜像 
docker image prune

# 清理容器
docker container prune

# 删除指定匹配镜像
docker rmi $(docker images | grep '^<none>' | awk '{print $3}')

```