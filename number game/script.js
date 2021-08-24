
  function btn1() {
    
    let rn = Math.floor(Math.random() * 10) + 1;
    console.log(rn);
  
    for(let i = 3; i > 0; i--){
    let quest = prompt("Choose number between 1-10");
    if(quest = rn){
      alert("Good Job");
      document.getElementById("answr").innerHTML += "YOU WIN!";
    }
    else if (quest > rn) {
      alert("decrease")
    }
    else if (quest < rn) {
      alert("increase")
    }
    // else {
    //   alert("No");
    //   return document.getElementById("answr").innerHTML +=  rn + " " + "YOU LOST!";
    // }
    }
  }





//   function btn1() {
//   let x = 2;
//   let quest = prompt("Choose number between 1-10");
//   let rn = Math.floor(Math.random() * 10) + 1;
//   console.log(rn);

//   while(x > 0){
//   prompt("Choose number between 1-10");
//   x--;
//   if(quest = rn){
//     alert("Good Job");
//     document.getElementById("answr").innerHTML += "YOU WIN!";
//   }
//   else {
//     alert("No");
//     return document.getElementById("answr").innerHTML +=  rn + " " + "YOU LOST!";
//   }
//   }
// }
