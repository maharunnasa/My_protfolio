// window.addEventListener('load', function () {
//     const bars = document.querySelectorAll('.bar div');
//     bars.forEach(bar => {
//         bar.style.width = bar.getAttribute('styles').split(': ')[1];
//     });
// });

let number = document.getElementById("num");
let counter = 0;
setInterval(() =>{
    if(counter == 90){
        clearInterval();
    }
    else
    {
        counter +=1;
        number.innerHTML = counter + "%";
    }
}, 20);

let number1 = document.getElementById("num1");
let counter1 = 0;
setInterval(() =>{
    if(counter1 == 75){
        clearInterval();
    }
    else
    {
        counter1 +=1;
        number1.innerHTML = counter1 + "%";
    }
}, 20);

let number2 = document.getElementById("num2");
let counter2 = 0;
setInterval(() =>{
    if(counter2 == 80){
        clearInterval();
    }
    else
    {
        counter2 +=1;
        number2.innerHTML = counter2 + "%";
    }
}, 20);

let number3 = document.getElementById("num3");
let counter3 = 0;
setInterval(() =>{
    if(counter3 == 70){
        clearInterval();
    }
    else
    {
        counter3 +=1;
        number3.innerHTML = counter3 + "%";
    }
}, 20);