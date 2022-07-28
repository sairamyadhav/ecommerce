const array = ["iphone-11", "iphone-13", "iphone-xr", "nothing", "samsung11_a12", "samsung_a13", "oneplus9rt", "vivo v20", "oppo o20"];
var currPageNumber = 1;
function loadPage() {
    const middle = document.querySelector(".middle");
    middle.innerHTML = "";
    for (let i = 0; i < 24; i ++) {
        const card = document.createElement("div");
        const image = document.createElement("img");
        // image.src = "images/mobiles/apple-iphone-11-1.jpg";
        const name = document.createElement("div");
        var mname = array[Math.floor(Math.random() * 9)]
        source1="images/mobiles/"+mname+".jpg";
        image.src=source1;
        name.innerHTML=mname
        console.log(array[Math.floor(Math.random() * 9)])
        const priceandrating = document.createElement("div");
        const price = document.createElement("p");
        price.innerHTML = Math.floor(Math.random() * (1000 - 100) + 100) + "$";
        const rating = document.createElement("div");
        const stars = Math.floor(Math.random() * 5 + 1);
        for (let i = 0; i < stars; i ++) {
            const star = document.createElement("span");
            star.setAttribute("class", "fa");
            star.setAttribute("class", "fa-star");
            star.setAttribute("class", "checked");
            rating.appendChild(star);
        }
        for (let i = 0; i < 5 - stars; i ++) {
            const star = document.createElement("span");
            star.setAttribute("class", "fa");
            star.setAttribute("class", "fa-star");
            rating.appendChild(star);
        }
        // rating.innerHTML = Math.floor(Math.random() * 5 + 1) + "stars";
        priceandrating.appendChild(price);
        priceandrating.appendChild(rating);
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(priceandrating);
        card.setAttribute("class", "card");
        name.setAttribute("class", "name");
        priceandrating.setAttribute("class", "priceandrating");
        image.setAttribute("class", "cardimg");
        middle.appendChild(card);
    }
    middle.setAttribute("class", "middle");
}

const firstPage = document.querySelector(".number");
if (firstPage.innerHTML == "1") {
    console.log("yes");
    loadPage()
}

function prev() {
    if (currPageNumber == 1) {
        alert("no more previous pages");
    }
    else {
        currPageNumber -= 1;
        const pageNode = document.querySelector(".number");
        pageNode.innerHTML = currPageNumber;
        loadPage()
    }
}

function next() {
    if (currPageNumber == 10) {
        alert("no more next pages");
    }
    else {
        currPageNumber += 1;
        const pageNode = document.querySelector(".number");
        pageNode.innerHTML = currPageNumber;
        loadPage()
    }
}


function filterapply() {
    const radios = document.querySelectorAll("input[type=radio]");
    console.log(radios)
}