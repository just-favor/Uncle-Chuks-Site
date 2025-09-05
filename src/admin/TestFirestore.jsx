import React, { useEffect } from "react";

function TestFirestore() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
        alert("✅ Firestore connected! Check console for products.");
      } catch (error) {
        console.error("❌ Firestore error:", error);
        alert("Firestore connection failed. Check console.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Firestore Test</h1>
      <p>Check your browser console for product data.</p>
    </div>
  );
}

export default TestFirestore;
