var posts=["2025/11/08/argf/","2025/11/08/hello-world/","2025/11/09/seerdg/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };