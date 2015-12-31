# cellar 2.0

> cellar中文意思酒窖，希望这里的每一篇博文都是一瓶美酒佳酿，这是建立这个项目的美好愿景。

## 项目概述

秉承 cellar 1.0 的内容，cellar 2.0 在工程方面方面进一步升级。如果 1.0 是酒窖，那么 2.0 就是“酒窖的成产工具”，是的你没看错是“生产酒窖”，为那和我一样有酿造和收藏兴美酒趣的人。用专业的术语讲这是一个静态博客内容生成工具，在本项目中使用 markdown 编写，然后一行命名发布。就是这么简单，让你专注于内容。另外生成的静态站做了响应式设计，可以兼容 pc 和 移动端。

## 快速上手

- 首先安装 node，具体怎么安装请自行问度娘；

- 其次安装本项目需要的 node 模块，在本项目根路径下运行下面命令:

    npm install
    
- 在 web/articles 下新建文件夹，在此文件夹下新建 main.md 文件，就可以在此文件中写文章了；

- 写完之后，运行下面命令发布(依然在本项目根路径下运行)

    node tool/init-site

- 发布到哪里？可以在 cellar/tool/init-site/bin/config.js 中配置 publicSitePath 字段，相对和本地绝对路径都可以。默认发布到与 cellar 同层目录的 my-blog 文件夹下；

- 本地预览，运行下面命令发布(依然在本项目根路径下运行)
       
    node server

- 终于看到自己的博客了，但是头像和网站标题都需要换，在 cellar/web/src/components/header/header.tpl 中换网站标题，与之同级的 picture.png 就是头像，请同名替换。博客的 title 在 cellar/tool/init-site/bin/config.js 中配置 title 字段进行配置。然后在 cellar/tool 下执行

	webpack -p

- 发布到线上，你可以把生成的静态博客放在自己的服务器上，也可以在 github 上开通自己的站点，上传文件就可以显示。效果参考[本开源项目发起人的个人站点](https://longze.github.io)。

## 本工具的原理介绍

待续...

## TODOs

这是一个幼小的开源项目，还有很多需要完善的地方，如果你感兴趣，我们可以一起来做这件有意思的事情，下面是我想做还没来得及做的一些改进点，欢迎贡献代码。如果你建议添加一些其他功能，请在 Issues 中提出方便管理。如果你想吐槽我的代码也是乐于受教的，同样在 Issues 中提出。

- css 预处理

- 将 webpack 的压缩集成在 init-site 中

- 优化 webpack 的配置