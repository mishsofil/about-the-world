//this is my code

console.log("your code is linked")

let place = "london"
console.log(place)

let year = 2025
console.log(year)

let oranges = 10
let rotten = 3
let people = 5

oranges = oranges + 10
oranges = oranges - rotten
oranges = oranges * 4
oranges = oranges / people
console.log(oranges)

let apples = 4

function increaseApples(){
    apples = apples + 1
    console.log(apples)
}

increaseApples()
increaseApples()
increaseApples()

function sum(num1, num2, num3){
    let addition = num1 + num2 + num3
    console.log(addition)
}

sum(3, 4, 5)

function sub(num1, num2){
    let subtraction = num1 - num2
    console.log(subtraction)
}

sub(30, 10)

function mult(num1){
    let multiplication = num1 * num1
    console.log(multiplication)
}

mult(6)

function div(num1, num2){
    let division = num1 / num2
    console.log(division)
}

div(100, 3)

function sq(num1, num2){
    let square = num1 ** num2
    console.log(square)
}

sq(9, 37)


function showSound (){
    $(".sound").toggleClass("show")
}

$(".button").click(showSound)
$(".sound").click(showSound)

let para1 = document.querySelector(".para1")
let para2 = document.querySelector(".para2")
let para3 = document.querySelector(".para3")

// Function to handle scroll event
function scrolling() {
    let scrollPosition= $(window).scrollTop()
    console.log(scrollPosition);
  

    // Show or hide paragraphs based on the scroll position
    if (scrollPosition > 1) {
      para1.style.opacity = 1;
      para2.style.opacity = 0;
      para3.style.opacity = 1;
    } else {
      para1.style.opacity = 1;
      para2.style.opacity = 1;
      para3.style.opacity = 0;

    }
}

$(window).scroll(scrolling)
