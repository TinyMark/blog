---
title: CSS3总结
tags:
  - CSS3
categories:
  - 前端
  - CSS
---

# 选择器

> CSS3 新增了许多灵活查找元素的方法，极大的提高了查找元素的效率和精准度。

> CSS3 选择器与 jQuery 中所提供的绝大部分选择器兼容。

## 属性选择器 ([])

- E[attr]
  > 存在 attr 属性即可
- E[attr=val]
  > 属性值完全等于 val
- E[attr*=val]
  > 属性值里包含 val 字符并且在“任意”位置
- E[attr^=val]
  > 属性值里包含 val 字符并且在“开始”位置
- E[attr$=val]
  > 属性值里包含 val 字符并且在“结束”位置

## 伪类选择器 (:)

除了:link 、:active 、:visited 、:hover

> 新增

- E:first-child
  > 其父元素的第 1 个子元素
- E:last-child
  > 其父元素的最后 1 个子元素
- E:nth-child(n)
  > 其父元素的第 n 个子元素
- E:nth-last-child(n)
  > 其父元素的第 n 个子元素（倒着数）

> 空伪类

- E:empty
  > 选中没有任何子节点的 E 元素；（使用不是非常广泛）

> 目标伪类

- E:target
  > 结合锚点进行使用，处于当前锚点的元素会被选中；

> 排除伪类

- E:not(selector)
  > 除 selector（任意选择器）外的元素会被选中；

## 伪元素 （::）

- E::first-letter
  > 文本的第一个单词或字（如中文、日文、韩文等）
- E::first-line
  > 文本第一行；
- E::selection
  > 可改变选中文本的样式；
- E::before 和 E::after

  > 在 E 元素内部的开始位置和结束位创建一个元素，该元素为行内元素，且必须要结合 content 属性使用。

- 注 1：":" 与 "::" 在于区分 伪类 和 伪元素
- 注 2：E:after 和 E:before 在 旧版本 中是 伪元素，在高版本浏览器中会被自动识别为 E::after 和 E::before ，已做兼容处理
