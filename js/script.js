let userInfo = document.querySelector("#user-info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

  if (localStorage.getItem("fname")){
    links.remove()     
    userInfo.style.display = "flex"
    userData.style.marginRight ="500px"
    userData.style.textTransform="uppercase"
    userData.innerHTML = "Welcome "+ localStorage.getItem("fname")
  }

let logOutBtn = document.querySelector("#logout")
  logOutBtn.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(() =>{
    window.location = "login.html"
  },1500 )
})     
///////////////////////////////////////////////////////////////////////////////
const search = () =>{
if(document.getElementById('searchOption').value == "val1") {
  
    const searchbox = document.getElementById("searchBar").value.toUpperCase();
    const storeitems = document.getElementById("products")
    const product = document.querySelectorAll(".card")
    const pname = storeitems.getElementsByTagName("h5")
  
    for(var i =0 ; i< pname.length; i++){
      let match = product[i].getElementsByTagName('h5')[0];
  
      if(match){
       let textvalue =  match.textContent || match.innerHTML
  
       if(textvalue.toUpperCase().indexOf(searchbox)  > -1){
        product[i].style.display = "";
       }else{
        product[i].style.display = "none";
       }
      }
    }
  }else if(document.getElementById('searchOption').value == "val2"){
    const searchbox = document.getElementById("searchBar").value.toUpperCase();
    const storeitems = document.getElementById("products")
    const product = document.querySelectorAll(".card")
    const pcategory = storeitems.getElementsByTagName("h6")
  
    for(var i =0 ; i< pcategory.length ; i++){
      let match = product[i].getElementsByTagName('h6')[0];
  
      if(match){
        textvalue = match.textContent || match.innerHTML
  
        if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
          product[i].style.display = "";
        }else{
          product[i].style.display = "none";
        }
      }
    }
  }
}
////////////////////////////////////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products = [
  {
    id:1,
    title:"T-shirt",
    price :"80 $",
    category:"Sport Fashion",
    imageUrl : "images/t-shirt .jpg"
    
  },
  {
    id:2,
    title:"Blouse",   
    price : "1000 $",
    category:"Classic Fashion",  
    imageUrl : "images/blouse.jpg"
    
  },
  {
    id:3,
    title:"Jacket",
    price : "300 $",
    category:"Fashion",
    imageUrl : "images/jacket.jpg"
    
  },
  {
    id:4,
    title:"Earpoads",
    price : "500$",
    category:"Phone Accessories",
    imageUrl : "images/earpods.jpg"
    
  },
  {
    id:5,
    title:"Shoes",
    price : "100 $",
    category:"Sport Fashion",
    imageUrl : "images/shoes.jpg"
    
  },
  {
    id:6,
    title:"Power Bank",
    price : "90 $",
    category:"Phone Accessories",
    imageUrl : "images/powerbank.jpg" 
    
  },
  {
    id:7,
    title:"Phone Cover",
    price : "50 $",
    category:"Phone Accessories",
    imageUrl : "images/cover.jpg"
    
  },
  {
    id:8,
    title:"Classic Shoes",
    price : "3200 $",
    category:"classic Fashion",
    imageUrl : "images/classicshoes.jpg"
    
  },
  {
    id:9,
    title:"Bag",
    price : "300 $",
    category:"Fashion",
    imageUrl : "images/bag.jpg"
    
  },
]
 function drawItems(){
   let y = products.map(item =>{
    return `
    <div class="card h-90 p-2 rounded  mt-3 shadow-lg"  style="width: 33%;">
     <img class="card-img-top rounded" src="${item.imageUrl}" height="350">
                
    <div class="card-body">
    <h5 class="card-title pTitle">Product:${item.title}</h5>
        <p class="card-title pricepro">Price: ${item.price}</p>
        <h6 class="card-title" id="category"> Category: ${item.category}</h6>
      <div class="d-flex justify-content-between">
           <button class="add-to-cart p-2 rounded px-4" onclick="addToCart(${item.id}); this.style.backgroundColor = 'red'; 
              this.textContent='Remove from cart' ">Add to Cart</button>
          <i class="fas fa-heart" id="favpro" style="color: rgb(175, 173, 173);" onclick="addToFavourite(${item.id}) ; this.style.color = 'red' "></i>
      </div>  
        </div>
</div>`
   })
   allProducts.innerHTML = y;  
} 
drawItems()

/////////////////////////////////////////////////////////////
let badge = document.querySelector(".badge")
let cartProductDiv = document.querySelector(".cart-products div")

//let addedItem = [];
let addedItem = localStorage.getItem("ProductInCart") ? JSON.parse(localStorage.getItem("ProductInCart")) : [];
if(addedItem){
  addedItem.map(item =>{
    cartProductDiv.innerHTML += `<p> <span class="d-flex justify-content-between">${item.title}              
      <span class="incredecre"></span> 
    <span>
      <span class="plus" onclick="increaseQuantity() ">+</span>
      <span class="minus" onclick="decreaseQuantity()">-</span>
   </span>
    </span>
      </p>`
  
  })
  badge.style.display = "block";
  badge.innerHTML = addedItem.length
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if(localStorage.getItem("email")){     
    function addToCart(id){
      let choosenItem = products.find((item) => item.id === id)
      cartProductDiv.innerHTML += `<p><span class="d-flex justify-content-between">${choosenItem.title} <span class="incredecre"></span> 
      <span>
        <span class="plus" onclick="increaseQuantity() ">+</span>
        <span class="minus" onclick="decreaseQuantity()">-</span>
     </span>
      </span>
        </p>`
      
      addedItem = [...addedItem, choosenItem]  
      localStorage.setItem("ProductInCart",JSON.stringify( addedItem))

  let CartProductLength = document.querySelectorAll(".cart-products div p")

      badge.style.display="block"
      badge.innerHTML = CartProductLength.length
    }
  
  } else{
    window.location = "login.html"
  }
let cartProducts = document.querySelector(".cart-products")

////////////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping-cart")

shoppingCartIcon.addEventListener("click" , opencart)
function opencart(){
  if(cartProductDiv.innerHTML != ""){
    if(cartProducts.style.display=="block"){   
      cartProducts.style.display="none"     
    }else{
      cartProducts.style.display="block"
    }
  }
}
/////////////////////////////////////////////////////////add to favourite//////////////////////////////////////
var heart = document.querySelector(".fa-heart")
var productsfav = document.querySelector(".products-fav")

let addedfav = []
function addToFavourite(id){
  let favitem = products.find((item) => item.id === id);
   

  addedfav = [...addedfav , favitem]
  localStorage.setItem("ProductsInFav" ,JSON.stringify(addedfav))
}
/////////////////////////////////////////////////////
var plus = document.querySelector(".plus")
var incredecre =document.querySelector('.incredecre')
let quantity =1;
function increaseQuantity() {
  quantity++;
  updateQuantity();
}
function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
}
function updateQuantity() {
  incredecre.textContent = quantity;
}
//////////////////////////

/* else if (quantity === 0) {
    
  let itemsInCart = JSON.parse(localStorage.getItem("cartProductDiv"));
  let updatedItems = itemsInCart.filter(item => item.id !== id);
  localStorage.setItem("cartProductDiv", JSON.stringify(updatedItems));

  cartProductDiv(updatedItems);
} */