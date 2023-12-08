let ProductInCart = localStorage.getItem("ProductInCart")
let allProducts = document.querySelector(".productscart")

if(ProductInCart){
    let item = JSON.parse(ProductInCart)
    drawCartProduct(item)
}
function drawCartProduct(productscart){
        let y = productscart.map(item =>{
                item.quantity = 1; 
         return `
    
          <div class="Productincart p-2 mt-3 shadow-lg d-inline-flex me-5">
            <img class="d-inline-flex " src="${item.imageUrl}" height="200" style="border-radius: 30px; margin-left: 50px;">
                       
           <div class="imgInfo">
               <p class="title">Product:${item.title}</p>
               <p class="price">Price:${item.price}</p>
               <p class="category"> Category: ${item.category}</p>
              <span class="incredecre">${item.quantity}</span> 
              <button class="plus" style="font-size:30px" onclick="increaseQuantity(${item.id})">+</button>
              <button class="minus" style="font-size:30px" onclick="decreaseQuantity(${item.id})">- &nbsp</button>
               <button class="add-to-cart p-2 rounded px-4" onclick="removeFromCart(${item.id})">Remove</button>
           </div>
       </div>
       `
        })
 allProducts.innerHTML = y; 
} 
//////////////////////////////////////////////////////////////////////////

var plus = document.querySelector(".plus")
//var count =0;
var incredecre =document.querySelector('.incredecre')
let quantity =1;
function increaseQuantity() {
  quantity++;
  updateQuantity();
}
function decreaseQuantity() {
  if (quantity > 0) {
    quantity--;
    updateQuantity();   
  }
}
function updateQuantity() {
  incredecre.textContent = quantity;
}
////////////////////////////////////////////////////////////calculate total
var totalplace = document.getElementById("totalplace")
var priceElements = document.querySelectorAll('.price');
var total = 0;
priceElements.forEach(function(priceElement) {
    var priceString = priceElement.textContent.replace('Price:', '').trim();
    var price = parseFloat(priceString);

    total += price;
});
totalplace.innerHTML = total
console.log(total);
////////////////////////////////////////////////////////////////////////remove from cart
function removeFromCart(productId) {
    let items = JSON.parse(localStorage.getItem("ProductInCart"));
    let updatedItems = items.filter(item => item.id !== productId);

    localStorage.setItem("ProductInCart", JSON.stringify(updatedItems));
    drawCartProduct(updatedItems);
  }
///////////////////////////////////////////////////////favourites////////////////////////////////////////////////////////////favourite
let ProductsInFav = localStorage.getItem("ProductsInFav")
let allProductsfav = document.querySelector(".productsfav")


if(ProductsInFav){
    let itemfav = JSON.parse(ProductsInFav)
    drawFavProducts(itemfav)
}
 
function drawFavProducts(productsfav){
    let x = productsfav.map(itemfav =>{
     return `
<div class="favproduct p-2 mt-3 shadow-lg" style="width: 30%; align-items: center;" >
     <img class=" favimg" src="${itemfav.imageUrl}" height="180" width="190">
                
    <div class="">
    <h5 class="card-title pTitle">Product:${itemfav.title}</h5>
        <h6 class="card-title" id="category"> Category: ${itemfav.category}</h6>
        <i class="fas fa-heart" id="favpro" style="color: red; cursor: pointer;" onclick="removeFromFav(${itemfav.id})"></i>
    </div>
</div>
     `
    })
    allProductsfav.innerHTML = x;  
 }
function removeFromFav(productId){
    let itemsfav = JSON.parse(localStorage.getItem("ProductsInFav"));
    let updatedItemsfav = itemsfav.filter(item => item.id !== productId);

    localStorage.setItem("ProductsInFav", JSON.stringify(updatedItemsfav));
    drawFavProducts(updatedItemsfav);
}