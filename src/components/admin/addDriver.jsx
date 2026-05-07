import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

export default function AddDriverScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Consolidated form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    licenseNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddDriver = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.licenseNumber.trim()) {
      alert("Error: All fields are required to register a driver.");
      return;
    }

    setLoading(true);

    try {
      // Using your DataService (Axios)
      await DataService.post("/AdminDriver/AddDriver", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        license_number: formData.licenseNumber.trim(),
      });

      alert("Success ✅: Driver registered! Default password: driver123");
      navigate(-1); // Go back
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.Message || "Could not add driver. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Visual Header */}
      <div style={styles.header}>
        <div style={styles.iconContainer}>🆔</div>
        <h1 style={styles.title}>Register Driver</h1>
      </div>

      <form style={styles.formCard} onSubmit={handleAddDriver}>
        <label style={styles.label}>Full Name</label>
        <input 
          style={styles.input} 
          name="name"
          placeholder="e.g. Muhammad Ali" 
          value={formData.name} 
          onChange={handleChange} 
        />

        <label style={styles.label}>Email Address</label>
        <input 
          style={styles.input} 
          name="email"
          type="email"
          placeholder="driver@system.com" 
          value={formData.email} 
          onChange={handleChange} 
        />

        <label style={styles.label}>Phone Number</label>
        <input 
          style={styles.input} 
          name="phone"
          type="tel"
          placeholder="e.g. 0345-1234567" 
          value={formData.phone} 
          onChange={handleChange} 
        />

        <label style={styles.label}>License Number</label>
        <input 
          style={styles.input} 
          name="licenseNumber"
          placeholder="e.g. PB-12345-678" 
          value={formData.licenseNumber} 
          onChange={handleChange} 
        />

        <button type="submit" style={styles.saveBtn} disabled={loading}>
          {loading ? "Registering..." : "Create Driver Account"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#1A243A', paddingBottom: '40px' },
  header: { 
    backgroundColor: '#6C5CE7', 
    padding: '30px', 
    textAlign: 'center', 
    borderBottomLeftRadius: '35px', 
    borderBottomRightRadius: '35px',
    marginBottom: '25px'
  },
  iconContainer: {
    backgroundColor: '#FFF',
    display: 'inline-block',
    padding: '15px',
    borderRadius: '25px',
    marginBottom: '10px',
    fontSize: '30px'
  },
  title: { color: '#FFF', fontSize: '24px', margin: 0 },
  formCard: { 
    backgroundColor: '#E6E6E6', 
    margin: '0 auto',
    maxWidth: '600px',
    borderRadius: '20px', 
    padding: '20px', 
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
  },
  label: { fontSize: '13px', fontWeight: 'bold', color: '#1A243A', marginBottom: '6px', marginLeft: '2px', display: 'block' },
  input: { 
    backgroundColor: '#FFF', 
    borderRadius: '10px', 
    padding: '12px', 
    marginBottom: '15px', 
    border: '1px solid #DDD',
    width: '100%',
    boxSizing: 'border-box', // Crucial for padding/width consistency
    outline: 'none'
  },
  saveBtn: { 
    backgroundColor: '#6C5CE7', 
    width: '100%',
    padding: '18px', 
    borderRadius: '15px', 
    border: 'none',
    color: '#FFF',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px'
  }
};
