let array=["puma","nike","adidas","crocs","highlander","wrogn","hrx"]
let grid=document.querySelector(".grid_container");
function loadpage(){
    
    for (let i = 0; i < 7; i ++) {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const name = document.createElement("div");
        // let addtocart=document.createElement("a");
        let addto=document.createElement("img");
        addto.src="images/footwear/addtocartlogo.png";
        // addto.appendChild(addtocart);
        addto.style.width="50px";
        
        // images/footwear/puma.jpg
        // image.src="images/footwear/mensfootwearlogo.jpeg";
        // var fname = array[Math.floor(Math.random() * 6)];
        let fname=array[i];
        source1="images/footwear/"+fname+".jpg";
        name.innerHTML=fname;
        image.src=source1;
        const price = document.createElement("p");
        price.innerHTML = Math.floor(Math.random() * (1000 - 100) + 100) + "$";
        card.appendChild(image)
        card.appendChild(name)
        card.appendChild(price)
        card.appendChild(addto);
        grid.appendChild(card);
        card.setAttribute("class","card");
        image.setAttribute("class","image1");
   }     
   
}
loadpage();