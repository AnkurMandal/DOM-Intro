//extract the bold element from the DOM tree

/**
 * 1. getElementById(elementId) => returns an HTML element | null
 * 
 * 2.getElementsByTagName(tagName) => returns an Array like structure(i.e HTML Collection) of html element object
 * 
 * 3. getElementsByClassName(className) => returns HTML collection of all the found elements
 * 
 + => immediate next sibling selector
 
 ~ => next sibling

 */

// let boldElement = document.getElementById("name");
// console.log({ x: boldElement });

// let boldElement = document.getElementsByTagName("b");
// console.log({ x: boldElement });

let boldElement = document.getElementsByClassName("username");
console.log({ x: boldElement });


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