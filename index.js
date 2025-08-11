        // Sample product data
        const products = [
            {
                id: 1,
                name: "Dior Sauvage Eau de Parfum",
                description: "A mysterious blend of dark amber, sandalwood, and vanilla with subtle notes of bergamot",
                detailedDescription: "Dior Sauvage Eau de Parfum is a bold, magnetic fragrance that captures the essence of freedom and raw masculinity. Inspired by vast open landscapes under twilight skies, it bursts open with vibrant Calabrian bergamot, offering a juicy, sun-kissed citrus brightness. A wave of spicy Sichuan pepper crackles through, creating an electrifying first impression that commands attention. As the scent warms, aromatic lavender pairs with star anise and nutmeg, blending floral and spicy nuances into a sophisticated heart. The base is smooth and sensual — ambroxan gives a musky-amber depth, joined by creamy vanilla and soft sandalwood. Its balance of freshness and depth makes it versatile for daily wear, yet powerful enough for evenings. In Nigeria, it’s a go-to for men seeking elegance and assertive projection in warm climates.",
                price: 89.99,
                emoji: "🌙",
                notes: {
                    top: "Calabrian Bergamot, Sichuan Pepper",
                    middle: "Lavender, Star Anise, Nutmeg",
                    base: "Ambroxan, Vanilla, Sandalwood"
                },
                longevity: "8-10 hours on skin",
                sillage: "Moderate to Strong"
            },
            {
                id: 2,
                name: "Golden Dawn",
                description: "Fresh citrus opening with warm cedar and musk, perfect for confident mornings",
                detailedDescription: "Golden Dawn captures the energy and optimism of a new day. This invigorating fragrance combines zesty citrus notes with warming spices and a sophisticated woody base. Perfect for the modern professional who wants to make a lasting impression from sunrise to sunset.",
                price: 79.99,
                emoji: "☀️",
                notes: {
                    top: "Lemon Zest, Grapefruit, Ginger",
                    middle: "Warm Cedar, Cardamom, Lavender",
                    base: "White Musk, Amber, Vetiver"
                },
                longevity: "6-8 hours",
                sillage: "Moderate"
            },
            {
                id: 3,
                name: "Ocean Breeze",
                description: "Aquatic freshness with sea salt, white flowers, and a hint of driftwood",
                detailedDescription: "Ocean Breeze transports you to pristine coastal shores with its clean, refreshing composition. Marine accords blend seamlessly with delicate white florals, while base notes of sun-bleached driftwood add depth and sophistication to this aquatic masterpiece.",
                price: 69.99,
                emoji: "🌊",
                notes: {
                    top: "Sea Salt, Marine Accord, Lemon",
                    middle: "White Jasmine, Lily of the Valley, Cyclamen",
                    base: "Driftwood, White Cedar, Clean Musk"
                },
                longevity: "5-7 hours",
                sillage: "Light to Moderate"
            },
            {
                id: 4,
                name: "Rose Garden",
                description: "Elegant Bulgarian rose with peony, white musk, and delicate green stems",
                detailedDescription: "Rose Garden is a tribute to the queen of flowers, featuring the finest Bulgarian rose petals at its heart. This romantic fragrance balances the richness of rose with soft peony and green stem accords, creating a modern interpretation of classic floral elegance.",
                price: 94.99,
                emoji: "🌹",
                notes: {
                    top: "Pink Pepper, Green Leaves, Dewdrops",
                    middle: "Bulgarian Rose, Peony, Freesia",
                    base: "White Musk, Blonde Woods, Soft Amber"
                },
                longevity: "7-9 hours",
                sillage: "Moderate"
            },
            {
                id: 5,
                name: "Spiced Leather",
                description: "Rich leather accord with cardamom, black pepper, and smoky incense",
                detailedDescription: "Spiced Leather is a bold, uncompromising fragrance for those who dare to stand out. The rich leather heart is enhanced by exotic spices and smoky incense, creating a composition that exudes confidence and sophistication with every wear.",
                price: 99.99,
                emoji: "🧥",
                notes: {
                    top: "Black Pepper, Cardamom, Pink Grapefruit",
                    middle: "Leather Accord, Clove, Cinnamon",
                    base: "Smoky Incense, Patchouli, Dark Vanilla"
                },
                longevity: "9-12 hours",
                sillage: "Strong"
            },
            {
                id: 6,
                name: "Forest Walk",
                description: "Pine, eucalyptus, and moss with subtle hints of wet earth and morning dew",
                detailedDescription: "Forest Walk captures the serenity of a misty morning hike through ancient woodlands. This green, earthy fragrance combines fresh coniferous notes with the dampness of forest floor moss, creating an authentic nature-inspired scent that grounds and refreshes the spirit.",
                price: 74.99,
                emoji: "🌲",
                notes: {
                    top: "Pine Needles, Eucalyptus, Fresh Air",
                    middle: "Forest Moss, Juniper, Green Leaves",
                    base: "Wet Earth, Cedarwood, Oakmoss"
                },
                longevity: "6-8 hours",
                sillage: "Light to Moderate"
            }
        ];

        let cart = [];

        // Load products
        function loadProducts() {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = products.map(product => `
                <div class="product-card" onclick="openProductModal(${product.id})">
                    <div class="product-image">${product.emoji}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    <button class="btn" onclick="event.stopPropagation(); buyNow(${product.id})">Buy Now</button>
                </div>
            `).join('');
        }

        // Open product detail modal
        function openProductModal(productId) {
            const product = products.find(p => p.id === productId);
            const productDetail = document.getElementById('productDetail');
            
            productDetail.innerHTML = `
                <div class="product-detail-header">
                    <div class="product-detail-image">${product.emoji}</div>
                    <div class="product-detail-info">
                        <h2 class="product-detail-title">${product.name}</h2>
                        <div class="product-detail-price">${product.price}</div>
                        <p class="product-detail-description">${product.detailedDescription}</p>
                    </div>
                </div>
                
                <div class="fragrance-notes">
                    <h3 style="color: #ffd700; margin-bottom: 1rem;">Fragrance Notes</h3>
                    <div class="notes-category">
                        <h4>Top Notes</h4>
                        <div class="notes-list">${product.notes.top}</div>
                    </div>
                    <div class="notes-category">
                        <h4>Heart Notes</h4>
                        <div class="notes-list">${product.notes.middle}</div>
                    </div>
                    <div class="notes-category">
                        <h4>Base Notes</h4>
                        <div class="notes-list">${product.notes.base}</div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px;">
                    <div>
                        <h4 style="color: #ffd700; margin-bottom: 0.5rem;">Longevity</h4>
                        <div style="color: #e2e8f0;">${product.longevity}</div>
                    </div>
                    <div>
                        <h4 style="color: #ffd700; margin-bottom: 0.5rem;">Sillage</h4>
                        <div style="color: #e2e8f0;">${product.sillage}</div>
                    </div>
                </div>
                
                <div class="quantity-selector">
                    <span class="quantity-label">Quantity:</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeModalQuantity(-1)">-</button>
                        <span class="quantity-display" id="modalQuantity">1</span>
                        <button class="quantity-btn" onclick="changeModalQuantity(1)">+</button>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="btn btn-large" onclick="addToCartFromModal(${product.id})">
                        🛒 Add to Cart
                    </button>
                    <button class="btn btn-large whatsapp-btn" onclick="buyNowFromModal(${product.id})">
                        📱 Buy Now
                    </button>
                </div>
            `;
            
            document.getElementById('modalQuantity').textContent = '1';
            document.getElementById('productModal').style.display = 'flex';
        }

        // Close product modal
        function closeProductModal() {
            document.getElementById('productModal').style.display = 'none';
        }

        // Change quantity in modal
        let modalQuantity = 1;
        function changeModalQuantity(change) {
            modalQuantity = Math.max(1, modalQuantity + change);
            document.getElementById('modalQuantity').textContent = modalQuantity;
        }

        // Add to cart from modal
        function addToCartFromModal(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += modalQuantity;
            } else {
                cart.push({ ...product, quantity: modalQuantity });
            }
            
            updateCartCount();
            showNotification(`${modalQuantity} x ${product.name} added to cart!`);
            closeProductModal();
            modalQuantity = 1;
        }

        // Buy now from modal
        function buyNowFromModal(productId) {
            const product = products.find(p => p.id === productId);
            cart = [{ ...product, quantity: modalQuantity }];
            updateCartCount();
            closeProductModal();
            modalQuantity = 1;
            proceedToCheckout();
        }

        // Buy now (single item) - only used for Buy Now button on product cards
        function buyNow(productId) {
            const product = products.find(p => p.id === productId);
            cart = [{ ...product, quantity: 1 }];
            updateCartCount();
            proceedToCheckout();
        }

        // Update cart count
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cartCount').textContent = count;
        }

        // Open cart modal
        function openCartModal() {
            if (cart.length === 0) {
                showNotification('Your cart is empty');
                return;
            }
            
            const cartItems = document.getElementById('cartItems');
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <strong>${item.name}</strong><br>
                        <span style="color: #ffd700;">$${item.price}</span>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span style="margin: 0 10px;">${item.quantity}</span>
                        <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                        <button class="btn btn-secondary" onclick="removeFromCart(${item.id})" style="margin-left: 10px; padding: 5px 10px;">Remove</button>
                    </div>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartItems.innerHTML += `<div style="text-align: center; margin-top: 1rem; font-size: 1.2rem; color: #ffd700;"><strong>Total: $${total.toFixed(2)}</strong></div>`;
            
            document.getElementById('cartModal').style.display = 'flex';
        }

        // Close cart modal
        function closeCartModal() {
            document.getElementById('cartModal').style.display = 'none';
        }

        // Change quantity
        function changeQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                    return;
                }
            }
            updateCartCount();
            openCartModal(); // Refresh the modal
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            if (cart.length === 0) {
                closeCartModal();
            } else {
                openCartModal(); // Refresh the modal
            }
        }

        // Proceed to checkout
        function proceedToCheckout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty');
                return;
            }
            
            closeCartModal();
            
            // Show checkout section
            document.getElementById('products').style.display = 'none';
            document.querySelector('.hero').style.display = 'none';
            document.getElementById('checkoutSection').style.display = 'block';
            
            // Display order summary
            const orderSummary = document.getElementById('orderSummary');
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            orderSummary.innerHTML = `
                <h3 style="color: #ffd700; margin-bottom: 1rem;">Order Summary</h3>
                ${cart.map(item => `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span>${item.name} (x${item.quantity})</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
                <hr style="margin: 1rem 0; border-color: #ffd700;">
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem;">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            `;
        }

        // Proceed to WhatsApp
        function proceedToWhatsApp() {
            const orderText = cart.map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('\n');
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            const message = `Hello! I'd like to place an order from Myskay Aura:\n\n${orderText}\n\nTotal: $${total.toFixed(2)}\n\nPlease let me know about payment and shipping details. Thank you!`;
            
            // Replace with your actual WhatsApp number
            const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        }

        // Back to products
        function backToProducts() {
            document.getElementById('checkoutSection').style.display = 'none';
            document.getElementById('products').style.display = 'block';
            document.querySelector('.hero').style.display = 'block';
        }

        // Show notification
        function showNotification(message) {
            // Simple notification - you can enhance this
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: #ffd700;
                color: #000;
                padding: 1rem 2rem;
                border-radius: 5px;
                font-weight: bold;
                z-index: 3000;
                animation: slideIn 0.3s ease;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            updateCartCount();
            
            // Reset modal quantity when clicking outside modals
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('modal')) {
                    modalQuantity = 1;
                }
            });
        });

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);