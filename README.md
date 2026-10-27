# 华润凯的学术主页

适用于 `https://huarunkai.github.io/` 的静态网页。原生 HTML、CSS 和 JavaScript，无构建步骤，无第三方脚本和运行时依赖。

## 文件

- `index.html`：个人介绍、论文状态、实习经历、开源项目、教育与荣誉。
- `styles.css`：暖白与深青绿色的编辑式版面，包含移动端和打印适配。
- `script.js`：中英文切换、语言偏好记忆、当前章节提示。
- `favicon.svg`：RH 字母图标。
- `share.svg`：网页分享图。
- `.nojekyll`：直接托管静态文件。

## 更新内容

可直接编辑 `index.html`。带 `data-en` 与 `data-zh` 的元素分别存放英文、中文；默认正文保持英文，与 `data-en` 同步修改。论文完整标题保留原文。新增论文时，应明确区分已发表、投稿中、在审和修改阶段，再补入已公开的真实链接。

`styles.css` 的 `:root` 集中定义颜色与字体。网站使用设备内置字体，未加载远程字体。默认英文，可在右上角切换中文；禁用 JavaScript 时英文正文和导航依然可用。

## GitHub Pages

将这些文件放在 `huarunkai/huarunkai.github.io` 仓库根目录，在仓库 Settings → Pages 中选择从 `main` 分支的 `/ (root)` 发布。首次部署可能需要几分钟。

网页只包含公开展示所需的个人介绍，不附完整简历或手机号。联系邮箱沿用原简历。

## 设计参考

信息组织参考了常见学术主页的「个人简介、研究、经历」结构，可对照：

- Academic Pages：<https://github.com/academicpages/academicpages.github.io>
- al-folio：<https://github.com/alshedivat/al-folio>
- Minimal Light：<https://minimal-light-theme.yliu.me/>

本页为独立编写的静态实现，未复制上述模板源代码、图像或他人的个人资料。
