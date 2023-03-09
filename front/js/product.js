var id = window.location.search.substring(3); 

const getProduct = fetch(`http://localhost:3000/api/products/${id}`); 
getProduct
.then(async response =>{

 const currentProduct = await response.json(); 
 const displayTitle = document.querySelector("#pageTitle"); 
 const displayName = document.querySelector("#title"); 
 const displayImage = document.querySelector(".item__img");
 const displayPrice = document.querySelector("#price");  
 const displayDescription = document.querySelector("#description"); 
 displayTitle.innerHTML = currentProduct.name;
 displayName.innerHTML = currentProduct.name;
 displayImage.innerHTML = `<img src = "${currentProduct.imageUrl}"></img>`;
 displayPrice.innerHTML = currentProduct.price; 
 displayDescription.innerHTML = currentProduct.description;
 
 
});