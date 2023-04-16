console.log("hii parth");
console.log(document.title);
document.title = 142;
console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

//getelementbyid

var headtitle = document.getElementById('header-title');
console.log(headtitle);

var header = document.getElementById('main-header');
header.style.borderBottom = '3px solid black';


var additem = document.getElementsByClassName('title');
additem.style.fontWeight = "bold";

var input = document.querySelector('.list-group-item');
input.style.color = 'red';

var secondchild = document.querySelector('.list-group-item:nth-child(2)');
secondchild.style.color = "green";