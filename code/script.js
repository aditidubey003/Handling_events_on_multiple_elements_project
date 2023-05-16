const colors = [
//    "beige", 
"Cornflowerblue",
  "Crimson",
   "Burlywood",
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
  "Navy",
  "DarkKhaki",
  "AquaMarine",
];


// Creating the Structure and giving functionality to it

let boxes = document.querySelector('.colored-boxes')
let heading = document.querySelector('.heading')
function createBox (){
    colors.forEach(color => {
        let box = document.createElement('div')
        box.classList.add('box')  
        box.style.backgroundColor = color
        boxes.append(box)

        box.addEventListener("click", function (){
               heading.style.backgroundColor = color
               heading.innerText = color
       })
    })
}

createBox()





