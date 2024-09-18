function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const form = document.getElementById('formSubmit');
const pluname = document.getElementById('pluname');
const price = document.getElementById('price');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (e) => {

    e.preventDefault();
    document.cookie = "username=Max Brown";
    localStorage.setItem("lastname", "Smith");
    var toast = document.getElementById("errorSubmit");
    if (pluname.value === "") {
        toast.isOpen = true;
        toast.message = "Plu Number is Required"
    } else if (price.value === "") {
        toast.isOpen = true;
        toast.message = "Price is Required"

    } else {
        const formData = {
            username: pluname.value,
            password: price.value,
        };
        // Form submission logic goes here
        console.log(formData);
        document.cookie = "products" + "=" + formData;
        // setCookie("products", formData)
    }
    setTimeout(() => {
        toast.isOpen = false;
    }, 2000);
});


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
    for (var i = 0; i <= data.length; i++) {
        var dataHtml = `
        <ion-col class="ion-no-padding"  size-sm="6">
            <ion-card class="custom-card">
                <img alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <ion-card-header>
                    <ion-card-title>`+data[i].pluname+`</ion-card-title>
                    <ion-card-subtitle>`+data[i].price+`</ion-card-subtitle>
                </ion-card-header> 
                <ion-button class="ion-btn-card">Add</ion-button>
            </ion-card>
        </ion-col> `;
        $('#listProducts').append(dataHtml)
    }
}
appendListProducts(products);

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