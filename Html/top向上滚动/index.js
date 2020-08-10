window.onload = function () {
  // 定义一个点击事件
  var click = document.getElementById("click")
  click.onclick = function () {
    // 判断当页面距离顶部的距离大于0
    if (document.documentElement.scrollTop > 0) {
      // window.setinterval()方法 页面每隔多长时间执行一次具体事件
      let interval = setInterval(function () {
        let instance = document.documentElement.scrollTop/5
        document.documentElement.scrollTop -= instance
        // 判断当页面距离顶部为0时，清除该事件
        if (document.documentElement.scrollTop == 0) {
          clearInterval(interval)
        }
      }, 30)
    }
  } 
  // 监听页面的滚动事件
  window.addEventListener("scroll",function(){
    // 判断当页面滚动的距离大于500高度的时候，让滚动块出现
    if(document.documentElement.scrollTop >= 500){
      click.style.display = "block"
    }else{
      click.style.display = "none"
    }
  })
}