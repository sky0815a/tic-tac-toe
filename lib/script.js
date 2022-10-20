// assign 1~9 boxes by thier ID number <- so I can tell what USER is clicking.

// Set GAME Tracker starting 0 <- This will be used to determine the Player's Turn, LOG Message, and Game Start & END

// If user CLICK a box & IF GAME Tracker is EVEN (which is default at the beginning), CHANGE the innerTEXT of the BOX => X
// ELSE CHANGE the innerTEXT => O
// Then ADD +1 to the GAME Tracker <- GAME Progress increased by 1

// IF GAME Tracker is ODD, LOG Player O's Turn
// IF GAME Tracker is EVEN, LOG Player X's Turn

// Each time user click a BOX, it will be X O X O X ... O
// AND if GAME Tracker hit 9, THAT means GAME is DONE and CHECK WIN CONDITION

// Check IF innerTEXT of ROW is Equal 
//    (1)=(2)=(3)
//    (4)=(5)=(6)
//    (7)=(8)=(9)

//  OR

// Check IF innerTEXT of COL is Equal
//    (1) (2) (3)    which is, check if [1=4=7]
//    ||  ||  ||
//    (4) (5) (6)   which is, check if [2=5=8]
//    ||  ||  ||
//    (7) (8) (9)   which is, check if [3=6=9]

// Check IF innerTEXT of DIA is Equal
//    (1) (2) (3)      which is, check if [1=5=9]
//       \\ // 
//    (4) (5) (6)       which is, check if [1=5=9]
//      //   \\
//    (7) (8) (9)


// Those are the ONLY WIN condition.
// if any of those 8 Condition MET, LOG InnerText of the line of the box + WIN

// if None of the conditon is met, LOG Tie

// To resizeTo, clear all the innerText, and reset GAME Tracker 0;PL 

// const boxOne = document.querySelector(".one")
// const boxTwo = document.querySelector(".")
// const boxThree = document.querySelector(".")
// const box = document.querySelector(".")
// const box = document.querySelector(".")
// const box = document.querySelector(".")
// const box = document.querySelector(".")
// const box = document.querySelector(".")
// const box = document.querySelector(".")

let num = true;
const box = document.querySelectorAll(".cell")
console.log("log is working here")

for (let i = 0; i< box.length; i++) {

    box[i].addEventListener("click", event => {
        event.preventDefault()
        if (box[i].style.backgroundColor != "blue" && box[i].style.backgroundColor != "red") {
            if (num) {
                box[i].style.backgroundColor = "red" 
                num = false;
            } else {
                box[i].style.backgroundColor = "blue" 
                num = true;
            }
       }
    })
}

sometihng