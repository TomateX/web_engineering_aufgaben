function getAllProducts(){
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
}

function getProduct(){
    fetch('https://dummyjson.com/products/'+document.getElementById('index').value)
.then(res => res.json())
.then(console.log);
}

function setProduct(){
    fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
  })
})
.then(res => res.json())
.then(console.log);
}

function changeProduct(){
    fetch('https://dummyjson.com/products/'+document.getElementById('index').value, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then(console.log);
}

function deleteProduct(){
    fetch('https://dummyjson.com/products/'+document.getElementById('index').value, {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
            
}