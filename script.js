let currentPage = 1;
let pageSize = 50;
let isLoading = false;

document.getElementById('itemsPerPage').addEventListener('change', (e) => {
    pageSize = parseInt(e.target.value, 10);
    currentPage = 1;
    document.getElementById('productList').innerHTML = '';
    fetchProducts(true);
});

function fetchProducts(reset = false) {
    if (isLoading) return;
    isLoading = true;

    fetch(`https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=${pageSize}`)
        .then(response => response.json())
        .then(data => {
            isLoading = false;
            if (reset) {
                document.getElementById('productList').innerHTML = '';
            }
            if (data && Array.isArray(data.data)) {
                renderProducts(data.data);
            } else {
                console.error('Unexpected API response format:', data);
            }
        })
        .catch(err => {
            console.error('Error fetching products:', err);
            isLoading = false;
        });
}

function renderProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerText = `ID: ${product.id}`;
        productElement.addEventListener('click', () => openPopup(product));
        productList.appendChild(productElement);
    });
}

function openPopup(product) {
    document.getElementById('popupId').innerText = product.id || 'ID';
    document.getElementById('popupName').innerText = product.name || 'ID';
    document.getElementById('popupPrice').innerText = product.price ? `$${product.price}` : 'Wartość:';
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

fetchProducts(true);

// Create a base Component class
class Component {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        // Base initialization
    }

    render() {
        // Base render method
    }
}

// Feature Card Component
class FeatureCard extends Component {
    constructor(element, data) {
        super(element);
        this.data = data;
    }

    render() {
        return `
            <div class="feature-card-content">
                <h3>${this.data.title}</h3>
                <p>${this.data.description}</p>
            </div>
            <img src="${this.data.image}" alt="${this.data.title}">
        `;
    }
}

// Navigation Component
class Navigation extends Component {
    constructor(element) {
        super(element);
        this.bindEvents();
    }

    bindEvents() {
        // Handle navigation events
    }
}

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    const nav = new Navigation(document.querySelector('.main-nav'));
    
    // Feature cards data
    const featureCardsData = [
        {
            title: 'Innowacyjny dodatek - Czarciego Pazura',
            description: 'Zapewnia dodatkowe wsparcie w zwalczaniu stanów bólowych...',
            image: '/assets/images/photography/shutterstock_1770486131 1.png'
        },
        // Add other feature cards data
    ];

    // Initialize feature cards
    const featureCards = featureCardsData.map(data => 
        new FeatureCard(document.createElement('div'), data)
    );
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('show');
});
