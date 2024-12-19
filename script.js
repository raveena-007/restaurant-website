// Sample menu items (can be expanded)
const menuItems = [
  { id: 1, name: 'Caesar Salad', type: 'appetizer', description: 'Fresh and crisp lettuce with Caesar dressing', price: 5.99, image: 'images/caesar-salad.jpg' },
  { id: 2, name: 'Spaghetti Carbonara', type: 'main', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper', price: 12.99, image: 'images/spaghetti.jpg' },
  { id: 3, name: 'Chocolate Cake', type: 'dessert', description: 'Rich chocolate cake with creamy frosting', price: 4.99, image: 'images/chocolate-cake.jpg' },
  // Add more items here
];

// Display menu items
const displayMenuItems = (items) => {
  const menuContainer = document.getElementById('menu-items');
  menuContainer.innerHTML = ''; // Clear existing menu

  items.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('menu-item');
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>$${item.price.toFixed(2)}</strong></p>
    `;
    menuContainer.appendChild(itemElement);
  });
};

// Filter menu items
const filterMenu = (type) => {
  if (type === 'all') {
    displayMenuItems(menuItems);
  } else {
    const filteredItems = menuItems.filter(item => item.type === type);
    displayMenuItems(filteredItems);
  }
};

// Initial display
displayMenuItems(menuItems);

// Contact form submission (basic)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual form submission
  alert('Your message has been sent! We will get back to you soon.');
  contactForm.reset();
});

