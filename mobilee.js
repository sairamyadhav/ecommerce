import json from './mobiles.json' assert {type : 'json'};

var url = new URL(window.location.href);
var page = url.searchParams.get("page");
var id = url.searchParams.get("id");

console.log(page, id);

const display_images = document.querySelector(".display_image");
for (let i = 0; i < json[page][id - 1].images.length; i ++) {
    const img = document.createElement("img");
    // img.src = json[page][id - 1].images[i];
    img.src = "images/mobiles/apple-iphone-11-1.jpg";
    img.addEventListener("click", (e) => {
        const image = document.querySelector(".main_image_img");
        image.src = e.path[0].src;
        // image.src = e[0].src;
    });
    display_images.appendChild(img);
}

const name = document.querySelector(".name");
const p = document.createElement("p");
p.innerHTML = json[page][id - 1].name;
name.appendChild(p);

const highlights = document.querySelector(".highlights");
for (let i = 0; i < json[page][id - 1].specs.length; i ++) {
    const li = document.createElement("li");
    li.innerHTML = json[page][id - 1].specs[i];
    highlights.appendChild(li);
}

function setImage(e) {
    const image = document.querySelector(".image");
    console.log(e);
}