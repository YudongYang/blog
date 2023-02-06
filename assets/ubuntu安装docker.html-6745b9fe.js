import{_ as e,p as i,q as d,a1 as n}from"./framework-30b324a0.js";const s={},a=n(`<h1 id="ubuntu-安装-docker-docker-compose" tabindex="-1"><a class="header-anchor" href="#ubuntu-安装-docker-docker-compose" aria-hidden="true">#</a> ubuntu 安装 docker &amp; docker-compose</h1><p>docker 官方安装指引 https://docs.docker.com/engine/install/ubuntu/</p><ol><li>清除旧版本 docker 并更新</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo apt-get remove docker docker-engine docker.io containerd runc
$ sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装依赖</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo apt-get install \\
    apt-transport-https \\
    ca-certificates \\
    curl \\
    gnupg-agent \\
    software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>添加官方 GPG key 并验证</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-key fingerprint 0EBFCD88
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>添加 repository</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo add-apt-repository \\
   &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu \\
   $(lsb_release -cs) \\
   stable&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>更新并安装 docker</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo apt-get update
# 列出所有版本
$ apt-cache madison docker-ce
# 安装最新版
 $ sudo apt-get install docker-ce docker-ce-cli containerd.io
# 或者安装指定版本
$ sudo apt-get install docker-ce=&lt;VERSION_STRING&gt; docker-ce-cli=&lt;VERSION_STRING&gt; containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>uninstall docker</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Uninstall the Docker Engine, CLI, and Containerd packages:
$ sudo apt-get purge docker-ce docker-ce-cli containerd.io
# Images, containers, volumes, or customized configuration files on your host are not automatically removed. To delete all images, containers, and volumes
$ sudo rm -rf /var/lib/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>安装 docker-compose</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/docker/compose/releases

curl -L https://github.com/docker/compose/releases/download/1.23.2/docker-compose-\`uname -s\`-\`uname -m\` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面安装的是稳定版本1.23.2的 docker-compose，可以到github上找最新版 https://github.com/docker/compose/releases</p><ol start="8"><li>卸载 docker-compse</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo rm /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),l=[a];function t(o,c){return i(),d("div",null,l)}const u=e(s,[["render",t],["__file","ubuntu安装docker.html.vue"]]);export{u as default};
