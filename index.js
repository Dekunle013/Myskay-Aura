// Sample product data
const products = [
            {
                "id": 1,
                "name": "Dior Sauvage Eau de Parfum",
                "description": "A fresh yet bold scent with woody and spicy notes, a modern classic for men.",
                "detailedDescription": "Christian Dior Sauvage EDP is a versatile fragrance blending fresh bergamot with spicy and woody undertones, ideal for day or night wear. Popular in Nigeria for its masculine charm and lasting projection.",
                "price": 280000,
                "notes": {
                "top": "Calabrian Bergamot, Sichuan Pepper",
                "middle": "Lavender, Star Anise, Nutmeg",
                "base": "Ambroxan, Vanilla, Sandalwood"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong",
                "image": "products-image/dior.jpg"
            },
            {
                "id": 2,
                "name": "Sapphire Scents Oud Abiyad",
                "description": "A luxurious oud-based fragrance with rich and elegant notes.",
                "detailedDescription": "Sapphire Scents Oud Abiyad, a Nigerian creation, combines premium oud with floral and amber notes, perfect for evening wear and rivaling Montale’s oud offerings.",
                "price": 45000,
                "notes": {
                "top": "Rose, Saffron",
                "middle": "Oud, Amber",
                "base": "Musk, Sandalwood"
                },
                "longevity": "10-12 hours on skin",
                "sillage": "Strong",
                "image": "products-image/abiyad.jpg"
            },
            {
                "id": 3,
                "name": "Zaron Femme",
                "description": "A vibrant floral-fruity fragrance for youthful elegance.",
                "detailedDescription": "Zaron Femme, from Nigerian brand Zaron, offers a lively blend of jasmine and pear with a warm vanilla base, comparable to Dolce & Gabbana’s Light Blue.",
                "price": 35000,
                "notes": {
                "top": "Pear, Lemon",
                "middle": "Jasmine, Rose",
                "base": "Vanilla, Musk"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 4,
                "name": "Perfumehead NG Lagos Nights",
                "description": "A seductive unisex scent capturing Lagos nightlife.",
                "detailedDescription": "Perfumehead NG’s Lagos Nights blends patchouli and vanilla, inspired by Nigeria’s vibrant culture, akin to Byredo’s bold storytelling.",
                "price": 40000,
                "notes": {
                "top": "Bergamot, Black Pepper",
                "middle": "Patchouli, Vanilla",
                "base": "Sandalwood, Amber"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 5,
                "name": "Oriki Scents Ori",
                "description": "A warm, earthy fragrance with natural ingredients.",
                "detailedDescription": "Oriki Scents Ori, a Nigerian eco-conscious fragrance, uses shea butter and vanilla for a cozy scent, comparable to Le Labo’s natural blends.",
                "price": 38000,
                "notes": {
                "top": "Shea Butter, Citrus",
                "middle": "Vanilla, Jasmine",
                "base": "Cedarwood, Musk"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 6,
                "name": "House of Ganiyah Signature",
                "description": "A versatile bespoke fragrance with floral and woody notes.",
                "detailedDescription": "House of Ganiyah’s Signature scent offers a customizable blend of floral, woody, and oriental notes, rivaling Clive Christian’s bespoke luxury.",
                "price": 50000,
                "notes": {
                "top": "Bergamot, Rose",
                "middle": "Jasmine, Oud",
                "base": "Amber, Sandalwood"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 7,
                "name": "Bath & Body Works Madame Mystique Fragrance Mist",
                "description": "A sophisticated and seductive body mist with berry and woody notes.",
                "detailedDescription": "Madame Mystique delivers a rich, wearable scent with red berries and rose petals, popular in Nigeria for sensitive skin and layering.",
                "price": 23000,
                "notes": {
                "top": "Red Berries, Lemon",
                "middle": "Rose Petals, Jasmine",
                "base": "Sandalwood, Musk"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 8,
                "name": "Sol de Janeiro Cheirosa 68 Perfume Mist",
                "description": "A tropical, joyful body mist with jasmine and dragonfruit.",
                "detailedDescription": "Cheirosa 68 is a vibrant, affordable mist with Brazilian jasmine and pink dragonfruit, evoking a beach vacation, widely available in Nigeria.",
                "price": 5000,
                "notes": {
                "top": "Pink Dragonfruit, Lychee",
                "middle": "Brazilian Jasmine, Ocean Air",
                "base": "Sun Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 9,
                "name": "Victoria’s Secret Violet Petals Daydreams",
                "description": "A soft, floral body mist for a clean, feminine vibe.",
                "detailedDescription": "Violet Petals Daydreams offers a delicate blend of violets and sheer blossoms, ideal for daytime wear in Nigeria’s warm climate.",
                "price": 26600,
                "notes": {
                "top": "Dewy Violet, Bergamot",
                "middle": "Sheer Blossoms, Peony",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 10,
                "name": "Imperio Lasgidi Vanilla Crush Body Mist",
                "description": "A rich, warm vanilla gourmand mist for evening wear.",
                "detailedDescription": "Lasgidi’s Vanilla Crush, a Nigerian brand, offers an affordable, edible, and elegant scent perfect for cozy evenings or layering.",
                "price": 2000,
                "notes": {
                "top": "Vanilla, Caramel",
                "middle": "Jasmine, Tonka Bean",
                "base": "Sandalwood, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 11,
                "name": "Gucci Intense Oud",
                "description": "A bold, smoky oriental fragrance for men.",
                "detailedDescription": "Gucci Intense Oud is a luxurious scent with rich oud and incense, popular among Nigerian men for its commanding presence.",
                "price": 150000,
                "notes": {
                "top": "Incense, Pear",
                "middle": "Oud Wood, Amber",
                "base": "Leather, Frankincense"
                },
                "longevity": "10-12 hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 12,
                "name": "Giorgio Armani Acqua di Giò Parfum",
                "description": "A crisp, elegant marine fragrance for sophisticated men.",
                "detailedDescription": "Acqua di Giò Parfum is a Nigerian favorite for its fresh marine and woody notes, ideal for warm weather and daily wear.",
                "price": 180000,
                "notes": {
                "top": "Bergamot, Elemi Oil",
                "middle": "Geranium, Sage",
                "base": "Incense, Patchouli"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 13,
                "name": "Creed Aventus",
                "description": "A bold, fruity-woody scent for ambitious men.",
                "detailedDescription": "Creed Aventus is a luxury fragrance loved in Nigeria for its powerful blend of bergamot, pineapple, and smoky notes, exuding success.",
                "price": 350000,
                "notes": {
                "top": "Bergamot, Black Currant, Pineapple",
                "middle": "Birch, Patchouli, Jasmine",
                "base": "Musk, Oakmoss, Ambergris"
                },
                "longevity": "10-12 hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 14,
                "name": "Maison Francis Kurkdjian Baccarat Rouge 540",
                "description": "An opulent amber-floral fragrance for luxury lovers.",
                "detailedDescription": "Baccarat Rouge 540 is a Nigerian favorite for its warm, sweet, and woody notes, offering an exclusive and unforgettable scent.",
                "price": 400000,
                "notes": {
                "top": "Saffron, Jasmine",
                "middle": "Amberwood, Ambergris",
                "base": "Fir Resin, Cedarwood"
                },
                "longevity": "12+ hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 15,
                "name": "Tom Ford Noir Extreme Parfum",
                "description": "A warm, spicy fragrance with seductive elegance.",
                "detailedDescription": "Tom Ford Noir Extreme Parfum balances cardamom and vanilla for a rich, mysterious scent, popular for Nigerian date nights.",
                "price": 200000,
                "notes": {
                "top": "Cardamom, Neroli",
                "middle": "Kulfi, Rose, Jasmine",
                "base": "Amber, Vanilla, Sandalwood"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 16,
                "name": "Parfums De Marly Delina",
                "description": "A feminine, opulent floral fragrance for women.",
                "detailedDescription": "Delina is a luxurious scent with lychee and rose, loved by Nigerian women for its velvety and elegant profile.",
                "price": 250000,
                "notes": {
                "top": "Lychee, Rhubarb, Bergamot",
                "middle": "Turkish Rose, Peony",
                "base": "Cashmeran, Musk, Incense"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 17,
                "name": "Maison Crivelli Hibiscus Mahajád",
                "description": "An exotic, floral fragrance with sweet and spicy notes.",
                "detailedDescription": "Hibiscus Mahajád is a niche favorite in Nigeria, blending hibiscus and vanilla for a bold, hypnotic scent.",
                "price": 300000,
                "notes": {
                "top": "Sparkling Fruity Notes",
                "middle": "Hibiscus, Rose, Spices",
                "base": "Vanilla, Leather, Musk"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 18,
                "name": "Le Labo Santal 33",
                "description": "A unisex, smoky sandalwood fragrance with modern chic.",
                "detailedDescription": "Santal 33 is a cult favorite in Nigeria, offering a creamy sandalwood and leathery scent for understated sophistication.",
                "price": 320000,
                "notes": {
                "top": "Cardamom, Iris",
                "middle": "Violet, Ambrox",
                "base": "Sandalwood, Cedarwood, Leather"
                },
                "longevity": "10-12 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 19,
                "name": "Mancera Cedrat Boise Intense",
                "description": "A vibrant citrus-woody fragrance with lasting power.",
                "detailedDescription": "Cedrat Boise Intense is a Nigerian favorite for its fresh lemon and woody base, perfect for day or night.",
                "price": 143000,
                "notes": {
                "top": "Sicilian Lemon, Blackcurrant",
                "middle": "Patchouli, Jasmine",
                "base": "Sandalwood, Cedarwood, Musk"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 20,
                "name": "Goddess Perfume",
                "description": "A cozy, elegant fragrance with sweet and floral notes.",
                "detailedDescription": "Goddess Perfume is an affordable Nigerian option with vanilla and amber, ideal for evening wear and special occasions.",
                "price": 42000,
                "notes": {
                "top": "Citrus, Apple",
                "middle": "Jasmine, Rose",
                "base": "Vanilla, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 21,
                "name": "Mystique Perfume",
                "description": "A timeless, versatile fragrance with amber and musk.",
                "detailedDescription": "Mystique Perfume offers a sophisticated blend of florals and musk, popular in Nigeria for its day-to-night versatility.",
                "price": 65000,
                "notes": {
                "top": "Bergamot, Pear",
                "middle": "Rose, Lily",
                "base": "Amber, Musk"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 22,
                "name": "Lattafa Asad EDP",
                "description": "A bold, masculine fragrance with citrus and oud.",
                "detailedDescription": "Lattafa Asad is a popular mid-range EDP in Nigeria, blending fresh citrus with rich oud and musk for lasting impact.",
                "price": 30000,
                "notes": {
                "top": "Lemon, Lavender",
                "middle": "Oud, Amber",
                "base": "Musk, Sandalwood"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 23,
                "name": "Swiss Arabian Shaghaf Oud Ahmar EDP",
                "description": "A rich, Arabian-inspired fragrance with fruity and woody notes.",
                "detailedDescription": "Shaghaf Oud Ahmar is a luxurious scent with strong sillage, loved in Nigeria for its bold and refined profile.",
                "price": 70000,
                "notes": {
                "top": "Apple, Saffron",
                "middle": "Rose, Oud",
                "base": "Woody Notes, Musk"
                },
                "longevity": "10-12 hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 24,
                "name": "Salvatore Ferragamo Spicy Leather Parfum",
                "description": "A bold, spicy fragrance with leather and patchouli.",
                "detailedDescription": "Spicy Leather Parfum is a premium choice in Nigeria, offering intense, complex notes for evening wear.",
                "price": 110000,
                "notes": {
                "top": "Saffron, Bergamot",
                "middle": "Cedar, Patchouli",
                "base": "Leather, Musk"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 25,
                "name": "Giorgio Armani Si Intense (2021 Edition) EDP",
                "description": "A bold, feminine fragrance with blackcurrant and rose.",
                "detailedDescription": "Si Intense is a luxurious choice for Nigerian women, with a rich, long-lasting scent perfect for special occasions.",
                "price": 250000,
                "notes": {
                "top": "Blackcurrant Syrup, Bergamot",
                "middle": "Turkish Rose, Patchouli",
                "base": "Vanilla, Benzoin"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 26,
                "name": "Al Haramain Amber Oud Gold Edition EDP",
                "description": "A unisex fragrance with citrus and woody accords.",
                "detailedDescription": "Amber Oud Gold Edition is a versatile, long-lasting EDP popular in Nigeria for its warm and spicy profile.",
                "price": 169000,
                "notes": {
                "top": "Bergamot, Green Notes",
                "middle": "Spices, Oud",
                "base": "Amber, Woody Notes"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 27,
                "name": "My Dear Body Charms Life Fragrance Mist",
                "description": "A bold, citrusy-floral body mist with a seductive base.",
                "detailedDescription": "Charms Life is a complex, affordable mist with orange and caramel notes, ideal for Nigeria’s rainy season.",
                "price": 9999,
                "notes": {
                "top": "Sweet Orange, Grapefruit",
                "middle": "Jasmine, Rose",
                "base": "Caramel, Musk"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 28,
                "name": "Elite & Elegance Twilight Shine Body Mist",
                "description": "An elegant, long-lasting body mist for confident women.",
                "detailedDescription": "Twilight Shine is a Nigerian favorite for its bold, memorable scent, perfect for work or parties.",
                "price": 7999,
                "notes": {
                "top": "Citrus, Apple",
                "middle": "Floral Notes, Peony",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 29,
                "name": "Britney Spears Midnight Fantasy Body Mist",
                "description": "A sultry, fruity body mist with deep musk notes.",
                "detailedDescription": "Midnight Fantasy is a dramatic, feminine mist popular in Nigeria for date nights and evening outings.",
                "price": 27500,
                "notes": {
                "top": "Black Cherry, Plum",
                "middle": "Orchid, Freesia",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 30,
                "name": "Axe Body Spray for Men",
                "description": "A masculine, long-lasting body spray for daily use.",
                "detailedDescription": "Axe Body Spray is a popular choice in Nigeria for its affordable, bold scents, ideal for work or gym.",
                "price": 5000,
                "notes": {
                "top": "Citrus, Mint",
                "middle": "Lavender, Spice",
                "base": "Musk, Woods"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 31,
                "name": "Sapphire Scents Sapphire Royale",
                "description": "A fresh, unisex fragrance with woody and citrus notes.",
                "detailedDescription": "Sapphire Royale from Sapphire Scents is a versatile Nigerian perfume, blending fresh citrus with woody depth, ideal for both men and women.",
                "price": 40000,
                "notes": {
                "top": "Lemon, Bergamot",
                "middle": "Cedarwood, Vetiver",
                "base": "Musk, Amber"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 32,
                "name": "Zaron Homme",
                "description": "A masculine fragrance with fresh and woody notes.",
                "detailedDescription": "Zaron Homme, a Nigerian creation, offers a bold mix of bergamot and musk, comparable to Yves Saint Laurent’s La Nuit de L’Homme.",
                "price": 35000,
                "notes": {
                "top": "Bergamot, Lemon",
                "middle": "Cedarwood, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 33,
                "name": "Perfumehead NG Savannah",
                "description": "A fresh, green fragrance inspired by Nigerian landscapes.",
                "detailedDescription": "Savannah by Perfumehead NG captures Nigeria’s natural beauty with citrus and vetiver, offering a fresh, unisex scent.",
                "price": 38000,
                "notes": {
                "top": "Citrus, Green Notes",
                "middle": "Vetiver, Jasmine",
                "base": "Sandalwood, Musk"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 34,
                "name": "Oriki Scents Ebony Essence",
                "description": "A bold, spicy fragrance with earthy undertones.",
                "detailedDescription": "Ebony Essence by Oriki Scents blends pepper and sandalwood for a rich, eco-conscious Nigerian scent, perfect for evening wear.",
                "price": 40000,
                "notes": {
                "top": "Black Pepper, Bergamot",
                "middle": "Sandalwood, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 35,
                "name": "House of Ganiyah Amber Grace",
                "description": "A warm, comforting fragrance with amber and vanilla.",
                "detailedDescription": "Amber Grace by House of Ganiyah offers a cozy, bespoke scent with rich amber and vanilla, ideal for intimate settings.",
                "price": 45000,
                "notes": {
                "top": "Citrus, Saffron",
                "middle": "Vanilla, Rose",
                "base": "Amber, Musk"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 36,
                "name": "Victoria’s Secret Bare Vanilla Daydreams Mist",
                "description": "A warm, gourmand body mist with creamy vanilla.",
                "detailedDescription": "Bare Vanilla Daydreams is a popular Nigerian choice for its sweet, comforting vanilla scent, perfect for daily wear.",
                "price": 26600,
                "notes": {
                "top": "Vanilla, Bergamot",
                "middle": "Jasmine, Tonka Bean",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 37,
                "name": "Victoria’s Secret Love Spell Daydreams Mist",
                "description": "A fruity-floral body mist with a romantic vibe.",
                "detailedDescription": "Love Spell Daydreams combines cherry blossom and peach for a fresh, feminine scent, popular in Nigeria for casual wear.",
                "price": 26600,
                "notes": {
                "top": "Peach, Cherry Blossom",
                "middle": "Jasmine, Lily",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 38,
                "name": "Victoria’s Secret Frostmelt Daydreams Mist",
                "description": "A cool, refreshing body mist with floral notes.",
                "detailedDescription": "Frostmelt Daydreams offers a crisp, floral scent ideal for Nigeria’s hot climate, with a light and airy profile.",
                "price": 26600,
                "notes": {
                "top": "Citrus, Apple",
                "middle": "White Flowers, Rose",
                "base": "Musk, Sandalwood"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 39,
                "name": "Victoria’s Secret Siren Serenade Mist",
                "description": "A seductive, floral-fruity body mist.",
                "detailedDescription": "Siren Serenade is a bold, feminine mist with tropical fruit and floral notes, perfect for Nigerian evenings.",
                "price": 26600,
                "notes": {
                "top": "Mango, Citrus",
                "middle": "Jasmine, Hibiscus",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 40,
                "name": "Victoria’s Secret Wild Neroli Mist",
                "description": "A fresh, citrusy-floral body mist.",
                "detailedDescription": "Wild Neroli offers a bright, uplifting scent with neroli and orange blossom, popular in Nigeria for daytime freshness.",
                "price": 26600,
                "notes": {
                "top": "Neroli, Lemon",
                "middle": "Orange Blossom, Jasmine",
                "base": "Musk, Cedarwood"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 41,
                "name": "Victoria’s Secret Neon Tropic Mist",
                "description": "A vibrant, tropical body mist with fruity notes.",
                "detailedDescription": "Neon Tropic is a bold, summery mist with pineapple and coconut, ideal for Nigeria’s warm weather.",
                "price": 26600,
                "notes": {
                "top": "Pineapple, Coconut",
                "middle": "Jasmine, Hibiscus",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 42,
                "name": "Victoria’s Secret Berry Brulee Mist",
                "description": "A sweet, gourmand body mist with berry notes.",
                "detailedDescription": "Berry Brulee combines juicy berries and creamy vanilla for a playful, feminine scent popular in Nigeria.",
                "price": 26600,
                "notes": {
                "top": "Mixed Berries, Lemon",
                "middle": "Vanilla, Jasmine",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 43,
                "name": "Victoria’s Secret Coconut Milk and Rose Mist",
                "description": "A creamy, floral body mist with a tropical twist.",
                "detailedDescription": "Coconut Milk and Rose is a soothing, feminine mist, perfect for Nigeria’s humid climate.",
                "price": 26600,
                "notes": {
                "top": "Coconut Milk, Bergamot",
                "middle": "Rose, Peony",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 44,
                "name": "Victoria’s Secret Bare Vanilla Sol Mist",
                "description": "A warm, creamy vanilla body mist.",
                "detailedDescription": "Bare Vanilla Sol is a rich, gourmand mist with a cozy vanilla profile, ideal for layering in Nigeria.",
                "price": 26600,
                "notes": {
                "top": "Vanilla, Citrus",
                "middle": "Jasmine, Tonka Bean",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 45,
                "name": "Victoria’s Secret Velvet Petals Sol Mist",
                "description": "A soft, floral body mist with a velvety finish.",
                "detailedDescription": "Velvet Petals Sol offers a delicate floral scent with a creamy base, popular for casual Nigerian wear.",
                "price": 26600,
                "notes": {
                "top": "Bergamot, Peach",
                "middle": "Peony, Rose",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 46,
                "name": "Victoria’s Secret Love Spell Sol Mist",
                "description": "A fruity-floral body mist with a romantic edge.",
                "detailedDescription": "Love Spell Sol combines peach and jasmine for a fresh, feminine scent, popular in Nigeria for daily use.",
                "price": 26600,
                "notes": {
                "top": "Peach, Cherry Blossom",
                "middle": "Jasmine, Lily",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 47,
                "name": "Victoria’s Secret Pure Seduction Sol Mist",
                "description": "A bold, fruity body mist with seductive notes.",
                "detailedDescription": "Pure Seduction Sol is a vibrant mist with plum and freesia, perfect for Nigerian evenings.",
                "price": 26600,
                "notes": {
                "top": "Plum, Melon",
                "middle": "Freesia, Jasmine",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 48,
                "name": "Victoria’s Secret Pineapple and Shea Mist",
                "description": "A tropical, creamy body mist for summer vibes.",
                "detailedDescription": "Pineapple and Shea is a refreshing mist with tropical fruit and creamy notes, ideal for Nigeria’s heat.",
                "price": 26600,
                "notes": {
                "top": "Pineapple, Citrus",
                "middle": "Shea Butter, Jasmine",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 49,
                "name": "Victoria’s Secret Shimmering Shores Mist",
                "description": "A fresh, aquatic body mist with floral notes.",
                "detailedDescription": "Shimmering Shores offers a clean, ocean-inspired scent, perfect for daytime wear in Nigeria.",
                "price": 26600,
                "notes": {
                "top": "Ocean Air, Citrus",
                "middle": "Jasmine, Lily",
                "base": "Musk, Sandalwood"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 50,
                "name": "Victoria’s Secret Coconut Passion Fragrance Mist",
                "description": "A tropical, creamy body mist with vanilla notes.",
                "detailedDescription": "Coconut Passion is a sweet, summery mist popular in Nigeria for its tropical and cozy profile.",
                "price": 7999,
                "notes": {
                "top": "Coconut, Lily",
                "middle": "Vanilla, Jasmine",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 51,
                "name": "Victoria’s Secret Pure Seduction Noir Mist",
                "description": "A bold, seductive body mist with fruity notes.",
                "detailedDescription": "Pure Seduction Noir is a dramatic mist with plum and musk, ideal for Nigerian date nights.",
                "price": 8000,
                "notes": {
                "top": "Plum, Apple",
                "middle": "Jasmine, Freesia",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 52,
                "name": "Victoria’s Secret Amber Romance Noir Mist",
                "description": "A warm, amber-heavy body mist for evening wear.",
                "detailedDescription": "Amber Romance Noir offers a rich, seductive scent with amber and vanilla, popular in Nigeria for special occasions.",
                "price": 8000,
                "notes": {
                "top": "Citrus, Cherry",
                "middle": "Vanilla, Rose",
                "base": "Amber, Musk"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 53,
                "name": "Storm Elixir Zeus Perfumed Deodorant Body Spray",
                "description": "A bold, masculine body spray with fresh notes.",
                "detailedDescription": "Storm Elixir Zeus is a popular Nigerian body spray with a fresh, woody scent, ideal for daily use.",
                "price": 4899,
                "notes": {
                "top": "Citrus, Mint",
                "middle": "Lavender, Cedar",
                "base": "Musk, Sandalwood"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 54,
                "name": "Storm Elixir Maverick Perfumed Deodorant Body Spray",
                "description": "A vibrant, masculine body spray with spicy notes.",
                "detailedDescription": "Storm Elixir Maverick offers a bold, spicy scent, perfect for Nigerian men seeking an affordable daily spray.",
                "price": 4400,
                "notes": {
                "top": "Bergamot, Pepper",
                "middle": "Spices, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 55,
                "name": "Storm Elixir Inferno Perfumed Deodorant Body Spray",
                "description": "A fiery, masculine body spray with woody notes.",
                "detailedDescription": "Storm Elixir Inferno is a bold, affordable spray with a warm, woody profile, popular in Nigeria for casual wear.",
                "price": 4899,
                "notes": {
                "top": "Citrus, Saffron",
                "middle": "Cedarwood, Spices",
                "base": "Musk, Amber"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 56,
                "name": "Storm Elixir Magic Perfumed Deodorant Body Spray",
                "description": "A fresh, versatile body spray for everyday use.",
                "detailedDescription": "Storm Elixir Magic offers a clean, citrusy scent, ideal for Nigeria’s warm climate and daily wear.",
                "price": 4899,
                "notes": {
                "top": "Lemon, Bergamot",
                "middle": "Jasmine, Lavender",
                "base": "Musk, Cedarwood"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 57,
                "name": "Storm Elixir Gala Perfumed Deodorant Body Spray",
                "description": "A sophisticated, masculine body spray with floral notes.",
                "detailedDescription": "Storm Elixir Gala is a refined spray with floral and woody notes, popular in Nigeria for evening wear.",
                "price": 8000,
                "notes": {
                "top": "Citrus, Apple",
                "middle": "Rose, Jasmine",
                "base": "Musk, Sandalwood"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 58,
                "name": "Storm Elixir Eros Perfumed Deodorant Body Spray",
                "description": "A seductive, masculine body spray with spicy notes.",
                "detailedDescription": "Storm Elixir Eros offers a bold, spicy scent with a warm base, ideal for Nigerian nightlife.",
                "price": 8000,
                "notes": {
                "top": "Pepper, Lemon",
                "middle": "Spices, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 59,
                "name": "Storm Elixir Oura Perfumed Deodorant Body Spray",
                "description": "A fresh, unisex body spray with floral notes.",
                "detailedDescription": "Storm Elixir Oura is a versatile, affordable spray with a floral and musky profile, popular in Nigeria.",
                "price": 8000,
                "notes": {
                "top": "Bergamot, Peach",
                "middle": "Jasmine, Rose",
                "base": "Musk, Vanilla"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 60,
                "name": "Storm Elixir Noir Perfumed Deodorant Body Spray",
                "description": "A dark, masculine body spray with woody notes.",
                "detailedDescription": "Storm Elixir Noir offers a deep, woody scent, perfect for Nigerian men seeking a bold, affordable spray.",
                "price": 4899,
                "notes": {
                "top": "Citrus, Black Pepper",
                "middle": "Cedarwood, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 61,
                "name": "Storm White Horse Perfumed Deodorant Body Spray",
                "description": "A clean, masculine body spray with fresh notes.",
                "detailedDescription": "White Horse by Storm is a crisp, affordable spray with citrus and musk, ideal for daily Nigerian wear.",
                "price": 5399,
                "notes": {
                "top": "Lemon, Mint",
                "middle": "Lavender, Cedar",
                "base": "Musk, Sandalwood"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 62,
                "name": "Storm Bull Power Long Lasting Body Spray",
                "description": "A powerful, masculine body spray with woody notes.",
                "detailedDescription": "Bull Power is a bold, affordable spray with a strong woody profile, popular in Nigeria for daily use.",
                "price": 5499,
                "notes": {
                "top": "Citrus, Pepper",
                "middle": "Cedarwood, Spices",
                "base": "Musk, Amber"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 63,
                "name": "Adour Paris Fibonacci Premium Perfumed Body Spray",
                "description": "A luxurious, unisex body spray with floral notes.",
                "detailedDescription": "Fibonacci by Adour Paris offers a refined, floral scent, popular in Nigeria for its premium yet affordable profile.",
                "price": 5000,
                "notes": {
                "top": "Bergamot, Lemon",
                "middle": "Jasmine, Rose",
                "base": "Musk, Amber"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 64,
                "name": "Adour Paris Third Eye Premium Perfumed Body Spray",
                "description": "A mystical, unisex body spray with woody notes.",
                "detailedDescription": "Third Eye by Adour Paris is a bold, affordable spray with a woody and musky profile, ideal for Nigeria.",
                "price": 5000,
                "notes": {
                "top": "Citrus, Saffron",
                "middle": "Cedarwood, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 65,
                "name": "Adour Paris Solar Plexus Premium Perfumed Body Spray",
                "description": "A vibrant, unisex body spray with citrus notes.",
                "detailedDescription": "Solar Plexus by Adour Paris offers a fresh, citrusy scent, perfect for Nigeria’s warm climate.",
                "price": 5000,
                "notes": {
                "top": "Lemon, Orange",
                "middle": "Jasmine, Lavender",
                "base": "Musk, Sandalwood"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 66,
                "name": "Adour Paris Sacral Premium Perfumed Body Spray",
                "description": "A warm, unisex body spray with floral notes.",
                "detailedDescription": "Sacral by Adour Paris is a cozy, floral spray, popular in Nigeria for its affordable elegance.",
                "price": 5000,
                "notes": {
                "top": "Peach, Bergamot",
                "middle": "Rose, Peony",
                "base": "Musk, Vanilla"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 67,
                "name": "Adour Paris Heart Premium Perfumed Body Spray",
                "description": "A romantic, unisex body spray with floral notes.",
                "detailedDescription": "Heart by Adour Paris offers a soft, floral scent, ideal for Nigerian daily wear and special occasions.",
                "price": 5000,
                "notes": {
                "top": "Citrus, Apple",
                "middle": "Jasmine, Rose",
                "base": "Musk, Amber"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 68,
                "name": "Adour Paris Throat Premium Perfumed Body Spray",
                "description": "A fresh, unisex body spray with aquatic notes.",
                "detailedDescription": "Throat by Adour Paris is a clean, ocean-inspired spray, perfect for Nigeria’s hot weather.",
                "price": 5000,
                "notes": {
                "top": "Ocean Air, Lemon",
                "middle": "Jasmine, Lily",
                "base": "Musk, Cedarwood"
                },
                "longevity": "4-6 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 69,
                "name": "ALL DAY Girl Sweet-Sensation Body Spray",
                "description": "A sweet, feminine body spray with fruity notes.",
                "detailedDescription": "Sweet-Sensation by ALL DAY Girl is an affordable, playful spray popular in Nigeria for its fruity and floral profile.",
                "price": 4418,
                "notes": {
                "top": "Apple, Peach",
                "middle": "Jasmine, Rose",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 70,
                "name": "ALL DAY Girl Princess Body Spray",
                "description": "A delicate, feminine body spray with floral notes.",
                "detailedDescription": "Princess by ALL DAY Girl is a soft, floral spray, popular in Nigeria for its feminine charm and affordability.",
                "price": 4750,
                "notes": {
                "top": "Bergamot, Lemon",
                "middle": "Peony, Jasmine",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 71,
                "name": "Love & Nature Hey Sugar Perfume Body Mist",
                "description": "A sweet, gourmand body mist with essential oils.",
                "detailedDescription": "Hey Sugar by Love & Nature is a cozy, vanilla-heavy mist with essential oils, popular in Nigeria for daily wear.",
                "price": 7500,
                "notes": {
                "top": "Vanilla, Caramel",
                "middle": "Jasmine, Tonka Bean",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 72,
                "name": "Confetti Female Long Lasting Body Spray Dear",
                "description": "A feminine, floral body spray with lasting power.",
                "detailedDescription": "Confetti Dear is an affordable, floral spray popular in Nigeria for its elegant scent and versatility.",
                "price": 5000,
                "notes": {
                "top": "Citrus, Peach",
                "middle": "Rose, Jasmine",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light to Moderate"
            },
            {
                "id": 73,
                "name": "Gdk U2 Body Spray Splash",
                "description": "A fresh, unisex body spray with citrus notes.",
                "detailedDescription": "Gdk U2 is an affordable, clean spray with a citrus and musky profile, ideal for Nigerian daily use.",
                "price": 1850,
                "notes": {
                "top": "Lemon, Bergamot",
                "middle": "Lavender, Jasmine",
                "base": "Musk, Cedarwood"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 74,
                "name": "Pure Black Perfume",
                "description": "A bold, masculine fragrance with spicy notes.",
                "detailedDescription": "Pure Black Perfume is an affordable Nigerian favorite with a spicy and woody profile, ideal for daily wear.",
                "price": 15000,
                "notes": {
                "top": "Pepper, Citrus",
                "middle": "Cedarwood, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 75,
                "name": "Copaci 24K Perfume",
                "description": "A luxurious fragrance with oriental notes.",
                "detailedDescription": "Copaci 24K offers a rich, affordable scent with oriental and woody notes, popular in Nigeria for its premium feel.",
                "price": 25000,
                "notes": {
                "top": "Saffron, Bergamot",
                "middle": "Oud, Rose",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 76,
                "name": "Prestige Innocence Perfume for Men",
                "description": "A balanced, masculine fragrance with woody notes.",
                "detailedDescription": "Prestige Innocence is an affordable Nigerian perfume with a clean, woody scent, ideal for versatile wear.",
                "price": 20000,
                "notes": {
                "top": "Citrus, Apple",
                "middle": "Cedarwood, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 77,
                "name": "Armaf Hunter Tres Jour Body Spray",
                "description": "A refreshing, unisex body spray with fruity notes.",
                "detailedDescription": "Armaf Hunter Tres Jour is an affordable spray with a fruity and woody profile, popular in Nigeria for daily use.",
                "price": 10000,
                "notes": {
                "top": "Apple, Citrus",
                "middle": "Jasmine, Rose",
                "base": "Musk, Sandalwood"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 78,
                "name": "Myk Maestro Pour Homme",
                "description": "A warm, masculine fragrance with caramel notes.",
                "detailedDescription": "Myk Maestro Pour Homme is an affordable Nigerian perfume with a creamy, woody scent, ideal for daily wear.",
                "price": 1500,
                "notes": {
                "top": "Caramel, Citrus",
                "middle": "Jasmine, Cedarwood",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 79,
                "name": "Seduction Perfume",
                "description": "A sweet, feminine fragrance with fruity notes.",
                "detailedDescription": "Seduction Perfume is an affordable Nigerian option with a fruity and woody profile, perfect for daily wear.",
                "price": 33500,
                "notes": {
                "top": "Peach, Bergamot",
                "middle": "Jasmine, Rose",
                "base": "Musk, Woody Notes"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 80,
                "name": "Noble Fragrance Collection 100ml",
                "description": "An affordable, versatile fragrance with floral notes.",
                "detailedDescription": "Noble Fragrance Collection is a budget-friendly Nigerian perfume with a floral and musky profile, ideal for daily use.",
                "price": 3500,
                "notes": {
                "top": "Citrus, Apple",
                "middle": "Jasmine, Rose",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 81,
                "name": "Monogotas Body Mist 100ml",
                "description": "A light, refreshing body mist with floral notes.",
                "detailedDescription": "Monogotas Body Mist is an affordable Nigerian mist with a floral and musky profile, perfect for casual wear.",
                "price": 4000,
                "notes": {
                "top": "Lemon, Bergamot",
                "middle": "Jasmine, Lily",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 82,
                "name": "Lattafa Mayar Perfume",
                "description": "A feminine fragrance with fruity and floral notes.",
                "detailedDescription": "Lattafa Mayar is a mid-range EDP popular in Nigeria for its sweet, long-lasting scent, ideal for women.",
                "price": 40000,
                "notes": {
                "top": "Peach, Lychee",
                "middle": "Jasmine, Rose",
                "base": "Musk, Vanilla"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 83,
                "name": "Armaf Odyssey Mandarin Sky Limited Edition",
                "description": "A vibrant, unisex fragrance with citrus notes.",
                "detailedDescription": "Armaf Odyssey Mandarin Sky is a mid-range perfume with a fresh, citrusy profile, popular in Nigeria for daily wear.",
                "price": 49000,
                "notes": {
                "top": "Mandarin, Bergamot",
                "middle": "Jasmine, Patchouli",
                "base": "Musk, Amber"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 84,
                "name": "Bentley Intense EDP",
                "description": "A bold, masculine fragrance with woody notes.",
                "detailedDescription": "Bentley Intense is a mid-range EDP popular in Nigeria for its rich, woody scent, ideal for men.",
                "price": 64000,
                "notes": {
                "top": "Bergamot, Black Pepper",
                "middle": "Cedarwood, Patchouli",
                "base": "Musk, Leather"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 85,
                "name": "Frederic Malle Promise EDP",
                "description": "A luxurious, oriental fragrance with rose and oud.",
                "detailedDescription": "Frederic Malle Promise is a premium perfume with a rich, oud-based profile, popular among Nigerian luxury enthusiasts.",
                "price": 950000,
                "notes": {
                "top": "Apple, Saffron",
                "middle": "Rose, Oud",
                "base": "Amber, Musk"
                },
                "longevity": "12+ hours on skin",
                "sillage": "Strong"
            },
            {
                "id": 86,
                "name": "Dior J’adore EDP",
                "description": "A luxurious, feminine fragrance with floral notes.",
                "detailedDescription": "Dior J’adore is a Nigerian favorite for its elegant floral blend, perfect for women seeking sophistication.",
                "price": 250000,
                "notes": {
                "top": "Pear, Bergamot",
                "middle": "Jasmine, Rose",
                "base": "Musk, Vanilla"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 87,
                "name": "Chanel Coco Mademoiselle EDP",
                "description": "A fresh, feminine fragrance with citrus and floral notes.",
                "detailedDescription": "Chanel Coco Mademoiselle is a luxurious Nigerian favorite with a vibrant, elegant scent for women.",
                "price": 300000,
                "notes": {
                "top": "Orange, Bergamot",
                "middle": "Jasmine, Rose",
                "base": "Patchouli, Vanilla"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 88,
                "name": "Beguile Mystique",
                "description": "An affordable, feminine fragrance with floral notes.",
                "detailedDescription": "Beguile Mystique is a budget-friendly Nigerian perfume with a floral and musky profile, ideal for daily wear.",
                "price": 20000,
                "notes": {
                "top": "Citrus, Peach",
                "middle": "Jasmine, Lily",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 89,
                "name": "Zara Femme EDP",
                "description": "An affordable, feminine fragrance with floral notes.",
                "detailedDescription": "Zara Femme is a budget-friendly EDP popular in Nigeria for its floral and vanilla profile, ideal for women.",
                "price": 25000,
                "notes": {
                "top": "Bergamot, Lemon",
                "middle": "Jasmine, Peony",
                "base": "Vanilla, Musk"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 90,
                "name": "Mango Sunkissed Fragrance",
                "description": "A bright, feminine fragrance with fruity notes.",
                "detailedDescription": "Mango Sunkissed is a vibrant perfume with a fruity and floral profile, popular in Nigeria for summer wear.",
                "price": 49900,
                "notes": {
                "top": "Mango, Citrus",
                "middle": "Jasmine, Rose",
                "base": "Musk, Vanilla"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 91,
                "name": "Mango Satin Blossom Perfume",
                "description": "A soft, feminine fragrance with floral notes.",
                "detailedDescription": "Satin Blossom by Mango is a delicate perfume with a floral and musky profile, ideal for Nigerian women.",
                "price": 49900,
                "notes": {
                "top": "Bergamot, Peach",
                "middle": "Jasmine, Peony",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 92,
                "name": "Mango Body Mist Le Matin",
                "description": "A fresh, feminine body mist with floral notes.",
                "detailedDescription": "Le Matin by Mango is a light, floral mist, perfect for Nigeria’s warm climate and daily wear.",
                "price": 34900,
                "notes": {
                "top": "Citrus, Apple",
                "middle": "Jasmine, Rose",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 93,
                "name": "Mango Soleil Tropicale Body Mist",
                "description": "A tropical, feminine body mist with fruity notes.",
                "detailedDescription": "Soleil Tropicale by Mango is a vibrant, summery mist, popular in Nigeria for its tropical profile.",
                "price": 34900,
                "notes": {
                "top": "Pineapple, Mango",
                "middle": "Jasmine, Hibiscus",
                "base": "Musk, Vanilla"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 94,
                "name": "Mango Warm Sand Fragrance",
                "description": "A warm, feminine fragrance with woody notes.",
                "detailedDescription": "Warm Sand by Mango is a cozy perfume with a woody and musky profile, ideal for Nigerian evenings.",
                "price": 49900,
                "notes": {
                "top": "Citrus, Bergamot",
                "middle": "Sandalwood, Jasmine",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 95,
                "name": "Mango La Fiesta Intense Fragrance",
                "description": "A bold, feminine fragrance with floral notes.",
                "detailedDescription": "La Fiesta Intense by Mango is a vibrant perfume with a floral and musky profile, perfect for Nigerian parties.",
                "price": 49900,
                "notes": {
                "top": "Bergamot, Peach",
                "middle": "Jasmine, Rose",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate to Strong"
            },
            {
                "id": 96,
                "name": "Mango Body Mist Vanille Dorée",
                "description": "A sweet, feminine body mist with vanilla notes.",
                "detailedDescription": "Vanille Dorée by Mango is a cozy, gourmand mist, popular in Nigeria for its sweet, creamy profile.",
                "price": 34900,
                "notes": {
                "top": "Vanilla, Citrus",
                "middle": "Jasmine, Tonka Bean",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            },
            {
                "id": 97,
                "name": "Mango Linen Vanilla Perfume",
                "description": "A clean, feminine fragrance with vanilla notes.",
                "detailedDescription": "Linen Vanilla by Mango is a soft, creamy perfume, ideal for Nigerian women seeking a fresh scent.",
                "price": 49900,
                "notes": {
                "top": "Lemon, Bergamot",
                "middle": "Vanilla, Jasmine",
                "base": "Musk, Amber"
                },
                "longevity": "6-8 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 98,
                "name": "Choco Musk Concentrated Oil",
                "description": "A rich, unisex fragrance oil with gourmand notes.",
                "detailedDescription": "Choco Musk is an affordable Nigerian fragrance oil with a sweet, musky profile, ideal for layering.",
                "price": 1650,
                "notes": {
                "top": "Chocolate, Vanilla",
                "middle": "Jasmine, Rose",
                "base": "Musk, Amber"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 99,
                "name": "24k Oil Perfume",
                "description": "A luxurious, unisex fragrance oil with oriental notes.",
                "detailedDescription": "24k Oil Perfume is an affordable Nigerian oil with a rich, oriental profile, perfect for special occasions.",
                "price": 2900,
                "notes": {
                "top": "Saffron, Bergamot",
                "middle": "Oud, Rose",
                "base": "Musk, Amber"
                },
                "longevity": "8-10 hours on skin",
                "sillage": "Moderate"
            },
            {
                "id": 100,
                "name": "Prestige Vanilla Sky Body Spray Splash",
                "description": "A sweet, feminine body spray with vanilla notes.",
                "detailedDescription": "Vanilla Sky by Prestige is an affordable, cozy spray with a vanilla and musky profile, popular in Nigeria for daily wear.",
                "price": 1850,
                "notes": {
                "top": "Vanilla, Citrus",
                "middle": "Jasmine, Rose",
                "base": "Musk, Amber"
                },
                "longevity": "3-5 hours on skin",
                "sillage": "Light"
            }
];

let cart = [];
let isLoggedIn = false; // Removed localStorage dependency
let modalQuantity = 1;
let currentSearchResults = [...(window.products || [])]; // Safety check for products array

// Load products
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    const products = window.products || [];
    
    if (products.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #e2e8f0;">No products available</div>';
        return;
    }
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">₦${product.price.toLocaleString()}</div>
            <button class="btn" onclick="event.stopPropagation(); buyNow(${product.id})">Buy Now</button>
        </div>
    `).join('');
}

// Open product detail modal
function openProductModal(productId) {
    const products = window.products || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const productDetail = document.getElementById('productDetail');
    
    productDetail.innerHTML = `
        <div class="product-detail-header">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
            </div>
            <div class="product-detail-info">
                <h2 class="product-detail-title">${product.name}</h2>
                <div class="product-detail-price">₦${product.price.toLocaleString()}</div>
                <p class="product-detail-description">${product.detailedDescription || product.description}</p>
            </div>
        </div>
        
        ${product.notes ? `
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
        ` : ''}
        
        ${(product.longevity || product.sillage) ? `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 10px;">
            ${product.longevity ? `
            <div>
                <h4 style="color: #ffd700; margin-bottom: 0.5rem;">Longevity</h4>
                <div style="color: #e2e8f0;">${product.longevity}</div>
            </div>
            ` : ''}
            ${product.sillage ? `
            <div>
                <h4 style="color: #ffd700; margin-bottom: 0.5rem;">Sillage</h4>
                <div style="color: #e2e8f0;">${product.sillage}</div>
            </div>
            ` : ''}
        </div>
        ` : ''}
        
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
    
    modalQuantity = 1;
    document.getElementById('modalQuantity').textContent = '1';
    document.getElementById('productModal').style.display = 'flex';
}

// Close product modal
function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    modalQuantity = 1;
}

// Change quantity in modal
function changeModalQuantity(change) {
    modalQuantity = Math.max(1, modalQuantity + change);
    document.getElementById('modalQuantity').textContent = modalQuantity;
}

// Add to cart from modal
function addToCartFromModal(productId) {
    if (!isLoggedIn) {
        closeProductModal();
        openLoginModal();
        return;
    }
    
    const products = window.products || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += modalQuantity;
    } else {
        cart.push({ ...product, quantity: modalQuantity });
    }
    
    updateCartCount();
    showNotification(`${modalQuantity} x ${product.name} added to cart!`);
    closeProductModal();
}

// Buy now from modal
function buyNowFromModal(productId) {
    if (!isLoggedIn) {
        closeProductModal();
        openLoginModal();
        return;
    }
    
    const products = window.products || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    cart = [{ ...product, quantity: modalQuantity }];
    updateCartCount();
    closeProductModal();
    proceedToCheckout();
}

// Buy now (single item)
function buyNow(productId) {
    if (!isLoggedIn) {
        openLoginModal();
        return;
    }
    
    const products = window.products || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    cart = [{ ...product, quantity: 1 }];
    updateCartCount();
    proceedToCheckout();
}

// Search functionality
function searchProducts() {
    const products = window.products || [];
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!query) {
        currentSearchResults = [...products];
        loadProducts();
        return;
    }
    
    const results = products.filter(product => {
        return (
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            (product.detailedDescription && product.detailedDescription.toLowerCase().includes(query)) ||
            (product.notes && (
                product.notes.top.toLowerCase().includes(query) ||
                product.notes.middle.toLowerCase().includes(query) ||
                product.notes.base.toLowerCase().includes(query)
            ))
        );
    });
    
    currentSearchResults = results;
    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const grid = document.getElementById('productsGrid');
    
    if (results.length === 0) {
        const recommendations = getRecommendations(query);
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <h2 style="color: #ffd700; margin-bottom: 1rem;">No products found for "${query}"</h2>
                <p style="color: #e2e8f0; margin-bottom: 2rem;">But here are some popular alternatives you might like:</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem;">
                    ${recommendations.map(product => `
                        <div class="product-card" onclick="openProductModal(${product.id})">
                            <div class="product-image">
                                <img src="${product.image}" alt="${product.name}">
                            </div>
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            <div class="product-price">₦${product.price.toLocaleString()}</div>
                            <button class="btn" onclick="event.stopPropagation(); buyNow(${product.id})">Buy Now</button>
                        </div>
                    `).join('')}
                </div>
                <button class="btn btn-large" onclick="clearSearch()" style="margin-top: 2rem;">
                    Continue Shopping
                </button>
            </div>
        `;
    } else {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; margin-bottom: 2rem;">
                <h2 style="color: #ffd700;">Found ${results.length} product${results.length === 1 ? '' : 's'} for "${query}"</h2>
                <button class="btn btn-secondary" onclick="clearSearch()" style="margin-top: 1rem;">
                    Show All Products
                </button>
            </div>
            ${results.map(product => `
                <div class="product-card" onclick="openProductModal(${product.id})">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">₦${product.price.toLocaleString()}</div>
                    <button class="btn" onclick="event.stopPropagation(); buyNow(${product.id})">Buy Now</button>
                </div>
            `).join('')}
        `;
    }
}

function getRecommendations(query) {
    const products = window.products || [];
    const popularProductIds = [13, 14, 1, 18, 16, 2, 12, 15];
    
    let recommendations = [];
    
    if (query.includes('oud') || query.includes('arabic')) {
        recommendations = products.filter(p => 
            (p.notes && (
                p.notes.top.toLowerCase().includes('oud') || 
                p.notes.middle.toLowerCase().includes('oud') || 
                p.notes.base.toLowerCase().includes('oud')
            )) ||
            p.name.toLowerCase().includes('oud')
        ).slice(0, 6);
    } else if (query.includes('vanilla') || query.includes('sweet')) {
        recommendations = products.filter(p => 
            (p.notes && (
                p.notes.top.toLowerCase().includes('vanilla') || 
                p.notes.middle.toLowerCase().includes('vanilla') || 
                p.notes.base.toLowerCase().includes('vanilla')
            )) ||
            p.description.toLowerCase().includes('sweet')
        ).slice(0, 6);
    } else if (query.includes('fresh') || query.includes('citrus')) {
        recommendations = products.filter(p => 
            (p.notes && (
                p.notes.top.toLowerCase().includes('bergamot') || 
                p.notes.top.toLowerCase().includes('lemon') || 
                p.notes.top.toLowerCase().includes('citrus')
            )) ||
            p.description.toLowerCase().includes('fresh')
        ).slice(0, 6);
    } else if (query.includes('woody') || query.includes('sandalwood')) {
        recommendations = products.filter(p => 
            (p.notes && (
                p.notes.base.toLowerCase().includes('sandalwood') || 
                p.notes.base.toLowerCase().includes('cedarwood') || 
                p.notes.middle.toLowerCase().includes('cedar')
            )) ||
            p.description.toLowerCase().includes('woody')
        ).slice(0, 6);
    } else if (query.includes('rose') || query.includes('floral')) {
        recommendations = products.filter(p => 
            (p.notes && (
                p.notes.top.toLowerCase().includes('rose') || 
                p.notes.middle.toLowerCase().includes('rose') || 
                p.notes.middle.toLowerCase().includes('jasmine')
            )) ||
            p.description.toLowerCase().includes('floral')
        ).slice(0, 6);
    }
    
    if (recommendations.length === 0) {
        recommendations = popularProductIds
            .map(id => products.find(p => p.id === id))
            .filter(Boolean)
            .slice(0, 6);
    }
    
    return recommendations;
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    currentSearchResults = [...(window.products || [])];
    loadProducts();
}

function handleSearchKeyPress(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
}

function handleSearchInput(event) {
    const query = event.target.value.toLowerCase().trim();
    
    if (!query) {
        currentSearchResults = [...(window.products || [])];
        loadProducts();
        return;
    }
}

// Cart functionality
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

function openCartModal() {
    if (!isLoggedIn) {
        openLoginModal();
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <strong>${item.name}</strong><br>
                <span style="color: #ffd700;">₦${item.price.toLocaleString()}</span>
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
    cartItems.innerHTML += `<div style="text-align: center; margin-top: 1rem; font-size: 1.2rem; color: #ffd700;"><strong>Total: ₦${total.toLocaleString()}</strong></div>`;
    
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'flex';
    }
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

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
    openCartModal();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    if (cart.length === 0) {
        closeCartModal();
    } else {
        openCartModal();
    }
}

// Checkout functionality
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    closeCartModal();
    
    const productsSection = document.getElementById('products');
    const heroSection = document.querySelector('.hero');
    const checkoutSection = document.getElementById('checkoutSection');
    
    if (productsSection) productsSection.style.display = 'none';
    if (heroSection) heroSection.style.display = 'none';
    if (checkoutSection) checkoutSection.style.display = 'block';
    
    const orderSummary = document.getElementById('orderSummary');
    if (orderSummary) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        orderSummary.innerHTML = `
            <h3 style="color: #ffd700; margin-bottom: 1rem;">Order Summary</h3>
            ${cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>${item.name} (x${item.quantity})</span>
                    <span>₦${(item.price * item.quantity).toLocaleString()}</span>
                </div>
            `).join('')}
            <hr style="margin: 1rem 0; border-color: #ffd700;">
            <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem;">
                <span>Total:</span>
                <span>₦${total.toLocaleString()}</span>
            </div>
        `;
    }
}

function proceedToWhatsApp() {
    const orderText = cart.map(item => `${item.name} (x${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}`).join('\n');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const message = `Hello! I'd like to place an order from Myskay Aura:\n\n${orderText}\n\nTotal: ₦${total.toLocaleString()}\n\nPlease let me know about payment and shipping details. Thank you!`;
    
    const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

function backToProducts() {
    const productsSection = document.getElementById('products');
    const heroSection = document.querySelector('.hero');
    const checkoutSection = document.getElementById('checkoutSection');
    
    if (checkoutSection) checkoutSection.style.display = 'none';
    if (productsSection) productsSection.style.display = 'block';
    if (heroSection) heroSection.style.display = 'block';
}

// Login functionality (using in-memory state instead of localStorage)
function toggleProfileMenu() {
    const menu = document.getElementById("profileMenu");
    if (menu) {
        const isVisible = menu.style.display === "block";
        menu.style.display = isVisible ? "none" : "block";
        updateProfileMenu();
    }
}

function updateProfileMenu() {
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    
    if (loginBtn) loginBtn.style.display = isLoggedIn ? "none" : "block";
    if (logoutBtn) logoutBtn.style.display = isLoggedIn ? "block" : "none";
}

function openLoginModal() {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.style.display = "block";
    }
}

function closeLoginModal() {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
        loginModal.style.display = "none";
    }
}

function loginUser() {
    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;

    if (username && password) {
        isLoggedIn = true;
        showNotification("Login successful!");
        closeLoginModal();
        updateProfileMenu();
        
        // Clear form
        if (document.getElementById("username")) document.getElementById("username").value = '';
        if (document.getElementById("password")) document.getElementById("password").value = '';
    } else {
        showNotification("Please enter both username and password.");
    }
    
    return false; // Prevent form submission
}

function logoutUser() {
    isLoggedIn = false;
    cart = []; // Clear cart on logout
    updateCartCount();
    showNotification("You have been logged out.");
    updateProfileMenu();
    
    // Hide profile menu
    const menu = document.getElementById("profileMenu");
    if (menu) {
        menu.style.display = "none";
    }
}

// Utility functions
function showNotification(message) {
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

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .profile-icon {
        position: relative;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0.5rem;
        border-radius: 50%;
        background: rgba(255, 215, 0, 0.1);
        transition: background 0.3s ease;
    }
    
    .profile-icon:hover {
        background: rgba(255, 215, 0, 0.2);
    }
    
    .profile-menu {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        background: #1a1a1a;
        border: 1px solid #ffd700;
        border-radius: 5px;
        min-width: 120px;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }
    
    .profile-menu button {
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        background: none;
        border: none;
        color: #e2e8f0;
        cursor: pointer;
        transition: background 0.3s ease;
    }
    
    .profile-menu button:hover {
        background: rgba(255, 215, 0, 0.1);
        color: #ffd700;
    }
`;
document.head.appendChild(style);

// Event listeners and initialization
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    updateProfileMenu();
    
// Add search event listeners
const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', handleSearchKeyPress);
        searchInput.addEventListener('input', handleSearchInput);
    }
    
    
// Close modals when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
            modalQuantity = 1;
        }
        
// Close profile menu if clicked outside
 if (!e.target.closest(".profile-icon") && !e.target.closest("#profileMenu")) {
            const profileMenu = document.getElementById("profileMenu");
            if (profileMenu) {
                profileMenu.style.display = "none";
            }
        }
        
        // Close login modal when clicking outside it
        if (e.target === document.getElementById("loginModal")) {
            closeLoginModal();
        }
    });
});