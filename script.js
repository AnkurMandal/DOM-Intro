//extract the bold element from the DOM tree

/**
 * 1. getElementById(elementId) => returns an HTML element | null
 *
 * 2.getElementsByTagName(tagName) => returns an Array like structure(i.e HTML Collection) of html element object
 *
 * 3. getElementsByClassName(className) => returns HTML collection of all the found elements
 *
 * 4. querySelector(cssSelector)=> returns a single html element
 *
 * 5. querySelectorAll(cssSelector)=> returns all the HTML elements which are match with the passed selector.
 *
 *
 *
 + => immediate next sibling selector

 ~ => next sibling

 */

// let boldElement = document.getElementById("name");
// console.log({ x: boldElement });

// let boldElement = document.getElementsByTagName("b");
// console.log({ x: boldElement });

// let boldElement = document.getElementsByClassName("username");
// console.log({ x: boldElement });


// let e = document.querySelector("#container>p+b");

// console.log(e.innerText);

// let elements = document.querySelectorAll("#container>p+b");
// console.log(elements);



/**for Every HTML properties
 *
 *
 * tagname:"B",
 * children: [],
 * innerText: "Aravind",
 * className: "username",
 * parentElement: Another HTML element object,
 * draggable: false
 *
 */

// const btn = document.getElementById("btn");

// classList=> just an array representation of className
// classList.add("className","c1","c2",....) => add class

//classList.remove("c1","c2",...)=> remove class/classes from the classList

//classList.constains("className")=>returns true or false

//classList.toggle("className")=> if class is than it will remove it, else it will add that class.



// const buttons = document.getElementsByTagName("button");
// buttons[0].classList.add("primary");
// buttons[1].classList.add("danger");

// function callme(btn) {
//     // console.log("Inside callme function!!");
//     // console.log(btn);
//     // btn.id = "test";
//     // btn.classList.toggle("primary");
//     // btn.disabled = true;
//     btn.draggable = !btn.draggable;
// }

// console.debug("some msg");

// let a = 20;
// debugger
// console.log(a * 20);


// function createBoldElement() {
//     // step1: create bold Element

//     const bold = document.createElement("b");

//     bold.innerText = "Ankur Mandal";

//     // step2: attach that bold element inside #Container

//     const container = document.getElementById("container");

//     container.append(bold);


// }


/**
 * <div class="card">
 *      <span>Ankur Mandal</span>
 *      <span>25</span>
 * </div>
 */
const family = [
    {
        name: "Ankur Mandal",
        age: 25,
    },
    {
        name: "Shanku Mandal",
        age: 31,
    },
    {
        name: "Promila Mandal",
        age: 48,
    },
    {
        name: "Dilip Kr. Mandal",
        age: 56,
    },
];
const constainer = document.querySelector("#container");

function createFamily() {

    family.forEach(familyMember => {
        // creating div
        const card = document.createElement("div");

        //giving class name to div
        card.classList.add("card");



        const name = document.createElement("span");
        name.innerText = familyMember.name;

        const age = document.createElement("span");
        age.innerText = familyMember.age;




        card.append(name, age);

        container.append(card);
    })

}