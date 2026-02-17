let cart = [];
function loadCategories(){
    const url="https://fakestoreapi.com/products/categories"
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCategories(data))
}
function loadAllProducts(){
    showSpinner();
    removeActive()
    const allBtn = document.getElementById("btn-all")
    if(allBtn){
        allBtn.classList.add("active")
    }
    const url="https://fakestoreapi.com/products"
    fetch(url)
    .then(res=>res.json())
    .then(data=> {
        displayAllProducts(data)
        hideSpinner();
    })
}
function loadCategoryProduct(id){
    showSpinner();
      removeActive();
      const clickedBtn=document.getElementById(`btn-${id}`)
     if(clickedBtn){
    clickedBtn.classList.add("active")
    }
    const url=`https://fakestoreapi.com/products/category/${encodeURIComponent(id)}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        hideSpinner();
        displayAllProducts(data)
    })
   
}
function loadProductDetails(proId){
    const url=`https://fakestoreapi.com/products/${proId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayProductDetails(data))
}
function displayProductDetails(product){
    document.getElementById("product_details").showModal();
    const detailsContainer=document.getElementById("details_container")
    detailsContainer.innerHTML=`
    <div class="card bg-base-100 shadow-sm">
  <div class="card-body">
    <div class="flex justify-between items-center ">
    <span class="badge badge-sm rounded-full bg-[#EEF2FF] text-[#4F46E5] font-medium">${product.category}</span>
    <div class="flex items-center gap-2"><i class="fa-solid fa-star text-yellow-300"></i>
    <p class="text-[#4B5563]"><span>${product.rating.rate}</span>(${product.rating.count})</p></div>
    </div>
    <h2 class="card-title text-lg font-semibold line-clamp-1">${product.title}</h2>
      <p class="font-bold text-xl">$${product.price}</p>
    <div class="description">
    <p>${product.description}</p>
    </div>
    <div class="mt-6">
      <button class="btn btn-primary btn-block"><i class="fa-solid fa-cart-shopping"></i>Buy Now</button>
    </div>
  </div>
</div>`
}
function displayAllProducts(products){
    const productContainer=document.getElementById("product-container")
    productContainer.innerHTML = "";
    for(const product of products){
        const productDiv=document.createElement("div")
        productDiv.innerHTML=`<div class="card bg-base-100 shadow-sm flex flex-col h-full group">
  <figure class="bg-gray-100 p-6 overflow-hidden">
    <img  class="w-full h-48 object-contain group-hover:scale-110 transition duration-1000 relative z-1" src="${product.image}" alt="bag">
  </figure>
  <div class="card-body flex flex-col flex-grow">
    <div class="flex justify-between items-center"><div class="badge badge-sm rounded-full bg-[#EEF2FF] text-[#4F46E5] font-medium">${product.category}</div>
    <div class="flex items-center gap-2"><i class="fa-solid fa-star text-yellow-300"></i>
    <p class="text-[#4B5563]"><span>${product.rating.rate}</span>(${product.rating.count})</p></div></div>
    <h2 class="card-title text-lg font-semibold line-clamp-1">${product.title}</h2>
    <p class="font-bold text-xl">$${product.price}</p>
    <div class="flex gap-3 mt-auto">
      <button onclick="loadProductDetails(${product.id})" class="btn  flex flex-1 btn-md rounded-lg items-center justify-center gap-2 ">
  <i class="fa-solid fa-eye"></i>
  Details
</button>
<button onclick="addToCart(${product.id})" class="btn flex flex-1  items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 border-none">
  <i class="fa-solid fa-cart-shopping"></i>
  Add
</button>

    </div>
  </div>
</div>`
    productContainer.appendChild(productDiv)
    }
}
function displayCategories(categories){
    const categoryContainer=document.getElementById('category-container')
    categoryContainer.innerHTML=`<div>
         <button onclick="loadAllProducts()" id="btn-all" class="btn btn-md rounded-xl active">All</button>
        </div>`
    for(const cat of categories){
        const catDiv=document.createElement('div')
        const button = document.createElement('button')
    
    button.id=`btn-${cat}`
    button.className = "btn btn-md rounded-xl "
    button.innerText = cat

    button.addEventListener("click", function(){
        loadCategoryProduct(cat)
    })
    catDiv.appendChild(button)
    categoryContainer.appendChild(catDiv)
    }

}
function removeActive(){
    const activeBtn=document.querySelectorAll(".active")

    for(const btn of activeBtn){
        btn.classList.remove("active")
    }
}

function showSpinner(){
    document.getElementById("loading-spinner").classList.remove("hidden");
}

function hideSpinner(){
    document.getElementById("loading-spinner").classList.add("hidden");
}
function updateCartCount(){
    const count = document.getElementById("cart-count");
    count.innerText = cart.length;
}
function addToCart(id){
    cart.push(id);
    updateCartCount();
}

loadCategories()
loadAllProducts()
