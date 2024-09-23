function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


///list products------------------
const products = [{
    "id": 1,
    "pluname": "Masako",
    "price": 4500
}, {
    "id": 2,
    "pluname": "Royko",
    "price": 4500
}, {
    "id": 3,
    "pluname": "Sabun Lervia",
    "price": 3000
}, {
    "id": 4,
    "pluname": "Sabun GIV",
    "price": 2500
}, {
    "id": 5,
    "pluname": "Sabun Harmony",
    "price": 1500
}]

function appendListProducts(data) {
    for (var i = 0; i < data.length; i++) {
        var dataHtml = `
        <ion-col class="ion-no-padding"  size-sm="6">
            <ion-card class="custom-card">
                <img alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <ion-card-header>
                    <ion-card-title>`+ data[i].pluname + `</ion-card-title>
                    <ion-card-subtitle>`+ data[i].price + `</ion-card-subtitle>
                </ion-card-header> 
                <ion-button expand="block" class="ion-btn-card ion-no-padding" onclick="addToCart(`+ data[i].id + `)">Add</ion-button>
            </ion-card>
        </ion-col> `;
        $('#listProducts').append(dataHtml)
    }
}
appendListProducts(products);

const modal = document.getElementById('openQty');
function addToCart(id) {
    console.log('open-----')
    const data = products.filter((i) => i.id === id)[0];
    modal.isOpen = true; 


}

const counter = document.querySelector('#counter');
function increment() {
    
    counter.innerHTML = parseInt(counter.innerText) + 1;
}

function decrement() {
    console.log(parseInt(counter.innerText));
    if (parseInt(counter.innerText) > 0) {
        counter.innerHTML = parseInt(counter.innerText) - 1;
    }
}

const searchbar = document.querySelector('ion-searchbar');
const items = Array.from(document.getElementById('listProducts').children);
searchbar.addEventListener('ionInput', handleInput);
function handleInput(event) {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
        items.forEach(item => {
            const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
            item.style.display = shouldShow ? 'block' : 'none';
        });
    });
}

// ----------

var modalCart = document.getElementById('modalCart');

function closeCart() {
    console.log('close');

    modalCart.dismiss();
    modal.isOpen = false;
}

function printCart() {
    ///print
}

