import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";


const StudentEnrollment = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [formData, setFormData] = useState({
        reg_no: "",
        course_no: "",
        semester_no: "Fall 2026",
        Section: ""
    });

    useEffect(() => {
        DataService.get("/AdminCourse/GetCourses").then(res => setCourses(res.data));
    }, []);

    const handleEnroll = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // This hit's your [Route("EnrollStudent")]
            const response = await DataService.post("/AdminCourseAssignment/EnrollStudent", formData);
            if (response.status === 200) {
                alert("Success ✅: Student Enrolled!");
                navigate(-1);
            }
        } catch (error) {
            // This will catch the "No teacher assigned to Section X yet" error from C#
            const errorMsg = error.response?.data?.Message || "Enrollment Error";
            alert(`Error ❌: ${errorMsg}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}><h2 style={styles.title}>Student Enrollment</h2></div>
            <form onSubmit={handleEnroll} style={styles.formCard}>
                <label style={styles.label}>Search Student</label>
                <input 
                    style={styles.input} 
                    placeholder="Enter Registration No..." 
                    onChange={(e) => setFormData({...formData, reg_no: e.target.value})} 
                />

                <label style={styles.label}>Select Course</label>
                <select style={styles.input} onChange={(e) => setFormData({...formData, course_no: e.target.value})}>
                    <option value="">Choose Course...</option>
                    {courses.map(c => <option key={c.Course_no} value={c.Course_no}>{c.Course_desc}</option>)}
                </select>

                <div style={styles.row}>
                    <div style={{flex:1, marginRight:'10px'}}>
                        <label style={styles.label}>Semester</label>
                        <select style={styles.input} onChange={(e) => setFormData({...formData, semester_no: e.target.value})}>
                            <option value="Fall 2026">Fall 2026</option>
                        </select>
                    </div>
                    <div style={{flex:1}}>
                        <label style={styles.label}>Course Section</label>
                        <select style={styles.input} onChange={(e) => setFormData({...formData, Section: e.target.value})}>
                            <option value="">Select...</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>
                </div>

                <button type="submit" style={styles.saveBtn} disabled={loading}>
                    {loading ? "Enrolling..." : "Complete Enrollment"}
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
    input: { color:"#1d1c1c",width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "10px", border: "1px solid #CCC", boxSizing: "border-box", backgroundColor: '#FFF' },
    row: { display: "flex", justifyContent: "space-between" },
    saveBtn: { width: "100%", padding: "18px", backgroundColor: "#7D58C1", color: "#FFF", border: "none", borderRadius: "15px", fontSize: "18px", fontWeight: "bold", cursor: "pointer" }
};

export default StudentEnrollment;
