let fileTree = [{
  text: 'Home',
  link: '/'
}, {
  text: 'Linux',
  link: '/Linux',
  children: [{
    text: 'Linux',
    link: '/Linux/'
  }, {
    text: 'ubuntu安装',
    link: '/Linux/ubuntu安装.md'
  }, {
    text: '开发环境',
    link: '/Linux/开发环境.md'
  }, {
    text: '安装psensor',
    link: '/Linux/安装psensor.md'
  }]
}, {
  text: 'Docker',
  // link: '/Docker',
  children: [{
    text: 'docker常用命令',
    link: '/Docker/docker常用命令.md'
  }, {
    text: 'ubuntu 安装 docker & docker-compose.md',
    link: '/Docker/ubuntu安装docker.md'
  }]
}, {
  text: 'Ruby',
  // link: '/Ruby',
  children: [{
    text: 'ruby 入门',
    link: '/Ruby/ruby入门.md'
  }]
}, {
  text: '数据库',
  // link: '/Database',
  children: [{
    text: 'PostgreSQL',
    link: '/Database/PostgreSQL/index.md'
  }, {
    text: 'PostgreSQL 安装并测试',
    link: '/Database/PostgreSQL/安装测试.md'
  }, {
    text: 'ElasticSearch',
    link: '/Database/ElasticSearch/index.md'
  }, {
    text: 'ElasticSearch 安装并测试',
    link: '/Database/ElasticSearch/安装测试.md'
  }]
}, {
  text: '前端',
  // link: '/Front',
  children: [{
    text: 'Vue 入门',
    link: '/Front/vue/vue.md'
  }, {
    text: 'Webpack 从入门到放弃',
    link: '/Front/webpack/webpack.md'
  }]
}]

let sidebarTree = []

let changeFileTreeToSidebarTree = () => {
  fileTree.forEach((item) => {
    let childrens = []
    if(item['children'] && item['children'].length > 0) {
      item['children'].forEach((childrenItem) => {
        childrens.push(childrenItem['link'])
      })
    } else {
      childrens = [item['link']]
    }
    sidebarTree.push({
      text: item['text'],
      link: item['link'],
      collapsable: true,
      children: childrens
    })
  })
}

changeFileTreeToSidebarTree()

// let recursiveGetItem = (tree) => {
//   console.log(tree)
//   if(!tree['items']) {
//     return {title: tree['text'], collapsable: false, children: ['/']}
//   }
//   let childrens = []
//   if(tree['items'].length > 0) {
//     tree['items'].forEach((item) => {
//       childrens.push(recursiveGetItem(item))
//     })
//   }
//   return {title: tree['text'], collapsable: false, children: childrens}
// }

// fileTree.forEach((fileItem) => {
//   sidebarTree.push(recursiveGetItem(fileItem))
// })

const { defaultTheme } = require('@vuepress/theme-default')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

module.exports = {
  base: '/',
  title: '宇东的博客',
  description: '这是宇东的博客',
  head: [
    ['link', {rel: 'icon', href: '/avatar/sea.jpeg'}]
  ],
  host: '127.0.0.1',
  port: '8080',
  dest: 'docs',
  theme: defaultTheme({
    navbar: fileTree,
    sidebar: sidebarTree,
    repo: 'YudongYang/blog'
  }),
  plugins: [
    googleAnalyticsPlugin({
      'id': 'UA-136337873-2'
    })
  ]
}