import{_ as e,p as n,q as i,a1 as d}from"./framework-30b324a0.js";const s={},r=d(`<h1 id="docker-常用命令" tabindex="-1"><a class="header-anchor" href="#docker-常用命令" aria-hidden="true">#</a> docker 常用命令</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 列出运行中的容器
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
docker inspect --format &#39;{{.NetworkSettings.IPAddress}}&#39; [container id]

# 启动 docker
systemctl daemon-reload &amp;&amp; systemctl start docker

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
docker rmi $(docker images | grep &#39;^&lt;none&gt;&#39; | awk &#39;{print $3}&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[r];function a(c,v){return n(),i("div",null,l)}const t=e(s,[["render",a],["__file","docker常用命令.html.vue"]]);export{t as default};
