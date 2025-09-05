
// Fetch products
export const getProducts = () => {
    const products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  };
  
  // Save products
  export const saveProducts = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };
  
  // Add product
  export const addProduct = (product) => {
    const products = getProducts();
    products.push({ id: Date.now(), ...product });
    saveProducts(products);
  };
  
  // Delete product
  export const deleteProduct = (id) => {
    const products = getProducts().filter((p) => p.id !== id);
    saveProducts(products);
  };
  
  // Update product
  export const updateProduct = (id, updatedProduct) => {
    const products = getProducts().map((p) =>
      p.id === id ? { ...p, ...updatedProduct } : p
    );
    saveProducts(products);
  };
  
  export default {
    getProducts,
    saveProducts,
    addProduct,
    deleteProduct,
    updateProduct,
  };