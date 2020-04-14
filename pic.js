window.onload = function(){
    waterfull('main','box');
    var dataInt = {'data':[{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'},
    {'src':'30.jpg'},{'src':'31.jpg'},{'src':'32.jpg'},{'src':'33.jpg'},{'src':'34.jpg'},{'src':'35.jpg'},{'src':'36.jpg'},{'src':'37.jpg'},
    {'src':'38.jpg'},{'src':'39.jpg'},{'src':'40.jpg'},{'src':'41.jpg'},{'src':'42.jpg'},{'src':'43.jpg'},{'src':'44.jpg'},{'src':'45.jpg'},{'src':'46.jpg'},{'src':'47.jpg'}]};
    window.onscroll = function(){
        if(checkScrollSlide){
            var oParent = this.document.getElementById('main');
            for(let i=0;i<dataInt.data.length;i++){
                var oBox = document.createElement('div');
                oBox.className='box';
                oParent.appendChild(oBox);
                var oPic = document.createElement('div');
                oPic.className='pic'
                oBox.appendChild(oPic);
                var oImg = document.createElement('img');
                oImg.src='picture/'+dataInt.data[i].src;
                oPic.appendChild(oImg);

            }
            waterfull('main','box');
        }
    }
}

function waterfull(parent, box){
     var oParent = document.getElementById(parent);
     var oBoxs = getByClass(oParent,box);
     var oBoxW = oBoxs[0].offsetWidth;
     var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
     oParent.style.cssText = 'width:'+cols*oBoxW+'px;margin:auto;';
     var hArr = [];
     for(let i=0;i<oBoxs.length;i++){
         if(i<cols){
             hArr.push(oBoxs[i].offsetHeight);
         }
         else{
             var minH = Math.min.apply(null,hArr);
             var index = getMinIndex(hArr,minH);
             oBoxs[i].style.position = 'absolute'
             oBoxs[i].style.top=minH+'px';
             oBoxs[i].style.left=oBoxW*index+'px';
             hArr[index] = hArr[index]+ oBoxs[i].offsetHeight;
         }
     }

 }
function getByClass(parent, clsName){
      var boxArr = [];
      var oElements = parent.getElementsByTagName('*');
      for (let i=0;i<oElements.length;i++){
          if(oElements[i].className==clsName){
              boxArr.push(oElements[i]);
          }
      }
      return boxArr;
  }
function getMinIndex(arr,val){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==val){
            return i;
        }
    }
}

function checkScrollSlide(){
    var oParent = document.getElementById('main');
    var oBox=getByClass(oParent,'bpx');
    var lastBoxH = oBox[oBox.length-1].offsetTop+Math.floor(oBox[oBox.length-1].offsetHeight/2);
    var scrollTop  = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    return lastBoxH<scrollTop+height?true:false;
}