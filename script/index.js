function loadTrendingContainer(){
    const url="https://fakestoreapi.com/products"
    fetch(url)
    .then(res=>res.json())
    .then(data=> {
        const firstThree = data.slice(0,3);
        displayTrending(firstThree);
    })
}
function displayTrending(products){
    const productContainer=document.getElementById("trending-container")
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
loadTrendingContainer()
