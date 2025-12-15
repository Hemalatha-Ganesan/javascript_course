const btn = document.getElementById('btn');
const colortext = document.getElementById('color');
const wrap = document.getElementById('wrap');
// represent in hexadecimal form  #FFFFFF
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


btn.addEventListener('click',function(){
      let hexcolor = '#';
      for(let i=0;i<6;i++){
          hexcolor += randHexValue();
      }
      wrap.style.backgroundColor = hexcolor;
     // wrap.style.overscrollBehavior = hexcolor;
     wrap.style.overscrollBehavior = "contain"; 

      colortext.innerHTML = hexcolor;
})
function randHexValue(){
    let randomIndex = Math.floor(Math.random()*16)
     return hex[randomIndex];
}

