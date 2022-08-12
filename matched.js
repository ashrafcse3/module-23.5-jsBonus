const products = [
    { id: 1, name: 'xiaomi Phone one night', price: 83000 },
    { id: 2, name: 'hello laptop', price: 13400 },
    { id: 3, name: 'lenovo phOne 2022', price: 113000 },
    { id: 4, name: 'lenovo laptop 2020', price: 65000 },
    { id: 5, name: 'macbook air laptop', price: 24000 },
    { id: 6, name: 'iPhone 9', price: 322000 },
    { id: 7, name: 'one plus phone', price: 234000 },
    { id: 8, name: 'nokia old phoNe gone', price: 52000 },
    { id: 9, name: 'walton note phonE', price: 20000 },
    { id: 10, name: 'samsung phone', price: 33000 },
    { id: 11, name: 'nothing mobile phone for everyone', price: 22200 },
];

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return (matched);
}

const result = matchedProducts(products, 'pHone');
console.log(result);