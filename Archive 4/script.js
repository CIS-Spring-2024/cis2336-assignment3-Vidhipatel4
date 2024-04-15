const menuData = [
    {
        category: "Desserts",
        items: [
            { name: "Chocolate Cake", description: "Rich and moist chocolate cake topped with chocolate ganache", price: 6 },
            { name: "Apple Pie", description: "Warm apple pie served with vanilla ice cream", price: 7 },
            { name: "Tiramisu", description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream", price: 8 },
            { name: "Cookie", description: "Warm chocolate chips", price: 2 },
            { name: "Cookie", description: "Warm white chocolate chips", price: 2 }
        ],
        special: "Buy One Dessert, Get One Free!"
    },
    {
        category: "Fusion Food",
        items: [
            { name: "Sushi Burrito", description: "A fusion of Japanese sushi and Mexican burrito, filled with sushi rice, raw fish, vegetables, and sauces", price: 14 },
            { name: "Korean BBQ Tacos", description: "Soft corn tortillas filled with Korean BBQ beef, kimchi, and cilantro", price: 10 },
            { name: "Paneer Tacos", description: "Soft corn tortillas filled with Tofu and cilantro sauce", price: 10 },
            { name: "Queso", description: "cheese", price: 10 }
        ],
        special: "Buy One Fusion Food Item, Get One Free!"
    },
    {
        category: "Coffee",
        items: [
            { name: "Espresso", description: "Strong, concentrated coffee brewed by forcing hot water through finely-ground coffee beans", price: 3},
            { name: "Cappuccino", description: "Espresso topped with steamed milk foam", price: 4 },
            { name: "Latte", description: "Espresso with steamed milk and a small amount of milk foam", price: 4 },
            { name: "Matcha Latte", description: "Latte with matcha powder, water, and milk", price: 6.50 },
            { name: "Caramel Latte", description: "Espresso with caramel and milk", price: 3 }
        ],
        special: "Buy One Coffee, Get One Free!"
    }
];

const menuSection = document.getElementById("menu");

function generateMenu() {
    menuSection.innerHTML = ''; // Clear existing menu items

    menuData.forEach(category => {
        const categoryHeader = document.createElement("h2");
        categoryHeader.textContent = category.category;
        menuSection.appendChild(categoryHeader);

        if (category.special) {
            const specialNote = document.createElement("p");
            specialNote.textContent = `Special: ${category.special}`;
            menuSection.appendChild(specialNote);
        }

        const itemList = document.createElement("ul");
        category.items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${item.name}</strong> - ${item.description} - $${item.price}`;
            itemList.appendChild(listItem);
        });
        menuSection.appendChild(itemList);
    });

    // Add Starship link
    const starshipLink = document.createElement("a");
    starshipLink.href = "https://www.starship.xyz/coop/";
    starshipLink.textContent = "Download Starship App for Delivery";
    menuSection.appendChild(starshipLink);
}

generateMenu(); // Initial generation of menu
// Order form submission event listener
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form data
    const item = document.getElementById('item').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Validate quantity
    if (isNaN(quantity) || quantity < 1 || quantity > 10) {
        document.getElementById('error-message').innerText = 'Please enter a quantity between 1 and 10.';
        return;
    }
    
    // Reset error message
    document.getElementById('error-message').innerText = '';
    
    // Place order (simulate for demonstration)
    alert(`Order placed: ${quantity} ${item}(s)`);
});
