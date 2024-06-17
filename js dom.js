const products = [
    {
        title: "Product 1",
        description: "Description for Product 1",
        image: "https://images.pexels.com/photos/6823326/pexels-photo-6823326.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Product 2",
        description: "Description for Product 2",
        image: "https://images.pexels.com/photos/6823326/pexels-photo-6823326.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Product 3",
        description: "Description for Product 3",
        image: "https://images.pexels.com/photos/6823326/pexels-photo-6823326.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

function CreateProducts(product) {
    var Card = document.createElement("div");
    Card.className = "imgYazefta";

    var img = document.createElement("img");
    img.src = product.image;
    Card.appendChild(img)

    var title = document.createElement("h3")
    title.innerText = product.title;
    Card.appendChild(title);

    var desc = document.createElement("p")
    desc.innerHTML = product.description;
    Card.appendChild(desc);



    return Card;
}


// Call بقا
var container = document.getElementById('Container');
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    var card = CreateProducts(product);
    container.appendChild(card)



}
//Filter 

var Button = document.getElementById("searchBox");

Button.onkeyup = function (event) {
    var search = event.target.value.toLowerCase();
    console.log(search);
    var filterdproducts = products.filter(function (product) {
        if (product.title.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)) {
            return product;

        }
    })
    console.log(filterdproducts);
    container.innerHTML = "";
    if (filterdproducts.length <= 0)
        {
            container.innerHTML = "<P class='Not-found'>Not Found</P>";
        }
    filterdproducts.forEach(function (product) {

        var card = CreateProducts(product);
        container.appendChild(card)
    })
}
