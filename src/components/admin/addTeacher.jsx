import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

export default function AddTeacherScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form States
  const [empNo, setEmpNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddTeacher = async () => {
    // Validation
    if (!empNo.trim() || !firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      window.alert("Error: Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const teacherData = {
      Emp_no: empNo.trim(),
      Emp_firstname: firstName.trim(),
      Emp_lastname: lastName.trim(),
      Emp_email: email.trim(),
      phone: phone.trim()
    };

    try {
      // Using DataService for consistency
      await DataService.post("/AdminTeacher/AddTeacher", teacherData);
      
      window.alert("Success: Teacher added successfully!");
      navigate(-1); // Go back to the previous screen
    } catch (error) {
      console.error("Detailed Error:", error);
      const errorMsg = error.response?.data?.Message || "Failed to save teacher. Check your connection.";
      window.alert(`Server Error: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.iconContainer}>
          <span style={{ fontSize: '50px' }}>👨‍🏫</span>
        </div>
        <h1 style={styles.title}>Add Faculty Member</h1>
      </div>

      <div style={styles.formCard}>
        <label style={styles.label}>Employee Number</label>
        <input 
          style={styles.input} 
          placeholder="e.g. EMP-2024-001" 
          value={empNo} 
          onChange={(e) => setEmpNo(e.target.value)} 
        />

        <div style={styles.row}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label style={styles.label}>First Name</label>
            <input 
              style={styles.input} 
              placeholder="First" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Last Name</label>
            <input 
              style={styles.input} 
              placeholder="Last" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </div>
        </div>

        <label style={styles.label}>Official Email</label>
        <input 
          style={styles.input} 
          placeholder="email@university.com" 
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <label style={styles.label}>Phone Number</label>
        <input 
          style={styles.input} 
          placeholder="e.g. 0300-1234567" 
          type="tel"
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
      </div>

      {loading ? (
        <div style={styles.loader}>Saving...</div>
      ) : (
        <button style={styles.saveBtn} onClick={handleAddTeacher}>
          Save Teacher Account
        </button>
      )}
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: "#1A243A", paddingBottom: '40px' },
  header: { backgroundColor: "#7D58C1", padding: '30px', alignItems: "center", borderBottomLeftRadius: '35px', borderBottomRightRadius: '35px', marginBottom: '25px', display: 'flex', flexDirection: 'column' },
  iconContainer: { backgroundColor: "#FFF", padding: '15px', borderRadius: '25px', marginBottom: '10px' },
  title: { color: "#FFF", fontSize: '24px', fontWeight: "bold", margin: 0 },
  formCard: { backgroundColor: "#E6E6E6", borderRadius: '20px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)', maxWidth: '600px', margin: '0 auto' },
  label: { fontSize: '13px', fontWeight: "bold", color: "#1A243A", marginBottom: '6px', marginLeft: '2px', display: 'block' },
  input: { backgroundColor: "#FFF", borderRadius: '10px', padding: '12px', marginBottom: '15px', color: "#000", border: '1px solid #DDD', width: '100%', boxSizing: 'border-box', fontSize: '16px' },
  row: { display: "flex", justifyContent: "space-between" },
  saveBtn: { backgroundColor: "#7D58C1", margin: '20px auto 0 auto', padding: '18px 40px', borderRadius: '15px', border: 'none', color: "#FFF", fontSize: '18px', fontWeight: "bold", cursor: 'pointer', display: 'block' },
  loader: { textAlign: 'center', marginTop: '20px', color: '#FFF' }
};








