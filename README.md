构建一个纯 css 的侧边导航栏组件，在鼠标 `hover` 上之后会有一个背景变换。

![](https://github.com/aisensiy/css-getting-started/raw/master/screen.png)

![](https://github.com/aisensiy/css-getting-started/raw/master/onhover.png)

# 前提

想要完成这个项目，你需要知道一个基本的 HTML 语法：

* 知道什么是 HTML 标签
* 知道一些基本的标签，比如 `title` `h1` `ul` `li`

你需要知道 CSS 的基本概念和语法：

* 什么是 CSS
* 什么是 CSS 选择器（selector）
* 如何对一个元素设置 `border` `margin` `width`
* 如何设置字体的样式 `color` `font-family` `font-size`

并且，你需要知道一些 `git` 的基本使用方式：

* 知道如何 `clone` 远端的 `git` 仓库
* 知道如何将添加或者修改后的文件提交到本地 `git` 仓库
* 知道如何将本地的仓库提交到远端的仓库

还有，你可能需要知道一些 `nodejs` 以及 `npm` 的知识，**不过在目前这个项目，这些不是必须的**：

* 知道什么是 `nodejs`
* 知道如何利用 `npm` 对 HTML Javascript 的项目进行依赖管理

# 环境

为了构建这个项目，你需要至少将下面加 `*` 的东西安装到你的电脑上：

1. [`git`](https://git-scm.com/) `*`
2. `nodejs` 
3. `npm`

# 构建

在 `public` 目录下有一个 `index.html` 文件，对其 `style` 内的样式进行修改，已达到截图的效果。其中具体的规格如下:

1. 清理 `ul` `li` 默认的 `padding` `margin` `style`
2. 设置链接的上下 padding 0.5em 左右 padding 1em
3. 设置链接颜色 `#777777`
4. 当鼠标移动上时背景色变为 `#eeeeee`

其他没有说明的样式请按照图片中的效果进行修改。

# 在本地执行测试

首先，这一步不是必须的。

按照下面的步骤安装必要的工具：

1. 安装 [node.js](https://nodejs.org/en/)
2. 安装 [PhantomJS](http://phantomjs.org/download.html)

然后执行以下命令安装其他依赖

```
$ npm install -g casperjs
$ npm install -g backstopjs
```

在本地执行测试

```
$ backstop test
```

> **注意** 由于不同操作系统下同样的字体的展示也有可能存在一定的区别，如果没有对字体做任何修改但是在本地的测试无法通过请联系 [@aisensiy](https://github.com/aisensiy)。