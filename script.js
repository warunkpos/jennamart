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
        "price": 33500,
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
        "price": 16000,
        "img": "https://img.lazcdn.com/g/p/beab657a2527c0247c23d0a196c155d1.jpg_960x960q80.jpg_.webp"
    }, {
        "id": 12,
        "pluname": "Gula Curah 1Kg",
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
        "price": 8500,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-10643012/neo_coffee_neo_coffee_3in1_tiramisu_bag_10x20g_full01_c26nuc7b.jpeg"
    }, {
        "id": 17,
        "pluname": "Kopi Kapal Api",
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
        "pluname": "Minyak Bimoli 1L",
        "price": 16500,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/89/MTA-178402001/bimoli_bimoli-minyak-goreng-pouch-1-l_full01.jpg"
    }, {
        "id": 23,
        "pluname": "Minyak Vipco 1L",
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
        "price": 4000,
        "img": "https://img.lazcdn.com/g/p/c1149bc8bc0e953889a7a8f35d08d0bc.jpg_360x360q75.jpg_.webp"
    }, {
        "id": 32,
        "pluname": "Vixal 750ml",
        "price": 14500,
        "img": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/7/22/7787e041-e864-464c-adcf-54bcd4d4d837.jpg"
    }, {
        "id": 33,
        "pluname": "Emeron 170ml",
        "price": 12500,
        "img": "https://id-live-01.slatic.net/p/641ff4cb79b1426b68e8e55de43f0620.jpg"
    }, {
        "id": 34,
        "pluname": "Sunsilk 160ml",
        "price": 19500,
        "img": "https://img.ws.mms.shopee.co.id/id-11134207-7qul9-lhzxtnk9m9lqf7"
    }, {
        "id": 35,
        "pluname": "Downy Renceng",
        "price": 4500,
        "img": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/11/13/7324f5bd-e672-4525-a4f5-08a9980f30e3.jpg"
    }, {
        "id": 36,
        "pluname": "Molto Renceng",
        "price": 4500,
        "img": "https://id-live-01.slatic.net/p/883c8c5baffebf9d8ea8e09a6cd7da67.jpg"
    }, {
        "id": 37,
        "pluname": "Bon Cabe",
        "price": 9000,
        "img": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/6/4/eff458ba-e031-4fba-8908-455194dd5afe.jpg"
    }, {
        "id": 38,
        "pluname": "Vaseline 100ml",
        "price": 14500,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-3449578/vaseline_hand-body-vaseline-100ml-healthy-white-uv-lightening_full02.jpg"
    }, {
        "id": 39,
        "pluname": "Rexona Glowing",
        "price": 13000,
        "img": "https://cdn.sanity.io/images/27438tds/rexona-global-production/dbf9c60b5d62656ae893700126d9689344aa5335-600x600.jpg"
    }, {
        "id": 40,
        "pluname": "SG Ciptadent 3pcs",
        "price": 15000,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-4498324/ciptadent_ciptadent_sikat_gigi_crystal_clean_soft_3pcs_full01_uuy6au8k.jpg"
    }, {
        "id": 41,
        "pluname": "Pantene Rencenng",
        "price": 9500,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/11/b43f2e3a-2d76-4856-9271-881df7bad9c0.jpg"
    }, {
        "id": 42,
        "pluname": "Rexona Dreamy",
        "price": 13000,
        "img": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/9/993fa0a6-efc0-4b1e-99b5-a13579cd7c85.jpg"
    }, {
        "id": 43,
        "pluname": "Sabun Fres 400ml",
        "price": 11500,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/101/MTA-132957551/fres_-_natural_fres_-_natural_body_wash_400_ml_full01_f46006e7.jpg"
    }, {
        "id": 44,
        "pluname": "Sandal Swallow",
        "price": 10500,
        "img": "https://images.tokopedia.net/img/cache/700/product-1/2019/6/16/1543072/1543072_209c3473-cfe0-4b6a-a7bd-d0e5e101cd87_700_700.jpg"
    }, {
        "id": 45,
        "pluname": "Hanger",
        "price": 8000,
        "img": "https://img.lazcdn.com/g/p/2561e1abb7a57b6b8d8844296e0b41ab.jpg_720x720q80.jpg"
    }, {
        "id": 46,
        "pluname": "Sedaap Goreng",
        "price": 3000,
        "img": "https://down-id.img.susercontent.com/file/af0e40536a9353d6aabb4308ed4ad35c"
    }, {
        "id": 47,
        "pluname": "Lervia Cair 400ml",
        "price": 15000,
        "img": "https://down-id.img.susercontent.com/file/fbefae562d4071d7eeedbb4454b8b184"
    }, {
        "id": 48,
        "pluname": "Posh 50ml",
        "price": 11000,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/27/589a70b1-f5e1-4b8a-bfd6-354dcdf55f21.jpg"
    }, {
        "id": 49,
        "pluname": "Lervia Lotion 200ml",
        "price": 11000,
        "img": "https://img.ws.mms.shopee.co.id/7f7d3645bfd79188fd4d0ce615897b95"
    }, {
        "id": 50,
        "pluname": "Pantene 110ml",
        "price": 17000,
        "img": "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lxkidg50oo181a"
    }, {
        "id": 51,
        "pluname": "Sunsilk 160ml",
        "price": 19500,
        "img": "https://img.ws.mms.shopee.co.id/id-11134207-7qul9-lhzxtnk9m9lqf7"
    }, {
        "id": 52,
        "pluname": "Pepsodent 225gram",
        "price": 10000,
        "img": "https://assets.klikindomaret.com/products/20047217/20047217_1.webp"
    }, {
        "id": 53,
        "pluname": "Mama Lemon 950ml",
        "price": 13000,
        "img": "https://assets.klikindomaret.com/products/20131788/20131788_1.webp"
    }, {
        "id": 54,
        "pluname": "Soklin 800g",
        "price": 16500,
        "img": "https://assets.klikindomaret.com/products/10030924/10030924_1.webp"
    } , {
        "id": 55,
        "pluname": "Pepsodent 2x225g",
        "price": 19500,
        "img": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-35677849/pepsodent_pepsodent_toothpaste_white_prm_-2x225_gr-_full02_zrb8jyo.jpeg"
    }, {
        "id": 56,
        "pluname": "Santan Kara",
        "price": 3000,
        "img": "https://assets.klikindomaret.com/products/10022118/10022118_1.webp"
    }, {
        "id": 57,
        "pluname": "Cleantex",
        "price": 13500,
        "img": "https://down-id.img.susercontent.com/file/15a01c90eafe6807c300bcfd160a019f"
    }, {
        "id": 58,
        "pluname": "Sunlight 370ml",
        "price": 7500,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/8/d9faf0f8-d7bf-4430-97d0-65e4c01213aa.jpg"
    }, {
        "id": 59,
        "pluname": "Kapal api renceng 6gr",
        "price": 8000,
        "img": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkp42ablapzp6e"
    }, {
        "id": 60,
        "pluname": "Kecap Sawi 175ml",
        "price": 4000,
        "img": "https://filebroker-cdn.lazada.co.id/kf/S33a5876e712149f897df52d0dac3adf5X.jpg"
    },{
        "id": 61,
        "pluname": "Kecap Sedaap",
        "price": 1500,
        "img": "https://images.tokopedia.net/img/cache/700/hDjmkQ/2024/7/14/6a2d0f58-6600-4f9e-816c-1b585c5d85e3.jpg"
    },{
        "id": 62,
        "pluname": "Kecap Indofood",
        "price": 1500,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/21/8f7170d3-b5a9-4662-bdd9-d41b502716f9.png"
    },{
        "id": 63,
        "pluname": "Kecap Bango",
        "price": 750,
        "img": "https://down-id.img.susercontent.com/file/id-11134207-7qul2-lhmqlctmucbr64"
    },{
        "id": 64,
        "pluname": "Freshcare hot",
        "price": 12500,
        "img": "https://d2qjkwm11akmwu.cloudfront.net/products/351075_7-4-2021_10-6-33-1665780346.webp"
    },{
        "id": 65,
        "pluname": "S. lifebuoy renceng",
        "price": 4500,
        "img": "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lnqqjua1ej4r74"
    },{
        "id": 66,
        "pluname": "S. lifebuoy ecer",
        "price": 1000,
        "img": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/26/e95d8220-cd7f-4b58-ae5a-6924ba264945.jpg"
    }, {
        "id": 67,
        "pluname": "Masker Wajah",
        "price": 7000,
        "img": "https://down-id.img.susercontent.com/file/4c5a68904e5d5e1f46bc70b1ee9946b5"
    }, {
        "id": 68,
        "pluname": "Rinso Sensi 700g",
        "price": 16500,
        "img": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-ly3dzrcb8dfia5_tn"
    }, {
        "id": 69,
        "pluname": "Kertas Minyak 100",
        "price": 9500,
        "img": "https://filebroker-cdn.lazada.co.id/kf/S927104d74e1145938ee7ca9da7a5969aE.jpg"
    }, {
        "id": 70,
        "pluname": "Kertas Minyak 200",
        "price": 18500,
        "img": "https://filebroker-cdn.lazada.co.id/kf/S927104d74e1145938ee7ca9da7a5969aE.jpg"
    }, {
        "id": 71,
        "pluname": "Makuku M28",
        "price": 46000,
        "img": "https://id-test-11.slatic.net/p/3fe70076a1072de329a05bd5be5d8aeb.jpg"
    }, {
        "id": 70,
        "pluname": "Makuku L26",
        "price": 48000,
        "img": "https://down-id.img.susercontent.com/file/sg-11134201-7qvdp-li9of2j2q9nwd6"
    }, {
        "id": 71,
        "pluname": "Sweety L28",
        "price": 43000,
        "img": "https://arti-assets.sgp1.digitaloceanspaces.com/renyswalayanku/products/b889a335-b9d0-486e-9f14-389aa5f625b5.jpg"
    },
]

