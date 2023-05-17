const colors = [
"Cornflowerblue",
  "Crimson",
  "MediumSlateBlue",
  "Deeppink",
  "Darkorange",
   "Cadetblue",
   "Chocolate",
   "YellowGreen",
   "Salmon",
   "DarkKhaki",
  "Mediumturquoise",
  "Lightblue",
  "Gold",
  "Fuchsia",
  "Teal",
  "SaddleBrown",
  "	Darkolivegreen",
  "DarkGoldenRod",
  "Dimgrey",
  "DarkMagenta",
  "Navy",
];


// Creating the Structure and giving functionality to it by ctrl key (Only if we press ctrl while clicking the box, color will change , otherwise it will remain same )

function handleClick (colorText, e){
if(e.ctrlKey){
  heading.style.backgroundColor = colorText
  heading.innerText = colorText
} else{
  heading.innerText = "Use ctrl key to change the color"
}
}


let boxes = document.querySelector('.colored-boxes')
let heading = document.querySelector('.heading')
function createBox (){
    colors.forEach(color => {
        let box = document.createElement('div')
        box.classList.add('box')  
        box.addEventListener("click",function (event){
          console.log(event);
          handleClick(color, event)
        })
        box.style.backgroundColor = color
        boxes.append(box)
    })
}

createBox()




