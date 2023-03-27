const menuBtns = document.querySelectorAll('.menubar > button');
const imgArray = ['ONE', 'TWO', 'THREE', 'FOUR'];
const imgContainer = document.querySelector('.image-slider');
let positionInImages = 0; 

const containerImg = document.createElement('div');
containerImg.classList.add('containerImg');


const leftBtn = document.createElement('button');
leftBtn.addEventListener('click', (e) => {displayImages(e.target.classList.value)});
leftBtn.classList.add('Left');
const rightBtn = document.createElement('button');
rightBtn.classList.add('Right');
rightBtn.addEventListener('click', (e) => {displayImages(e.target.classList.value)});
const btnDiv = document.createElement('div');
btnDiv.classList.add('btnDiv');
btnDiv.append(leftBtn, rightBtn)

containerImg.append(btnDiv);


imgContainer.appendChild(containerImg);

function changeText (text) {
  containerImg.innerText = " ";
  const leftBtn = document.createElement('button');
  leftBtn.addEventListener('click', (e) => {displayImages(e.target.classList.value)});
  leftBtn.classList.add('Left');
  const rightBtn = document.createElement('button');
  rightBtn.classList.add('Right');
  rightBtn.addEventListener('click', (e) => {displayImages(e.target.classList.value)});
  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btnDiv');
  btnDiv.append(leftBtn, rightBtn);
  const textEle = document.createElement('p');
  textEle.innerText = `${text}`;
  containerImg.appendChild(textEle);
  
  containerImg.append(btnDiv);
  imgContainer.appendChild(containerImg);

}




function displayImages (leftOrRight) {
  // console.log(leftOrRight.toLowerCase(), positionInImages);
  if (leftOrRight.toLowerCase() === "left") {
    positionInImages --;
    if (positionInImages < 0) {
      positionInImages = imgArray.length-1;
    }
  }
  else {
    positionInImages ++;
    if (positionInImages >= imgArray.length) {
      positionInImages = 0;
    }

  }
  console.log(positionInImages);
  changeText(imgArray[positionInImages]);
}





// for (let i = o; i< imgArray.length; i++) {

// }



















for (i=0; i< menuBtns.length; i++) {
  menuBtns[i].addEventListener('click', (e) => {
    hideMenuContent(e.target.id);
  })
}


function hideMenuContent (idHere) {
  const menuContent = document.querySelectorAll('.menucontent > div');
  console.log(menuContent);
  const menuBtnsArray = Array.from(menuBtns);
  for (btn in menuBtnsArray) {
    if (menuBtnsArray[btn].id === idHere) {
      menuBtnsArray[btn].style.background = "red";
      menuContent[btn].style.display = "block";
    }
    else {menuBtnsArray[btn].style.background = "green";
    menuContent[btn].style.display = "none";
  };

  console.log(menuBtnsArray[btn]);
}
}

hideMenuContent("One");

