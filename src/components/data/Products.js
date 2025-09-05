// src/data/products.js

const products = [
  {
    id: 1,
    name: "Luxury Perfume",
    price: 15000,
    category: "Perfumes",
    image: "https://i.pinimg.com/1200x/5d/a0/99/5da099fac76a83918059dcf42c9e0a28.jpg",
    description: "A long-lasting luxury fragrance for special occasions.",
    stock: 10
  },
  {
    id: 2,
    name: "Casual Men Shirts",
    price: 45000,
    category: "Clothes",
    image: "https://i.pinimg.com/736x/f9/da/f8/f9daf8994c02b8cca330775f4e601ba3.jpg",
    description: "Easy wear shirts for men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 10
  },
  {
    id: 3,
    name: "Leather Shoes",
    price: 20000,
    category: "Shoes",
    image: "https://i.pinimg.com/1200x/5f/97/57/5f97578d3846f8a98dd08d79935926f1.jpg",
    description: "Lightweight, durable leather shoes for everyday wear.",
    sizes: ["40", "41", "42", "43", "44"],
    stock: 10
  },
  {
    id: 4,
    name: "Leather Bag",
    price: 25000,
    category: "Bags",
    image: "https://i.pinimg.com/1200x/6c/63/32/6c6332fbd666a3e984eb2126d27a4457.jpg",
    description: "Stylish leather bag with spacious compartments.",
    stock: 10
  },
  {
    id: 5,
    name: "Airforce 1",
    price: 40000,
    category: "Shoes",
    image: "https://i.pinimg.com/1200x/9b/bc/1e/9bbc1ed54491085f6b936e8ffdcf3172.jpg",
    description: "Classic Nike Airforce 1 sneakers – timeless and versatile.",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    stock: 10
  },
  {
    id: 6,
    name: "Plain Tees",
    price: 6000,
    category: "Clothes",
    image: "https://i.pinimg.com/1200x/8c/6d/dc/8c6ddc17dfa62b2a011be39b0a7da0be.jpg",
    description: "Soft, breathable cotton plain tees for everyday comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 10
  },
  {
    id: 7,
    name: "Wrist Watch",
    price: 30000,
    category: "Watches",
    image: "https://i.pinimg.com/1200x/69/26/f1/6926f1dc9b98d02293515d78ee194737.jpg",
    description: "Elegant wrist watch with premium leather straps.",
    stock: 10
  },
  {
    id: 8,
    name: "Designer Handbag",
    price: 75000,
    category: "Bags",
    image: "https://i.pinimg.com/1200x/ff/df/95/ffdf95902c025098adccbf639db4b132.jpg",
    description: "Luxury designer handbag with exquisite detailing.",
    stock: 10
  },
  {
    id: 9,
    name: "Casual Men Shoes",
    price: 25000,
    category: "Shoes",
    image: "https://i.pinimg.com/1200x/b3/ec/0d/b3ec0d69bc79db22ada94bd2288c77c3.jpg",
    description: "Luxury designer shoes with exquisite detailing.",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    stock: 10
  },
  {
    id: 10,
    name: "Running Shoes",
    price: 35000,
    category: "Shoes",
    image: "https://i.pinimg.com/736x/52/18/c6/5218c6d68f1eae12286c54f256d4de3d.jpg",
    description: "High-performance running shoes for athletes.",
    stock: 10
  },
  {
    id: 11,
    name: "Casual Sneakers",
    price: 25000,
    category: "Shoes",
    image: "https://i.pinimg.com/1200x/7e/ef/ca/7eefca8a6b47f81810505b90effc8296.jpg",
    description: "Comfortable and stylish casual sneakers for everyday wear.",
    stock: 10
  },
  {
    id: 12,
    name: "Designer Suits",
    price: 60000,
    category: "Clothes",
    image: "https://i.pinimg.com/736x/b9/a4/43/b9a4435887987c89f61fb96964db89e3.jpg",
    description: "Comfortable Suits",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 10
  },
  {
    id: 13,
    name: "Formal Shoes",
    price: 30000,
    category: "Shoes",
    image: "https://i.pinimg.com/1200x/9e/b1/73/9eb1737d5b3e4ea1167e6f5f9fdf66a1.jpg",
    description: "Elegant formal shoes for special occasions.",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    stock: 10
  },
  {
    id: 14,
    name: "Casual Handbag",
    price: 20000,
    category: "Bags",
    image: "https://i.pinimg.com/1200x/22/49/91/2249914d869ca9b75b21c81af5b2989b.jpg",
    description: "Trendy casual handbag for everyday use.",
    stock: 10
  },
  {
    id: 15,
    name: "Sports Watch",
    price: 40000,
    category: "Watches",
    image: "https://i.pinimg.com/736x/33/dd/86/33dd860c51456a670f5fe1ecd583b84c.jpg",
    description: "Durable sports watch with multiple features.",
    stock: 10
  },
  {
    id: 16,
    name: "Evening Gown",
    price: 80000,
    category: "Clothes",
    image: "https://i.pinimg.com/736x/85/90/2c/85902c7928d02269503d903602eb7898.jpg",
    description: "Stunning evening gown for special events.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 10
  },
  {
    id: 17,
    name: "Casual Dress",
    price: 30000,
    category: "Clothes",
    image: "https://i.pinimg.com/1200x/51/b5/81/51b581939a92b308f4a5e9cd7e017824.jpg",
    description: "Comfortable casual dress for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 10
  },
  {
    id: 18,
    name: "Leather Jacket",
    price: 120000,
    category: "Clothes",
    image: "https://i.pinimg.com/1200x/7d/ef/3e/7def3e8c37e1837a1abe4b702888f996.jpg",
    description: "Stylish leather jacket for a bold look.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 10
  },
  {
    id: 19,
    name: "Digital Watch",
    price: 15000,
    category: "Watches",
    image: "https://i.pinimg.com/1200x/aa/f1/e1/aaf1e1ac8eb1f41d09644dc589878832.jpg",
    description: "Affordable digital watch with essential features.",
    stock: 10
  },
  {
    id: 20,
    name: "Travel Backpack",
    price: 50000,
    category: "Bags",
    image: "https://i.pinimg.com/1200x/cf/4f/01/cf4f01a5dba40513a24e547ed618414b.jpg",
    description: "Spacious travel backpack with multiple compartments.",
    stock: 10
  }
];

export default products;
