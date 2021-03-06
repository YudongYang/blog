let fileTree = [{
  text: 'Home',
  link: '/'
}, {
  text: 'Linux',
  link: '/Linux',
  items: [{
    text: 'Linux',
    link: '/Linux/'
  }, {
    text: 'ubuntu安装',
    link: '/Linux/ubuntu安装'
  }, {
    text: '开发环境',
    link: '/Linux/开发环境'
  }, {
    text: '安装psensor',
    link: '/Linux/安装psensor'
  }]
}, {
  text: 'Docker',
  link: '/Docker',
  items: [{
    text: 'docker常用命令',
    link: '/Docker/docker常用命令'
  }, {
    text: 'ubuntu 安装 docker & docker-compose',
    link: '/Docker/ubuntu安装docker'
  }]
}, {
  text: 'Ruby',
  link: '/Ruby',
  items: [{
    text: 'ruby 入门',
    link: '/Ruby/ruby入门'
  }]
}, {
  text: '数据库',
  link: '/Database',
  items: [{
    text: 'PostgreSQL',
    link: '/Database/PostgreSQL/'
  }, {
    text: 'PostgreSQL 安装并测试',
    link: '/Database/PostgreSQL/安装测试'
  }, {
    text: 'ElasticSearch',
    link: '/Database/ElasticSearch/'
  }, {
    text: 'ElasticSearch 安装并测试',
    link: '/Database/ElasticSearch/安装测试'
  }]
}, {
  text: '前端',
  link: '/Front',
  items: [{
    text: 'Vue 入门',
    link: '/Front/vue/vue'
  }, {
    text: 'Webpack 从入门到放弃',
    link: '/Front/webpack/webpack'
  }]
}]

let sidebarTree = []

let changeFileTreeToSidebarTree = () => {
  fileTree.forEach((item) => {
    let childrens = []
    if(item['items'] && item['items'].length > 0) {
      item['items'].forEach((childrenItem) => {
        childrens.push(childrenItem['link'])
      })
    } else {
      childrens = [item['link']]
    }
    sidebarTree.push({
      title: item['text'],
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
  themeConfig: {
    nav: fileTree,
    sidebar: sidebarTree
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-136337873-2' // UA-00000000-0
      }
    ]
  ]
}