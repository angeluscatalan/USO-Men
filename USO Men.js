const searchForm = document.getElementById('searchForm');

const products = [
    { name: 'Bracelet Chain', category: 'Accessories', url: 'Accesories.html', price: '$120', image: 'Bracelet.png'},
    { name: 'Sunglasses', category: 'Accessories', url: 'Accesories.html', price: '$80', image: 'Glasses.png'},
    { name: 'Necklace', category: 'Accessories', url: 'Accesories.html', price: '$220', image: 'Necklace.png'},
    { name: 'Pearl Necklace', category: 'Accessories', url: 'Accesories.html', price: '$180', image: 'Pearls.png'},
    { name: 'Silver Gold Ring', category: 'Accessories', url: 'Accesories.html', price: '$120', image: 'Rings.png'},
    { name: 'Silver Gold Rings Set', category: 'Accessories', url: 'Accesories.html', price: '$20', image: 'Rings2.png'},
    { name: 'Cuban Chain Necklace', category: 'Accessories', url: 'Accesories.html', price: '$220', image: 'Necklace3.png'},
    { name: 'Silver Sunglasses', category: 'Accessories', url: 'Accesories.html', price: '$180', image: 'Glasses2.png'},
    { name: 'Cuban Chain Ring', category: 'Accessories', url: 'Accesories.html', price: '$120', image: 'Necklace2.png'},
    { name: 'Wristwatch', category: 'Accessories', url: 'Accesories.html' , price: '$120', image: 'Watch.png'},
    { name: 'Tuxedo', category: 'Fashion', url: 'Fashion.html', price: '$200', image: 'Tux1.jpg' },
    { name: 'Dress Shirt', category: 'Fashion', url: 'Fashion.html', price: '$60', image: 'formalshirt.png' },
    { name: 'Brown Shirt', category: 'Fashion', url: 'Fashion.html', price: '$50', image: 'brownshirt.png' },
    { name: 'Polo Shirt', category: 'Fashion', url: 'Fashion.html', price: '$70', image: 'poloshirt.png' },
    { name: 'T-Shirt', category: 'Fashion', url: 'Fashion.html', price: '$30', image: 'tshirt.png' },
    { name: 'Flannel', category: 'Fashion', url: 'Fashion.html', price: '$60', image: 'flannel.png' },
    { name: 'Hoodie', category: 'Fashion', url: 'Fashion.html' , price: '$80', image: 'hoodie.png'},
    { name: 'Puffer Jacket', category: 'Fashion', url: 'Fashion.html', price: '$130', image: 'puffer.png'},
    { name: 'Denim Jeans', category: 'Fashion', url: 'Fashion.html', price: '$110', image: 'jeans.png' },
    { name: 'Pleated Pants', category: 'Fashion', url: 'Fashion.html', price: '$120', image: 'pleatedpants.png' },
    { name: 'Uso Noir', category: 'Fragrances', url: 'Fragrances.html', price: '$60', image: 'perfume.png' },
    { name: 'Uso Maverick', category: 'Fragrances', url: 'Fragrances.html', price: '$50', image: 'perfume2.png' },
    { name: 'Uso Intensity', category: 'Fragrances', url: 'Fragrances.html', price: '$80', image: 'perfume3.png'},
    { name: 'Uso Atlas', category: 'Fragrances', url: 'Fragrances.html', price: '$70', image: 'perfume4.png' },
    { name: 'Uso Elysium', category: 'Fragrances', url: 'Fragrances.html' , price: '$65', image: 'perfume5.png'},
    { name: 'Uso Ignite', category: 'Fragrances', url: 'Fragrances.html', price: '$50', image: 'perfume6.png' },
    { name: 'Uso Voyager', category: 'Fragrances', url: 'Fragrances.html', price: '$75', image: 'perfume7.png'},
    { name: 'Uso Refined', category: 'Fragrances', url: 'Fragrances.html', price: '$60', image: 'perfume8.png' },
    { name: 'Uso Eclipse', category: 'Fragrances', url: 'Fragrances.html' , price: '$70', image: 'perfume9.png'},
    { name: 'Uso Gravity', category: 'Fragrances', url: 'Fragrances.html', price: '$65', image: 'perfume10.png' },
];

const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const searchData = e.target.value.toLowerCase();
        console.log('Search term:', searchData);

        const matchedProduct = products.find((item) => item.name.toLowerCase() === searchData);

        if (matchedProduct) {

            console.log('Matched Product:', matchedProduct);
            // Log the URL before redirecting
            console.log('Redirecting to:', matchedProduct.url);
            // Redirect to the product's URL
            window.location.href = matchedProduct.url;
        } else {
            console.log('Product not found');
        }

        // Save the search term to localStorage
        localStorage.setItem('searchTerm', searchData);
    }
});

// Retrieve and set the initial search term from localStorage
const initialSearchTerm = localStorage.getItem('searchTerm');
if (initialSearchTerm) {
    searchInput.value = initialSearchTerm;
}

// Display initial products
displayItems(products);
