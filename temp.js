var con = document.querySelector(".container")



function fetchdata() {
    fetch('https://fakestoreapi.com/products').then(res => res.json())
        .then(json => createCard(json))
}


function createCard(data) {
    data.forEach(val => {
        console.log(val);
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
        var ccard=document.createElement("div")
        ccard.classList.add("child-card")
        con.appendChild(ccard)

        var card=document.createElement("div")
        card.classList.add("card")
        // ccard.appendChild(card)

        // var crd = document.querySelector(".card")
        // var ccrd = document.querySelector(".child-card")

        var div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = 
        `
        <div class="card" style="width: 17rem;">
            <img src="${val.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${val.title}</h5>
                <p class="card-text">${val.category}</p>
                <h5 class="card-title">⭐ ${val.rating.rate}</h5>
                <a href="#" class="btn btn-primary">${val.price}</a>
            </div>
        </div>`

        ccard.appendChild(div)
    });
}

fetchdata()