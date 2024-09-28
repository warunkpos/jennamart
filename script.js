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
        "pluname": "Bumbu Masako",
        "price": 4500,
        "img": "https://i.imgur.com/L4RouLC_d.webp?maxwidth=760&fidelity=grand"
    }, {
        "id": 2,
        "pluname": "Bumbu Royko",
        "price": 4500,
        "img": "https://id-live-01.slatic.net/p/c91845de98601ac1bb47c471badb0dfe.png"
    }, {
        "id": 3,
        "pluname": "Sabun Lervia",
        "price": 3000,
        "img": "https://id-live-01.slatic.net/p/5fb00cc2cdb4d3aeab235217ea19bd88.jpg"
    }, {
        "id": 4,
        "pluname": "Sabun GIV",
        "price": 2500,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/23/452e8011-7e1d-4963-bda8-d86317dbe6f5.jpg"
    }, {
        "id": 5,
        "pluname": "Sabun Harmony",
        "price": 1500,
        "img": "https://id-test-11.slatic.net/p/21c07fc428769cc3008d3c883fc5a561.jpg"
    }, {
        "id": 6,
        "pluname": "Minyak Sunco 2l",
        "price": 33000,
        "img": "https://down-id.img.susercontent.com/file/sg-11134201-22110-sah56w6uldjv17"
    }, {
        "id": 7,
        "pluname": "Minyak Sunco 1l",
        "price": 16500,
        "img": "https://down-id.img.susercontent.com/file/sg-11134201-22110-sah56w6uldjv17"
    }, {
        "id": 8,
        "pluname": "Minyak Sania 1l",
        "price": 16000,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/2/19/09b1223e-af01-4c5b-a44c-0e51ee7f319c.jpg"
    }, {
        "id": 9,
        "pluname": "Minyak Sovia 1l",
        "price": 16000,
        "img": "https://down-id.img.susercontent.com/file/a94f5edecb5bdcc0864a68b133bc3702"
    }, {
        "id": 10,
        "pluname": "Minyak Brand 2l",
        "price": 32000,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/4/8c9e1d49-5e04-4e8a-acb9-4141de0f71f0.jpg"
    }, {
        "id": 11,
        "pluname": "Gula Kemasan",
        "price": 15500,
        "img": "https://img.lazcdn.com/g/p/beab657a2527c0247c23d0a196c155d1.jpg_960x960q80.jpg_.webp"
    }, {
        "id": 12,
        "pluname": "Gula Curah",
        "price": 15000,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-31783203/gula_pasir_lokal_gula_pasir_curah_-1_kg-_full01_flhi8n85.jpg"
    }, {
        "id": 13,
        "pluname": "Detergen Bubuk",
        "price": 4000,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/93/MTA-102108817/daia_detergent-bubuk-daia-5000_full01.jpg"
    }, {
        "id": 14,
        "pluname": "Detergen Cair",
        "price": 4500,
        "img": "https://img.lazcdn.com/g/ff/kf/S176ba4623b224bf9bb529b724f123fd9A.jpg_720x720q80.jpg"
    }, {
        "id": 15,
        "pluname": "Detergen Renceng",
        "price": 4500,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/13/78c97689-c431-4b1e-9c57-625549da3686.jpg"
    }, {
        "id": 16,
        "pluname": "Neo Coffee",
        "price": 8000,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-10643012/neo_coffee_neo_coffee_3in1_tiramisu_bag_10x20g_full01_c26nuc7b.jpeg"
    }, {
        "id": 17,
        "pluname": "Kapal Api",
        "price": 15000,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-37146651/kapal_api_kopi_kapal_api_special_mix_kemasan_sachet_per_1_renceng_-10_pcs_x_24g-_full01_et66olsf.jpg"
    }, {
        "id": 18,
        "pluname": "Energen 5pcs",
        "price": 8000,
        "img": "https://down-id.img.susercontent.com/file/4fa2b2d936ba4650faad37640019b89c"
    }, {
        "id": 19,
        "pluname": "Bumbu Racik",
        "price": 1500,
        "img": "https://img.ws.mms.shopee.co.id/eab4077d85fbf815c1f19726cb2bb0aa"
    }, {
        "id": 20,
        "pluname": "Gulaku 1Kg",
        "price": 16500,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/11/a5de0194-6836-4271-be3d-505e4e54a753.jpg"
    }, {
        "id": 21,
        "pluname": "Ladaku 12pcs",
        "price": 9500,
        "img": "https://down-id.img.susercontent.com/file/ac7079bbe4a50d187d77b1e86953c47d"
    }, {
        "id": 22,
        "pluname": "Bimoli 1L",
        "price": 16500,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/89/MTA-178402001/bimoli_bimoli-minyak-goreng-pouch-1-l_full01.jpg"
    }, {
        "id": 23,
        "pluname": "Vipco 1L",
        "price": 15500,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-50615801/vipco_vipco_minyak_goreng_-1_l-_pouch-_full75_obauzwwa.jpeg"
    }, {
        "id": 24,
        "pluname": "Bango Renceng",
        "price": 9500, 
        "img": "https://down-id.img.susercontent.com/file/de400002b4775bfff14d1177c7e8cf76"
    }, {
        "id": 25,
        "pluname": "Kecap Sedaap",
        "price": 1500, 
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/3/0e70524e-e088-499c-9caa-d067736e27d8.jpg"
    }, {
        "id": 26,
        "pluname": "Top Cappuccino",
        "price": 11000, 
        "img": "https://c.alfagift.id/product/1/1_A7129190000985_20240627132230308_base.jpg"
    }, {
        "id": 27,
        "pluname": "Racik 210g",
        "price": 4500,
        "img": "https://assets.klikindomaret.com/products/20128248/20128248_thumb.jpg"
    }, {
        "id": 28,
        "pluname": "Kaldu Sedaap 18pcs",
        "price": 5000, 
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/MTA-145336023/sedaap_sedaap_-_bumbu_kaldu_-_paket_6_sachet_full03_b64eugwd.jpg"
    }, {
        "id": 29,
        "pluname": "Soklin Jumbo 7pcs",
        "price": 5000,
        "img":"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-49521450/soklin_soklin_liquid_softergent_soklin_cair_renceng_isi_12_-_1_pcs_full02_fxjhp1sb.jpg"
    }, {
        "id": 30,
        "pluname": "Mama lemon 230ml",
        "price": 3500,
        "img": "https://assets.klikindomaret.com/share/20084875_1.jpg"
    }, {
        "id": 31,
        "pluname": "Ekonomi 3pcs",
        "price": 4000
    }, {
        "id": 32,
        "pluname": "Vixal 750ml",
        "price": 14500
    }, {
        "id": 33,
        "pluname": "Emeron 170ml",
        "price": 12500
    }, {
        "id": 34,
        "pluname": "Sunsilk 160ml",
        "price": 14500
    }, {
        "id": 35,
        "pluname": "Downy Renceng",
        "price": 4500
    }, {
        "id": 36,
        "pluname": "Molto Renceng",
        "price": 4500
    }, {
        "id": 37,
        "pluname": "Bon Cabe",
        "price": 9000
    }, {
        "id": 38,
        "pluname": "Vaseline 100ml",
        "price": 14500
    }, {
        "id": 39,
        "pluname": "Rexona Glowing",
        "price": 11500
    }, {
        "id": 40,
        "pluname": "SG Ciptadent 3pcs",
        "price": 15000
    }, {
        "id": 41,
        "pluname": "Pantene Rencenng",
        "price": 9500
    }, {
        "id": 42,
        "pluname": "Rexona Dreamy",
        "price": 11500
    }, {
        "id": 43,
        "pluname": "Sabun Fres 400ml",
        "price": 11500
    }, {
        "id": 44,
        "pluname": "Sandal Swallow",
        "price": 10500
    }, {
        "id": 45,
        "pluname": "Hanger",
        "price": 8000
    }, {
        "id": 46,
        "pluname": "Sedaap Goreng",
        "price": 3000
    }, {
        "id": 47,
        "pluname": "Lervia Cair 400ml",
        "price": 15000
    }, {
        "id": 48,
        "pluname": "Posh 50ml",
        "price": 11000
    }, {
        "id": 49,
        "pluname": "Lervia Lotion 200ml",
        "price": 11000
    }, {
        "id": 50,
        "pluname": "Pantene 110ml",
        "price": 17000
    }, {
        "id": 51,
        "pluname": "Sunsilk 160ml",
        "price": 20000
    }, {
        "id": 52,
        "pluname": "Pepsodent 225gram",
        "price": 10000
    }, {
        "id": 53,
        "pluname": "Mama Lemon 950ml",
        "price": 13000
    }, {
        "id": 54,
        "pluname": "Soklin 800g",
        "price": 16500
    }, {
        "id": 55,
        "pluname": "Soklin 800g",
        "price": 16500
    }, {
        "id": 56,
        "pluname": "Pepsodent 2x225g",
        "price": 19500
    }, {
        "id": 57,
        "pluname": "Santan Kara",
        "price": 3000
    },
]

function appendListProducts(data) {
    for (var i = 0; i < data.length; i++) {
        var dataHtml = `
        <ion-col class="ion-no-padding"  size-sm="6">
            <ion-card class="custom-card">
                <img alt="`+ data[i].pluname + `"
                    src="`+ data[i].img + `" />
                <ion-card-header>
                    <ion-card-subtitle> Rp. `+ Number(data[i].price).toLocaleString('id-ID') + `</ion-card-subtitle>
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
                    <ion-item-option color="danger" onclick="removeListById(`+ data[i].id + `)"><ion-icon name="trash-outline"></ion-icon></ion-item-option>
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

function removeListById(id) {
    const indexToRemove = cartitem.findIndex(item => item.id === id);
    if (indexToRemove !== -1) {
        cartitem.splice(indexToRemove, 1);
        localStorage.setItem('cart', JSON.stringify(cartitem));
        $('#listCart').html('');
        $('#grandTotal').html('');

        appendListCart(cartitem);
    }
}