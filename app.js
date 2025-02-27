const icon=document.getElementById("icon");
const mobilemenu=document.getElementById("mobilemenu");

icon.addEventListener("click", () => {
mobilemenu.classList.toggle("hidden");
})

// end header

const Allproduct=[
    {
        Image: "img/book1.jpg",
        name : "Jown",
        price: 20
    },
    {
        Image: "img/book3.jpg",
        name : "Rich Bad",
        price: 40
    },
    {
        Image: "img/book4.jpg",
        name : "Eric Riec",
        price: 25
    },
    {
        Image: "img/book5.jpg",
        name : "Lietes Out",
        price: 18
    },
];

const Productcard=document.querySelector("#Productcard");

Allproduct.map((product)=>{
    producthtml=`<div class="shadow-lg bg-gray-200 px-3 py-5 my-20 scale-130">
                <img src="${product.Image}">
                <h3>${product.name}</h3>
                <h4>$${product.price} </h4>
                <button class="rounded-lg bg-[#AAD302] px-2 py-1 cursor-pointer" onclick="buyNow('${product.Image}', '${product.name}', '${product.price}')">Buy Now</button>
                
            </div>`
            Productcard.innerHTML += producthtml;

})

// end reding producs

function buyNow(image, name, price) {
    // Ensure the keys are strings
    sessionStorage.setItem('ProductName', name);
    sessionStorage.setItem('ProductImg', image);
    sessionStorage.setItem('ProductPrice',price);

    // Navigate to the "Buynow.html" page
    window.location.href = "Buynow.html";
}