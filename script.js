// document.addEventListener("DOMContentLoaded", function() {
//     var ul = document.querySelector("ul");
//     if (ul) {
//         // Proceed with using 'ul'
//     } else {
//         console.warn("No <ul> element found.");
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    // Your code here, which can safely access the <ul>
  })


let movie=["The avengers","The avengers the end game"];
let info=["Some info","Some info"];

let clear=document.getElementsByClassName("content");
let allDel=document.querySelector("#del");
// let add=document.getElementsByClassName(".add");
let add=document.querySelector(".add");
const myForm = document.querySelector('#myform');
// var ul=document.getElementsByTagName("ul");
var ul=document.querySelector("#ul");

myForm.addEventListener("submit",(event)=>{
console.log(ul);
    event.preventDefault();
    const formdata=new FormData(event.target);
    const name=formdata.get('name');
    const info=formdata.get('info');

    console.log(name);
    movie.push(name);
    console.log(movie);
    // movie
    let myMovie=document.createElement('li');
    let con=document.createElement("div");
    let h3=document.createElement('h3');
    let p=document.createElement('p');
    h3.innerHTML=name;
    p.innerHTML=info;
    console.log(p);
    con.appendChild(h3);
    con.appendChild(p);
    myMovie.appendChild(con);
    console.log(myMovie);
    // myMovie.innerText="hello";

    // ul[0].appendChild(myMovie);
    console.log(myMovie);
    console.log(ul);
    ul.appendChild(myMovie);

    // console.log(h3);
})


allDel("onclick",()=>{
    movie=[];
    info=[];
})