window.onload = () =>{
    var elements = document.getElementsByTagName("*")
    //取得所有元素標籤
    
    for (let index = 0; index < elements.length; index++) {
        const e = elements[index];
         e.onclick = () =>{
        var target = e.getAttribute("data-gte-target");  //目標屬性
        var offset = e.getAttribute("data-gte-offset"); //位移屬性
            if (target) {
                var element = document.getElementById(target);    //目標元素
                //視窗捲動至({上方,行為})
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior:"smooth"
                })
            }
        }
    }
}