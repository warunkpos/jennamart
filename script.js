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
let dataProduct = ''
function addToCart(id) {
    dataProduct = products.filter((i) => i.id === id)[0];
    modal.isOpen = true; 
    counter.innerHTML = 1;
    document.getElementById('pluname').innerHTML = dataProduct.pluname;
    document.getElementById('price').innerHTML = 'Rp. ' +Number(dataProduct.price).toLocaleString('id-ID')
}

const counter = document.querySelector('#counter');
function increment() {
    
    counter.innerHTML = parseInt(counter.innerText) + 1;
}

function decrement() {
    if (parseInt(counter.innerText) > 1) {
        counter.innerHTML = parseInt(counter.innerText) - 1;
    }
}

function addCart() {
    dataProduct.qty = parseInt(counter.innerText);
    const cartitem = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let index = cartitem.findIndex((cartItem) => cartItem.id === dataProduct.id);
    if (cartitem.length > 0) {
        if (index !== -1) {
            cartitem[index].qty = cartitem[index].qty + dataProduct.qty
        } else {
            cartitem.push(dataProduct)
        }
    } else {
        cartitem.push(dataProduct)
    }
    console.log(cartitem);
    localStorage.setItem('cart',  JSON.stringify(cartitem))
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

