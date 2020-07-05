# tiny-comment
基于 react 和 serverless 的评论组件


## 开发历程

- 初始化项目, 纠结使用component的开发应该如何初始化项目, 试了不少, 最终采用create-react-app, 然后逐渐加上所需要的ci和项目结构
  - package.json中的信息, peerdependency等
- 项目参考, api与外观
  - 参考bilibili和知乎
  - 开发参考[semantic](https://react.semantic-ui.com/views/comment/#types-comment)和[antd](https://github.com/ant-design/ant-design/pull/12770/files)

## 使用方法

默认根据页面的url path 发出请求, 也可手动指定

- npm, install然后在需要的页面中调用
- link, 通过script引入, 然后初始化即可

## api

```javascript
//单条评论
{
  content: '',
  replies: [], //这里面的回复的回复用 回复 @泪珠西妮雅 :[doge] 的形式
  info: {
    avatar: '',
    name: '',
    device: ''
  },
  time: ''
}
```