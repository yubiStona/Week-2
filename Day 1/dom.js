//selecting the DOM elements
//there are several way to select   dom elements like by id,class or name
// some of them we are going to explore some of them
const demo=document.getElementById("demo");
const btn=document.getElementById("updateBtn");

//changing dom or manipulating dom
demo.innerText="The heading has been changed";//changing the text content in the h1 tag

//styling the demo;
demo.style.color="blue";
demo.style.fontSize="24px";

//creating new elements
const p=document.createElement('p');
p.innerText="this is dynamically added";
document.body.appendChild(p);/// now <p> is dynamically added
p.style.color="red";//changes the color of text in  the newly added element p
document.body.style.userSelect="none";//disable seleting anything in the window

const ele=document.createElement('div');
ele.innerHTML="<strong><p>this the inner html added in new div</p></strong>";
document.body.appendChild(ele);// new div element added

//now try to add class and remove that element using classname
ele.classList.add('new');
const newelement=document.querySelector('.new');

console.log(newelement);
//using eventListener to manipulate the dom elements;
btn.addEventListener('click',()=>{
    p.remove();//remove the p elemet from the DOM;
    newelement.innerHTML="<h1> heading is replaced in plac of paragraph</h1>";
    newelement.style.color="green";
    newelement.style.fontSize="48px";
    demo.innerText="new element and div inner html changed";
})






