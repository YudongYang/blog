let fileTree = [{
  text: 'Home',
  link: '/'
}, {
  text: 'Linux',
  link: '/Linux',
  items: [{
    text: 'ubuntu安装',
    link: '/Linux/ubuntu安装'
  }, {
    text: '开发环境',
    link: '/Linux/开发环境'
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
  description: '这是宇东的博客，纯粹是个记事本',
  head: [
    ['link', {rel: 'icon', href: '/avatar/sea.jpeg'}]
  ],
  host: '127.0.0.1',
  port: '8080',
  dest: 'dist',
  themeConfig: {
    nav: fileTree,
    sidebar: sidebarTree
  }
}