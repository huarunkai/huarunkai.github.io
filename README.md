# Runkai Hua 学术主页

地址：https://huarunkai.github.io/

这是一个无需构建步骤的静态学术主页。当前排版根据本人要求，参考 [Qianhui Wu 的主页](https://qianhuiwu.github.io/)：白底、左侧圆形头像与个人信息、右侧紧凑正文、News 和按研究方向折叠的论文列表。HTML、CSS 和交互代码独立编写，个人文字、照片与论文信息均为华润凯本人的资料；未引入参考站点的跟踪脚本。

## 文件

- `index.html`：个人介绍、新闻、项目、论文、经历、教育与荣誉。
- `styles.css`：桌面与手机样式。
- `script.js`：中英文切换、语言偏好保存、打印时展开论文分组。
- `images/portrait.jpg`：本人头像，来自提供的简历。
- `favicon.svg`、`share.png`、`share.svg`：站点图标与分享图片。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。

## 修改内容

双语文字以 `data-en` 与 `data-zh` 保存在对应元素上。更新文字时，请同时修改这两个属性和元素默认的英文正文。链接地址写在 `href` 中。英文论文标题保持原题；论文状态必须继续区分已发表、投稿与在审。

论文使用原生 `details` / `summary`，默认展开，点击研究方向标题可收起。无需 JavaScript 也可以操作。手机端直接展示 Email 和 GitHub。

## 发布

将修改提交到 `huarunkai/huarunkai.github.io` 的 `main` 分支，GitHub Pages 从根目录自动发布。此版本的 HTML 使用 `academic-reference-v2` 标识，并给 CSS / JavaScript 添加版本查询参数，以减少浏览器缓存旧样式。

## 内容依据

教育、经历与研究信息以本人提供的简历为基础。TADUFMA 正式论文链接为 https://doi.org/10.1088/1361-6501/adf083 。其他稿件没有虚构公开全文链接、完整作者名单或录用信息。