function appendListProducts(data) {
    for (var i = 0; i < data.length; i++) {
        var dataHtml = `
        <ion-col class="ion-no-padding"  size-sm="6">
            <ion-card class="custom-card">
                <img alt="`+ data[i].pluname + `" src="`+ data[i].img + `" />
                <ion-card-header>
                    <ion-card-subtitle> Rp. `+ Number(data[i].price).toLocaleString('id-ID') + `</ion-card-subtitle>
                    <ion-card-title>`+ data[i].pluname + `</ion-card-title>
                </ion-card-header> 
                <ion-button expand="block" class="ion-btn-card ion-no-padding" onclick="addToCart(`+ data[i].id + `)">Add</ion-button>
            </ion-card>
        </ion-col> `;
        $('#listProducts').append(dataHtml);
    }
}
appendListProducts(products);
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
});

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
    $('#printView').show();
    $('#PrintInvoice').hide();
    modalCart.dismiss();
    modal.isOpen = false;
}

function printCart() {
    $('#printView').hide();
    $('#PrintInvoice').show();

}

function clearCart() {
    cartitem = [];
    localStorage.setItem('cart', []);
    $('#listCart').html('');
    $('#grandTotal').html('');
    $('#grandTotalPrint').html('');
    $('#nameBuyer').html('');
    $('#listViewPrint').html(''); 
}

