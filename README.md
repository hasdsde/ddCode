## DDCode-基于TailwindCss的代码生成系统-独立端

独立端不基于任何后端，带有任何后端集成能力

### 主要功能

- 基于树状图、符合程序员逻辑
- 使用TailwindCss，不再写CSS
- 基于Node服务器对本地文件读取，直接渲染页面
- 读取代码，自动识别分类变量、函数、引入
- 使用Quasar框架，支持开箱即用图标、组件更丰富

### 系统功能

- 基本权限管理功能
- Material Icon速览
- 读取Swagger结构体，快速生成表格和示例数据
- Echart基本功能生成、在线预览

## 预览

登录页

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203612.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203612.png)

管理页面

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203637.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203637.png)

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203657.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203657.png)

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203857.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203857.png)

代码生成器

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203718.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203718.png)

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203735.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203735.png)

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203752.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203752.png)

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203811.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203811.png)

![https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203829.png](https://raw.githubusercontent.com/hasdsde/img_bed/main/QQ%E6%88%AA%E5%9B%BE20240326203829.png)

## 配置文件

- 命令位置：package.json
- server文件位置：`src/pages/front/template/server.js`
- 模板位置：`src/pages/front/template`

## 安装启动

下载依赖
```sh
npm run install #下载依赖
```
启动系统
```sh
npm run dev #启动系统
```
启动node服务器
```sh
npm run twc #启动node服务器
```

## 访问地址

- 服务器端口：9000
- node服务端端口：3000

## 已知问题

- 源码中出现闭合标签<xxx />导致cheerio不识别问题。
- 函数正则存在问题，不建议编写函数体。
- 在删除全部子菜单前，不建议删除父级菜单，会报错。
- echarts完成度低