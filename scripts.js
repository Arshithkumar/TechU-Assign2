var con = document.querySelector(".container")
var ccrd = document.querySelector(".child-card")
var crd = document.querySelector(".card")
var btn = document.querySelector("button")

let prodlist = [];

var inp = ''

function register(e) {
    inp = e.value;
}



function fetchdata() {
    fetch('https://fakestoreapi.com/products').then(res => res.json())
        .then(json => {
            prodlist = json
            createCard(json)})
}


function createCard(data) {
    data.forEach(val => {
        // console.log(val);
        // var img=document.createElement("img")
        // img.src=val.image

        // var heading4 =document.createElement("h4")
        // heading4.innerHTML=val.title

        // var para =document.createElement("p")
        // para.innerHTML=val.price

        // crd.appendChild(img)
        // crd.appendChild(heading4)
        // crd.appendChild(para)

        // ccrd.appendChild(crd)

        var div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML =
            `
        <div class="card" style="width: 17rem;">
            <img src="${val.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${val.title}</h5>
                <p class="card-text">Category: ${val.category}</p>
                <h5 class="card-title">Rating: ⭐ ${val.rating.rate}</h5>
                <a href="#" class="btn btn-primary">Price: $ ${val.price}</a>
            </div>
        </div>`

        ccrd.appendChild(div)
    });
}


function filterprd(qeury) {
    const proddata = prodlist.find((proddata) => {
        const prdname = proddata.title.toLowerCase();
        console.log(prdname);
        return prdname === qeury.toLowerCase();
    });

    if (proddata) {
        var div = document.createElement("div")
        div.classList.add("card")

        while(ccrd.hasChildNodes()){
            ccrd.removeChild(ccrd.lastChild);
        }

        div.innerHTML =
            `
        <div class="card" style="width: 17rem;">
            <img src="${proddata.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${proddata.title}</h5>
                <p class="card-text">Category: ${proddata.category}</p>
                <h5 class="card-title">Rating: ⭐ ${proddata.rating.rate}</h5>
                <a href="#" class="btn btn-primary">Price: $ ${proddata.price}</a>
            </div>
        </div>`

        ccrd.appendChild(div)
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const prddname = inp;
    filterprd(prddname);
});

fetchdata()