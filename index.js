function calculateTotal(products) {
    const total = products.reduce (
        (sum, item) => sum + item.price * item.qty, 0)
    
    return total
}

const products = [
    {name :"Laptop", price : 7000000, qty: 1},
    {name :"Mouse", price : 150000, qty: 2},
    {name :"Keyboard", price : 300000, qty: 1}
];

products.forEach (item => {
    
    console.log('Nama Barang : ' + item.name );
    console.log('Jumlah beli : ' + item.qty);
});
                  
const total = calculateTotal (products);

if (total > 5000000 ) {
    diskonpersen = 10; 
} 
const diskon = total * diskonpersen / 100;
const totalbayar = total - diskon;

console.log('Subtotal : ' + total );
console.log('Total Belanja : ' + totalbayar);
    
    
