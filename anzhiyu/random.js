var posts=["2024/08/04/GitHub + Gridea + Cloudflare 搭建免费个人网站 🚀/","2024/08/07/serv00注册/","2024/08/09/如何通过 Hexo 和 GitHub Actions 实现自动发布博客 🚀/","2024/08/07/通过 VS Code 管理项目并推送到 GitHub 🚀/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };