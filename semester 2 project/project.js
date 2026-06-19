let cart = [];
let total = 0;

function addCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    total += price;

    updateCart();
}

function updateCart(){

    document.getElementById("cartCount").innerHTML = cart.length;

    document.getElementById("totalPrice").innerHTML = total;

    let items = document.getElementById("cartItems");

    items.innerHTML = "";

    cart.forEach((item,index)=>{

        items.innerHTML += `
        <li>
            <b>${item.name}</b><br>
            ₹${item.price}

            <button class="remove-btn"
            onclick="removeItem(${index})">
            Remove
            </button>

        </li>
        `;

    });

}

function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    updateCart();

}

function toggleCart(){

    document.getElementById("cartBox").classList.toggle("active");

}

function searchProduct(){

    let input=document.getElementById("search").value.toLowerCase();

    let cards=document.querySelectorAll(".card");

    cards.forEach(card=>{

        let title=card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input))
            card.style.display="block";
        else
            card.style.display="none";

    });

}