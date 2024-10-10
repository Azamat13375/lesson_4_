/// DOM - document object model
// console.dir(document);
//
// document.body.style.background = "#9a1717"
//
// document.title = "DOM"

// window

// console.log(window);
// window.alert("Hello World");

////
// var h2 = document.getElementsByTagName("name");
// var firstH2 = h2[0]
// var secondp = h2[1]
//
// secondp.style.color = "block";
// firstH2.style.color = "white";
// console.log(h2);

// var p = document.getElementById("name")
// console.log(p)

// var btns = document.getElementsByClassName("button");
// var btn1 = btns[0]
// btn1.style.width = "400px";
// btn1.style.height = "400px";
// btn1.style.background = "blue";
// console.log(btns);

// var element = document.querySelector("#btn");
// var element2 = document.querySelector("#btn2");
// var element3 = document.querySelector("#span");
// var element4 = document.querySelectorAll("button");
// console.log(element4);
//
// var arr = [1, 2, 3, 4, 5];

/// Event
// var btn = document.querySelector('.btn');
// var h2 = document.querySelector('h2');
//
// btn.onclick = () => {



// var count = 0;

// var click = () => {
//     count++;
//     h2.innerHTML = count;
//     console.log(count);
// };
//
//
//
//
// btn.addEventListener('click', () => {
//     console.log("click", click);
// });

// var input = document.querySelector("input");
//
// input.addEventListener("input", (event) => {
//     console.log(event.target.value);
//     h2.innerHTML = (event.target.value);
//
// });
// input.oninput = (e) => (h2.innerHTML = event.target.value);

//
var btn = document.querySelector("button");
var h2 = document.createElement("div");

h2.innerText = "Desktop";
btn.onclick = () => {
    document.body.append(h2);
};


console.log(h2);