function openListCart() {
    $('#listCart').html('');
    $('#grandTotal').html('');
    $('#buyer').html('');
    $('#grandTotalPrint').html('');
    $('#listViewPrint').html('');
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

        var dataview = `
                <tr class="item">
                    <td style="padding: 5px;vertical-align: top;border-bottom: 1px solid #eee;">
                        `+ data[i].pluname + `
                    </td>
                    <td style="text-align: right;">`+ data[i].qty + `</td>
                    <td
                        style="padding: 5px;vertical-align: top;text-align: right;border-bottom: 1px solid #eee;">
                        Rp. `+ Number(data[i].qty * data[i].price).toLocaleString('id-ID') + `
                    </td>
                </tr> `

        $('#listViewPrint').append(dataview);
    }
    if (total > 0) {
        var dataHtml = `
                    <ion-item>
                        <ion-label>Total</ion-label>
                        <p> Rp. `+ Number(total).toLocaleString('id-ID') + `</p>
                    </ion-item> `;
        $('#grandTotal').html(dataHtml);
        var dataview =  'Rp. '+Number(total).toLocaleString('id-ID') 
        $('#grandTotalPrint').html(dataview);
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
        $('#grandTotalPrint').html('');
        $('#listViewPrint').html('');
        appendListCart(cartitem);
    }
}

const invoice = moment().format('hh/mm/DD/MM/YYYY')
$('#invoice').html('JM'+invoice);

function nameBuyer(val) {
    $('#buyer').html(val)
}