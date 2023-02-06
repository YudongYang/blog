import{_ as e,p as i,q as a,a1 as l}from"./framework-30b324a0.js";const s={},n=l(`<h1 id="开发环境搭建-ubuntu-16-04" tabindex="-1"><a class="header-anchor" href="#开发环境搭建-ubuntu-16-04" aria-hidden="true">#</a> 开发环境搭建 ubuntu 16.04</h1><h2 id="以下内容均在-terminal-中完成" tabindex="-1"><a class="header-anchor" href="#以下内容均在-terminal-中完成" aria-hidden="true">#</a> 以下内容均在 terminal 中完成</h2><ol><li>apt-get <ul><li>更新 apt-get<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>将 terminal 设置为登陆模式<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Terminal -&gt; Perferences -&gt; Profiles
Edit -&gt; Command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>勾选<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Run command as a login shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li>安装 curl<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl sudo apt-get install curl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>配置 git <ul><li>安装 git<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>配置 git 全局设置<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;your-name&quot;
git config --global user.email &quot;your-email&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>生成 ssh<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t ras -C &quot;your-ssh-key-name(use email is ok)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li>安装 redis<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install redis-server
# test
redis-cli
&gt; keys *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>安装 java<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install openjdk-8-jdk
# test
java -v
javac -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>安装 node.js <ul><li>安装 node 版本管理器 rvm<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install build-essnetial libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
nvm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>安装 最新稳定版的 nodejs<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm install v10.15.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>修改 npm 源<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install cnpm -g --registry=https://registry.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li>安装 mysql 三行命令完成，注意有密码设置提示，一定要记住设置的密码<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install mysql-server
sudo apt-get install mysql-client
sudo apt-get install libmysqlclient-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>安装 workbench<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install mysql-workbench
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>安装 nginx<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>安装 chromium</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install chromium-browser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="11"><li>安装 rvm &amp; ruby</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\\curl -sSL https://get.rvm.io | bash -s stable
source /home/yudong/.rvm/scripts/rvm
rvm install 2.5.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[n];function t(r,u){return i(),a("div",null,d)}const v=e(s,[["render",t],["__file","开发环境.html.vue"]]);export{v as default};
