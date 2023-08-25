//Exercise 1 - create new element
// let add_element = () => {
//     const template = document.createElement('div');
//     template.innerHTML = "Here is new element";
    
//     document.body.appendChild(template);
// }

// add_element();


// //Exercise 2 - delete element by id
// const element = document.getElementById(1);
// element.remove();


//Exercise 3 - button which create new element
// function new_elem(){
//     const newDiv = document.createElement("div");
//     const newcontent = document.createTextNode("This is a new element!");
//     newDiv.appendChild(newcontent);
//     document.body.appendChild(newDiv);
// }


//Exercise 4 - button which at first clich create a new element and to a second click, it delete the element
// var btn = document.getElementsByTagName("button")[0];
//   btn.addEventListener("click", function() {
//     var addInner = document.getElementById("menu").innerHTML;
//     if(document.getElementById("demo").innerHTML == ""){
//     document.getElementById("demo").innerHTML = addInner;
//     }else{
//     document.getElementById("demo").innerHTML = "";
//     }
//   });