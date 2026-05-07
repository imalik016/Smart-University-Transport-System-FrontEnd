import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";


export default function AddCourseScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Course_no: "",
    Discipline: "",
    Course_desc: "",
    Credit_hrs: "",
    Course_type: "",
    SOS: "",
    SOS_DESC: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((val) => !val.trim())) {
      alert("Error: Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await DataService.post("/AdminCourse/AddCourse", formData);
      alert("Success : Course added successfully!");
      navigate(-1); 
    } catch (error) {
      console.error("Detailed Error:", error);
      alert(error.response?.data?.Message || "Failed to save.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.iconContainer}>📖</div>
        <h1 style={styles.title}>Add Course</h1>
      </div>

      <form style={styles.formCard} onSubmit={handleAddCourse}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Course Number</label>
          <input style={styles.input} name="Course_no" value={formData.Course_no} onChange={handleChange} placeholder="e.g. COURSE-2024-001" />
        </div>

        <div style={styles.row}>
          <div style={{ ...styles.formGroup, flex: 1, marginRight: '10px' }}>
            <label style={styles.label}>Discipline</label>
            <input style={styles.input} name="Discipline" value={formData.Discipline} onChange={handleChange} placeholder="e.g. Computer Science" />
          </div>
          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>Course Description</label>
            <input style={styles.input} name="Course_desc" value={formData.Course_desc} onChange={handleChange} placeholder="Description" />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Credit Hours</label>
          <input style={styles.input} type="number" name="Credit_hrs" value={formData.Credit_hrs} onChange={handleChange} placeholder="e.g. 3" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Course Type</label>
          <input style={styles.input} name="Course_type" value={formData.Course_type} onChange={handleChange} placeholder="e.g. Lecture or Lab" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>SOS</label>
          <input style={styles.input} name="SOS" value={formData.SOS} onChange={handleChange} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>SOS Description</label>
          <input style={styles.input} name="SOS_DESC" value={formData.SOS_DESC} onChange={handleChange} />
        </div>

        <button type="submit" style={styles.saveBtn} disabled={loading}>
          {loading ? "Saving..." : "Save Course"}
        </button>
      </form>
    </div>
  );
}

// Styles Object - Same as React Native StyleSheet
const styles = {
  container: { minHeight: '100vh', backgroundColor: '#1A243A', paddingBottom: '40px' },
  header: { backgroundColor: '#7D58C1', padding: '30px', textAlign: 'center', borderBottomLeftRadius: '35px', borderBottomRightRadius: '35px', marginBottom: '25px', color: 'white' },
  iconContainer: { backgroundColor: '#FFF', display: 'inline-block', padding: '15px', borderRadius: '50%', fontSize: '30px', marginBottom: '10px' },
  title: { color: '#FFF', fontSize: '24px', margin: 0 },
  formCard: { backgroundColor: '#E6E6E6', borderRadius: '20px', padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', maxWidth: '600px', margin: '0 auto' },
  label: { fontSize: '13px', fontWeight: 'bold', color: '#1A243A', marginBottom: '6px', display: 'block' },
  input: { backgroundColor: '#FFF', borderRadius: '10px', padding: '12px', border: '1px solid #DDD', width: '100%', boxSizing: 'border-box' },
  row: { display: 'flex', justifyContent: 'space-between' },
  formGroup: { marginBottom: '15px' },
  saveBtn: { backgroundColor: '#7D58C1', color: '#FFF', padding: '18px', borderRadius: '15px', border: 'none', width: '100%', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' },
};

