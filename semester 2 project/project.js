let cart = 0;


function addCart(){

    cart++;

    document.getElementById("cartCount").innerHTML = cart;

    alert("Product added to cart!");
}



function searchProduct(){

    let value = document.getElementById("search").value;

    if(value==""){
        alert("Enter product name");
    }

    else{
        alert("Searching for: " + value);
    }

}