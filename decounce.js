function debounce(fn,delay){
    var timer = null;
    return function(){
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(fn,delay);
}
}
 
function showTop(){
    var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
    console.log(scrollTop);
}
window.scroll = debounce(showTop,1000)