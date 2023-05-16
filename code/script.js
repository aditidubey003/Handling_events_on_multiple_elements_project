const colors = [
//    "beige", 
"Cornflowerblue",
  "Crimson",
  "Fuchsia",
   "Cadetblue",
   "Chartreuse",
   "Chocolate",
   "DarkGoldenRod",
   "Gold",
  "Dimgrey",
  "DarkMagenta",
  "Darkorange",
  "MediumSlateBlue",
  "Teal",
  "YellowGreen",
  "SaddleBrown",
  "DarkKhaki",
  "Navy",
  "Deeppink",

];


// Creating the Structure and giving functionality to it

function handleClick (colorText){
  heading.style.backgroundColor = colorText
  heading.innerText = colorText
}


let boxes = document.querySelector('.colored-boxes')
let heading = document.querySelector('.heading')
function createBox (){
    colors.forEach(color => {
        let box = document.createElement('div')
        box.classList.add('box')  
        box.addEventListener("click",function (){
          handleClick(color)
        })
        box.style.backgroundColor = color
        boxes.append(box)
    })
}

createBox()





