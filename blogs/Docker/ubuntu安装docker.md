# ubuntu 安装 docker & docker-compose

docker 官方安装指引 https://docs.docker.com/engine/install/ubuntu/

1. 清除旧版本 docker 并更新
   
```
$ sudo apt-get remove docker docker-engine docker.io containerd runc
$ sudo apt-get update
```

2. 安装依赖
```
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

3. 添加官方 GPG key 并验证
```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-key fingerprint 0EBFCD88
```

4. 添加 repository
```
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

5. 更新并安装 docker
```
$ sudo apt-get update
# 列出所有版本
$ apt-cache madison docker-ce
# 安装最新版
 $ sudo apt-get install docker-ce docker-ce-cli containerd.io
# 或者安装指定版本
$ sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
```

6. uninstall docker
```
# Uninstall the Docker Engine, CLI, and Containerd packages:
$ sudo apt-get purge docker-ce docker-ce-cli containerd.io
# Images, containers, volumes, or customized configuration files on your host are not automatically removed. To delete all images, containers, and volumes
$ sudo rm -rf /var/lib/docker
```

7. 安装 docker-compose
```
https://github.com/docker/compose/releases

curl -L https://github.com/docker/compose/releases/download/1.23.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

上面安装的是稳定版本1.23.2的 docker-compose，可以到github上找最新版 https://github.com/docker/compose/releases

8. 卸载 docker-compse
```
sudo rm /usr/local/bin/docker-compose
```
