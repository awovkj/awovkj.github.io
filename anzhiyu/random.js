var posts=["2025/12/26/文件上传/","2025/11/25/未命名/","2025/11/14/图片预览/","2025/11/10/学习日记-2(SQL注入篇)/","2025/11/10/学习日记-5(buu)/","2025/11/10/学习日记-4(php特性)/","2025/11/10/学习日记-3(文件包含篇)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };