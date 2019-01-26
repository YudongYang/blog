(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(a,t,s){"use strict";s.r(t);var e=s(0),l=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"开发环境搭建-ubuntu-16-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境搭建-ubuntu-16-04","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发环境搭建 ubuntu 16.04")]),a._v(" "),s("h2",{attrs:{id:"以下内容均在-terminal-中完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以下内容均在-terminal-中完成","aria-hidden":"true"}},[a._v("#")]),a._v(" 以下内容均在 terminal 中完成")]),a._v(" "),s("ol",[s("li",[a._v("apt-get\n"),s("ul",[s("li",[a._v("更新 apt-get"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get update\n")])])])]),a._v(" "),s("li",[a._v("将 terminal 设置为登陆模式"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Terminal -> Perferences -> Profiles\nEdit -> Command\n")])])])]),a._v(" "),s("li",[a._v("勾选"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Run command as a login shell\n")])])])])])]),a._v(" "),s("li",[a._v("安装 curl"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("curl sudo apt-get install curl\n")])])])]),a._v(" "),s("li",[a._v("配置 git\n"),s("ul",[s("li",[a._v("安装 git"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install git\n")])])])]),a._v(" "),s("li",[a._v("配置 git 全局设置"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('git config --global user.name "your-name"\ngit config --global user.email "your-email"\n')])])])]),a._v(" "),s("li",[a._v("生成 ssh"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('ssh-keygen -t ras -C "your-ssh-key-name(use email is ok)"\n')])])])])])]),a._v(" "),s("li",[a._v("安装 redis"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install redis-server\n# test\nredis-cli\n> keys *\n")])])])]),a._v(" "),s("li",[a._v("安装 java"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install openjdk-8-jdk\n# test\njava -v\njavac -v\n")])])])]),a._v(" "),s("li",[a._v("安装 node.js\n"),s("ul",[s("li",[a._v("安装 node 版本管理器 rvm"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install build-essnetial libssl-dev\ncurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash\nnvm -v\n")])])])]),a._v(" "),s("li",[a._v("安装 最新稳定版的 nodejs"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm install v10.15.0\n")])])])]),a._v(" "),s("li",[a._v("修改 npm 源"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install cnpm -g --registry=https://registry.taobao.org\n")])])])])])]),a._v(" "),s("li",[a._v("安装 mysql\n三行命令完成，注意有密码设置提示，一定要记住设置的密码"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install mysql-server\nsudo apt-get install mysql-client\nsudo apt-get install libmysqlclient-dev\n")])])])]),a._v(" "),s("li",[a._v("安装 workbench"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install mysql-workbench\n")])])])]),a._v(" "),s("li",[a._v("安装 nginx"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install nginx\n")])])])]),a._v(" "),s("li",[a._v("安装 chromium")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt-get install chromium-browser\n")])])])])}],!1,null,null,null);l.options.__file="开发环境.md";t.default=l.exports}}]);