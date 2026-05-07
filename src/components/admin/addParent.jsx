import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

export default function AddParent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", phone: "", cnic: "" });

  const handleAddParent = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.cnic) {
      alert("Please fill all fields");
      return;
    }

    try {
      // Using DataService instead of fetch
      await DataService.post("/AdminParent/AddParent", {
        name: formData.name,
        phone: formData.phone,
        cnic: formData.cnic,
      });

      alert("Success ✅: Parent added to database!");
      setFormData({ name: "", phone: "", cnic: "" });
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert("Failed: Could not add parent. Check your API connection.");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.formWrapper} onSubmit={handleAddParent}>
        <h2 style={styles.title}>Add New Parent</h2>
        <label style={styles.label}>Full Name</label>
        <input name="name" style={styles.input} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <label style={styles.label}>CNIC</label>
        <input name="cnic" style={styles.input} value={formData.cnic} onChange={(e) => setFormData({...formData, cnic: e.target.value})} />
        <label style={styles.label}>Phone</label>
        <input name="phone" style={styles.input} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        <button type="submit" style={styles.button}>Add Parent</button>
      </form>
    </div>
  );
}