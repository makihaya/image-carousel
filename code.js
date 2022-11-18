//const red = document.getElementById("image1");
//const blue = document.getElementById("image2");
//const yellow = document.getElementById("image3");
const image1Text = document.getElementById("image1-text");
const image2Text = document.getElementById("image2-text");
const image3Text = document.getElementById("image3-text");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

let imagesArr = [image1, image2, image3];
let textArr = [image1Text, image2Text, image3Text];
let dotsArr = [dot1, dot2, dot3];

function carousel(direction){

  if(direction == "right"){
    imagesArr.push(imagesArr.shift());
    textArr.push(textArr.shift());   
    dotsArr.push(dotsArr.shift());
  }else if(direction == "left"){
    imagesArr.unshift(imagesArr.pop());
    textArr.unshift(textArr.pop());
    dotsArr.unshift(dotsArr.pop());
  }
    imagesArr[0].classList.remove("hide");
    imagesArr[0].classList.add("fade-in");
    
    imagesArr[1].classList.add("hide");
    imagesArr[1].classList.remove("fade-in");
  
    imagesArr[2].classList.add("hide");
    imagesArr[2].classList.remove("fade-in");

    textArr[0].classList.remove("hide");
    textArr[0].classList.add("fade-in");

    textArr[1].classList.add("hide");
    textArr[1].classList.remove("fade-in");

    textArr[2].classList.add("hide");
    textArr[2].classList.remove("fade-in");

  dotsArr[0].classList.remove("translucent");
  dotsArr[1].classList.add("translucent");
  dotsArr[2].classList.add("translucent");
}