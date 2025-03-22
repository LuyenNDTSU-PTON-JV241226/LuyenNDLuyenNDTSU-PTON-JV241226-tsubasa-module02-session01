const products = [ 
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 1200 }, 
];
const copiedProducts = [...products];
console.log("products ",products);
console.log("copiedProducts ",copiedProducts);
const newProduct =[
    { id: 4, name: "Monitor", price: 300 },
];
const copiedProductsNew = [...products,...newProduct];
console.log("copiedProductsNew ",copiedProductsNew);
const updatedProducts = copiedProductsNew.map(product => {
    if (product.id === 1){
        return {...product, price: product.price + 200}
    }
    return product;
})

console.log("updatedProducts ", updatedProducts);

