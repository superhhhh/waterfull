function sayThrottle(){
    console.log('throttle');
}
function throttle(fn,delay){
    let timer = true;
    if(!timer){
        return ;
    }
    timer = false;
    setTimeout(function(){
        timer = true;
        fn();
    },delay);
}