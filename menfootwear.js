let array=["puma","nike","adidas","crocs","highlander","wrogn","hrx"]
let grid=document.querySelector(".grid_container");
function loadpage(){
    
    for (let i = 0; i < 18; i ++) {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const name = document.createElement("div");
        
        // images/footwear/puma.jpg
        // image.src="images/footwear/mensfootwearlogo.jpeg";
        var fname = array[Math.floor(Math.random() * 6)];
        source1="images/footwear/"+fname+".jpg";
        name.innerHTML=fname;
        image.src=source1;
        const price = document.createElement("p");
        price.innerHTML = Math.floor(Math.random() * (1000 - 100) + 100) + "$";
        card.appendChild(image)
        card.appendChild(name)
        card.appendChild(price)
        grid.appendChild(card);
        card.setAttribute("class","card");
        image.setAttribute("class","image1");
   }     
   
}
loadpage();