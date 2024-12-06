import React, { useState, useEffect } from "react";
import axios from "axios";
import './VerifierDashboard.css'

const VerifierDashboard = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch submitted items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/verifier/items");
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items:", error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // Handle verification
  const handleVerify = async (itemId, status) => {
    try {
      await axios.post("/api/verifier/verify", { itemId, status });
      setItems(items.filter((item) => item.id !== itemId)); // Remove item from the list
      alert(`Item ${status === "approved" ? "approved" : "rejected"} successfully.`);
    } catch (error) {
      console.error("Error updating item status:", error);
      alert("Failed to update item status.");
    }
  };

  if (loading) {
    return <p>Loading items...</p>;
  }

  return (
    <div className="container p-5 mt-5 text-center ">
      <h1>Verifier Dashboard</h1>
      {items.length === 0 ? (
        <p>No items pending verification.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Unique Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.uniqueCode}</td>
                <td>
                  <button onClick={() => handleVerify(item.id, "approved")}>Approve</button>
                  <button onClick={() => handleVerify(item.id, "rejected")}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VerifierDashboard;
