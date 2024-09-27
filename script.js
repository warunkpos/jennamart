function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


///list products------------------
const products = [
    {
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
    }, {
        "id": 6,
        "pluname": "Minyak Sunco 2l",
        "price": 33000
    }, {
        "id": 7,
        "pluname": "Minyak Sunco 1l",
        "price": 16500
    }, {
        "id": 8,
        "pluname": "Minyak Sania 1l",
        "price": 16000
    }, {
        "id": 9,
        "pluname": "Minyak Sovia 1l",
        "price": 16000
    }, {
        "id": 10,
        "pluname": "Minyak Brand 2l",
        "price": 32000
    }, {
        "id": 11,
        "pluname": "Gula Kemasan",
        "price": 15500
    }, {
        "id": 12,
        "pluname": "Gula Curah",
        "price": 15000
    }, {
        "id": 13,
        "pluname": "Detergen Bubuk",
        "price": 4000
    }, {
        "id": 14,
        "pluname": "Detergen Cair",
        "price": 4500
    }, {
        "id": 15,
        "pluname": "Detergen Bubuk Renceng",
        "price": 4500
    }, {
        "id": 16,
        "pluname": "Neo Coffee",
        "price": 8000
    }, {
        "id": 17,
        "pluname": "Kapal Api",
        "price": 15000
    }, {
        "id": 18,
        "pluname": "Energen",
        "price": 8000
    }, {
        "id": 19,
        "pluname": "Bumbu Racik",
        "price": 1500
    }
]

function appendListProducts(data) {
    for (var i = 0; i < data.length; i++) {
        var dataHtml = `
        <ion-col class="ion-no-padding"  size-sm="6">
            <ion-card class="custom-card">
                <img alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <ion-card-header>
                    <ion-card-subtitle> Rp.`+ Number(data[i].price).toLocaleString('id-ID') + `</ion-card-subtitle>
                    <ion-card-title>`+ data[i].pluname + `</ion-card-title>
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
    document.getElementById('price').innerHTML = 'Rp. ' + Number(dataProduct.price).toLocaleString('id-ID')
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

let cartitem = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
setInterval(() => {
    document.getElementById('badgeCart').innerHTML = cartitem.length;
}, 1000);

function addCart() {
    dataProduct.qty = parseInt(counter.innerText);
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
    localStorage.setItem('cart', JSON.stringify(cartitem))
    modal.isOpen = false;
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
    window.print();
}

function clearCart() {
    cartitem = [];
    localStorage.setItem('cart', []);
    $('#listCart').html('');
    $('#grandTotal').html('');
}

function openListCart() {
    $('#listCart').html('');
    $('#grandTotal').html('');

    appendListCart(cartitem);
}


function appendListCart(data) {
    let total = 0;
    for (var i = 0; i < data.length; i++) {
        var dataHtml = `
            <ion-item-sliding>
                <ion-item>
                    <ion-label>`+ data[i].pluname + ` (Rp.` + Number(data[i].price).toLocaleString('id-ID') + ` )</ion-label>
                    <ion-badge class="mr-20 badge-qty">`+ data[i].qty + `</ion-badge>
                    <p> Rp. `+ Number(data[i].qty * data[i].price).toLocaleString('id-ID') + `</p>
                </ion-item>
                <ion-item-options>
                    <ion-item-option color="danger"><ion-icon name="trash-outline"></ion-icon></ion-item-option>
                </ion-item-options>
            </ion-item-sliding>`;
        $('#listCart').append(dataHtml);
        total = total + (data[i].qty * data[i].price);
    }
    if (total > 0) {
        var dataHtml = `
                    <ion-item>
                        <ion-label>Total</ion-label>
                        <p> Rp. `+ Number(total).toLocaleString('id-ID') + `</p>
                    </ion-item> `;
        $('#grandTotal').append(dataHtml);
    }
    console.log(total);

}