// to create a header
// Home   About us   Menu   Projects   Contact

let header = document.createElement("header");
header.className = "header";

let navArr = ["Home", "About us", "Menu", "Projects", "Contact"];
navArr.forEach(ele => {
    let nav = document.createElement("nav");
    nav.innerText = ele;

    header.append(nav);
})
document.body.appendChild(header);
