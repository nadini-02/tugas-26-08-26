const order = [
    {id :"1", customer : "Budi", status: "success", total: 100000},
    {id :"2", customer : "Lulu", status: "success", total: 150000},
    {id :"3", customer : "Nana", status: "pending", total: 75000},
    {id :"4", customer : "Nina", status: "success", total: 200000},
    {id :"5", customer : "Anton", status: "cancel", total: 50000}
];

function getOrderByStatus(order, status) {
    return order.filter (item => item.status === status)
};
const hasil = getOrderByStatus(order, "success");

function calculateRevenue(order) {
    const successOrder = order.filter
       (item => item.status === "success"
);
    
    return successOrder.reduce( (sum, item) => sum + item.total, 0);
};
const revenue = calculateRevenue (order);

console.log('Transaksi yang sukses : ' , hasil );
console.log('Pendapatan : Rp ' + revenue.toLocaleString("id-ID"));


