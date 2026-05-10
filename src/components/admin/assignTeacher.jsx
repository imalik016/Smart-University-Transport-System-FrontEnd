import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

const AssignTeacher = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [courses, setCourses] = useState([]);

    const [formData, setFormData] = useState({
        Emp_no: "",
        Course_no: "",
        Semester_no: "Fall 2026",
        Section: ""
    });

    // Fetch teachers and courses on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [teacherRes, courseRes] = await Promise.all([
                    DataService.get("/AdminTeacher/GetTeachers"),
                    DataService.get("/AdminCourse/GetCourses")
                ]);
                setTeachers(teacherRes.data);
                setCourses(courseRes.data);
            } catch (err) {
                console.error("Fetch Error:", err);
            }
        };
        fetchData();
    }, []);

    const handleAssign = async (e) => {
        e.preventDefault();
        if (!formData.Emp_no || !formData.Course_no || !formData.Section) {
            alert("All fields are required!");
            return;
        }

        setLoading(true);
        try {
            const response = await DataService.post("/AdminCourseAssignment/AssignTeacher", formData);
            if (response.status === 200) {
                alert("Success ✅: Teacher assigned to section!");
                navigate(-1);
            }
        } catch (error) {
            const msg = error.response?.data?.Message || "Assignment failed.";
            alert(`Error ❌: ${msg}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>Assign Teacher</h2>
                <p style={{color: '#EEE'}}>Link Faculty to Courses & Sections</p>
            </div>

            <form onSubmit={handleAssign} style={styles.formCard}>
                <label style={styles.label}>Select Teacher</label>
                <select 
                    name="Emp_no" 
                    style={styles.input} 
                    onChange={(e) => setFormData({...formData, Emp_no: e.target.value})}
                >
                    <option value="">Choose Teacher...</option>
                    {teachers.map(t => <option key={t.Emp_no} value={t.Emp_no}>{t.Name}</option>)}
                </select>

                <label style={styles.label}>Select Course</label>
                <select 
                    name="Course_no" 
                    style={styles.input} 
                    onChange={(e) => setFormData({...formData, Course_no: e.target.value})}
                >
                    <option value="">Choose Course...</option>
                    {courses.map(c => <option key={c.Course_no} value={c.Course_no}>{c.Course_desc}</option>)}
                </select>

                <div style={styles.row}>
                    <div style={{flex:1, marginRight:'10px'}}>
                        <label style={styles.label}>Semester</label>
                        <select style={styles.input} onChange={(e) => setFormData({...formData, Semester_no: e.target.value})}>
                            <option value="Fall 2026">Fall 2026</option>
                            <option value="Spring 2026">Spring 2026</option>
                        </select>
                    </div>
                    <div style={{flex:1}}>
                        <label style={styles.label}>Section</label>
                        <select style={styles.input} onChange={(e) => setFormData({...formData, Section: e.target.value})}>
                            <option value="">Select...</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                </div>

                <button type="submit" style={styles.saveBtn} disabled={loading}>
                    {loading ? "Assigning..." : "Assign Teacher"}
                </button>
            </form>
        </div>
    );
};


const styles = {
    container: { backgroundColor: "#1A243A", minHeight: "100vh", paddingBottom: "40px", display: 'flex', flexDirection: 'column', alignItems: 'center' },
    header: { backgroundColor: "#7D58C1", width: "100%", padding: "40px 0", textAlign: "center", borderBottomLeftRadius: "35px", borderBottomRightRadius: "35px", marginBottom: "25px" },
    title: { color: "#FFF", margin: 0, fontWeight: "bold", fontSize: '24px' },
    formCard: { backgroundColor: "#E6E6E6", width: "90%", maxWidth: "450px", borderRadius: "25px", padding: "25px", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" },
    label: { display: "block", fontSize: "13px", fontWeight: "bold", color: "#1A243A", marginBottom: "8px" },
    input: { color:"#004d40",width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "10px", border: "1px solid #CCC", boxSizing: "border-box", backgroundColor: '#FFF' },
    row: { display: "flex", justifyContent: "space-between" },
    saveBtn: { width: "100%", padding: "18px", backgroundColor: "#7D58C1", color: "#FFF", border: "none", borderRadius: "15px", fontSize: "18px", fontWeight: "bold", cursor: "pointer" }
};

export default AssignTeacher;

