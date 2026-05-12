
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios"; 

const AddCourse = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Initial state matches your SQL/C# Model structure
    const [formData, setFormData] = useState({
        Course_no: "",
        Discipline: "",
        Course_desc: "",
        Credit_hrs: "",
        Course_type: "",
        SOS: "",
        SOS_DESC: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddCourse = async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.Course_no.trim() || !formData.Discipline.trim()) {
            alert("Please fill in the required fields.");
            return;
        }

        setLoading(true);

        // CLEAN DATA: This ensures the database validation passes
        const dataToSend = {
            Course_no: formData.Course_no.trim(),
            Discipline: formData.Discipline.trim(),
            Course_desc: formData.Course_desc.trim(),
            // Convert to integer so C# doesn't reject it as a string
            Credit_hrs: parseInt(formData.Credit_hrs) || 0, 
            Course_type: formData.Course_type.trim(),
            SOS: formData.SOS.trim(),
            SOS_DESC: formData.SOS_DESC.trim(),
            // Explicitly set null for fields not in form but in DB
            Elective_course: null,
            Old_SOS: null
        };

        try {
            const response = await DataService.post("/AdminCourse/AddCourse", dataToSend);
            
            if (response.status === 200) {
                alert("Success ✅: Course added successfully!");
                navigate(-1); 
            }
        } catch (error) {
            console.error("Detailed Error:", error);
            // Extracts the specific "Course already exists" or validation error from your Controller
            const errorMessage = error.response?.data?.Message || "Database validation failed. Check field lengths.";
            alert(`Error ❌: ${errorMessage}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.iconContainer}>
                    <span style={{ fontSize: "40px" }}>📖</span>
                </div>
                <h2 style={styles.title}>Add Course</h2>
            </div>

            <form onSubmit={handleAddCourse} style={styles.formCard}>
                <label style={styles.label}>Course Number</label>
                <input
                    name="Course_no"
                    style={styles.input}
                    placeholder="e.g. CS101"
                    value={formData.Course_no}
                    onChange={handleChange}
                />

                <div style={styles.row}>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <label style={styles.label}>Discipline</label>
                        <input
                            name="Discipline"
                            style={styles.input}
                            placeholder="e.g. CS"
                            value={formData.Discipline}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={styles.label}>Description</label>
                        <input
                            name="Course_desc"
                            style={styles.input}
                            placeholder="e.g. Intro to Prog"
                            value={formData.Course_desc}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <label style={styles.label}>Credit Hours</label>
                <input
                    name="Credit_hrs"
                    type="number"
                    style={styles.input}
                    placeholder="3"
                    value={formData.Credit_hrs}
                    onChange={handleChange}
                />

                <label style={styles.label}>Course Type</label>
                <input
                    name="Course_type"
                    style={styles.input}
                    placeholder="Core"
                    value={formData.Course_type}
                    onChange={handleChange}
                />

                <label style={styles.label}>SOS</label>
                <input
                    name="SOS"
                    style={styles.input}
                    placeholder="CS"
                    value={formData.SOS}
                    onChange={handleChange}
                />

                <label style={styles.label}>SOS Description</label>
                <input
                    name="SOS_DESC"
                    style={styles.input}
                    placeholder="Computer Science"
                    value={formData.SOS_DESC}
                    onChange={handleChange}
                />

                <button type="submit" style={styles.saveBtn} disabled={loading}>
                    {loading ? "Saving..." : "Save Course"}
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: { width:"90vw", backgroundColor: "#1A243A", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "40px" },
    header: { backgroundColor: "#7D58C1", width: "100%", padding: "40px 0", textAlign: "center", borderBottomLeftRadius: "35px", borderBottomRightRadius: "35px", marginBottom: "25px" },
    iconContainer: { backgroundColor: "#FFF", display: "inline-block", padding: "15px", borderRadius: "20px", marginBottom: "10px" },
    title: { color: "#FFF", margin: 0, fontWeight: "bold" },
    formCard: { backgroundColor: "#E6E6E6", width: "90%", maxWidth: "500px", borderRadius: "20px", padding: "25px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" },
    label: { display: "block", fontSize: "13px", fontWeight: "bold", color: "#1A243A", marginBottom: "6px" },
    input: { width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "10px", border: "1px solid #DDD", boxSizing: "border-box" },
    row: { display: "flex", justifyContent: "space-between" },
    saveBtn: { width: "100%", padding: "15px", backgroundColor: "#7D58C1", color: "#FFF", border: "none", borderRadius: "12px", fontSize: "18px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }
};

export default AddCourse;













































































































































































































































































































































































// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import DataService from "../../services/axios";


// // export default function AddCourseScreen() {
// //   const navigate = useNavigate();
// //   const [loading, setLoading] = useState(false);
// //   const [formData, setFormData] = useState({
// //     Course_no: "",
// //     Discipline: "",
// //     Course_desc: "",
// //     Credit_hrs: "",
// //     Course_type: "",
// //     SOS: "",
// //     SOS_DESC: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleAddCourse = async (e) => {
// //     e.preventDefault();

// //     if (Object.values(formData).some((val) => !val.trim())) {
// //       alert("Error: Please fill in all required fields.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       await DataService.post("/AdminCourse/AddCourse", formData);
// //       alert("Success : Course added successfully!");
// //       navigate(-1); 
// //     } catch (error) {
// //       console.error("Detailed Error:", error);
// //       alert(error.response?.data?.Message || "Failed to save.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.header}>
// //         <div style={styles.iconContainer}>📖</div>
// //         <h1 style={styles.title}>Add Course</h1>
// //       </div>

// //       <form style={styles.formCard} onSubmit={handleAddCourse}>
// //         <div style={styles.formGroup}>
// //           <label style={styles.label}>Course Number</label>
// //           <input style={styles.input} name="Course_no" value={formData.Course_no} onChange={handleChange} placeholder="e.g. COURSE-2024-001" />
// //         </div>

// //         <div style={styles.row}>
// //           <div style={{ ...styles.formGroup, flex: 1, marginRight: '10px' }}>
// //             <label style={styles.label}>Discipline</label>
// //             <input style={styles.input} name="Discipline" value={formData.Discipline} onChange={handleChange} placeholder="e.g. Computer Science" />
// //           </div>
// //           <div style={{ ...styles.formGroup, flex: 1 }}>
// //             <label style={styles.label}>Course Description</label>
// //             <input style={styles.input} name="Course_desc" value={formData.Course_desc} onChange={handleChange} placeholder="Description" />
// //           </div>
// //         </div>

// //         <div style={styles.formGroup}>
// //           <label style={styles.label}>Credit Hours</label>
// //           <input style={styles.input} type="number" name="Credit_hrs" value={formData.Credit_hrs} onChange={handleChange} placeholder="e.g. 3" />
// //         </div>

// //         <div style={styles.formGroup}>
// //           <label style={styles.label}>Course Type</label>
// //           <input style={styles.input} name="Course_type" value={formData.Course_type} onChange={handleChange} placeholder="e.g. Lecture or Lab" />
// //         </div>

// //         <div style={styles.formGroup}>
// //           <label style={styles.label}>SOS</label>
// //           <input style={styles.input} name="SOS" value={formData.SOS} onChange={handleChange} />
// //         </div>

// //         <div style={styles.formGroup}>
// //           <label style={styles.label}>SOS Description</label>
// //           <input style={styles.input} name="SOS_DESC" value={formData.SOS_DESC} onChange={handleChange} />
// //         </div>

// //         <button type="submit" style={styles.saveBtn} disabled={loading}>
// //           {loading ? "Saving..." : "Save Course"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // // Styles Object - Same as React Native StyleSheet
// // const styles = {
// //   container: { minHeight: '100vh', backgroundColor: '#1A243A', paddingBottom: '40px' },
// //   header: { backgroundColor: '#7D58C1', padding: '30px', textAlign: 'center', borderBottomLeftRadius: '35px', borderBottomRightRadius: '35px', marginBottom: '25px', color: 'white' },
// //   iconContainer: { backgroundColor: '#FFF', display: 'inline-block', padding: '15px', borderRadius: '50%', fontSize: '30px', marginBottom: '10px' },
// //   title: { color: '#FFF', fontSize: '24px', margin: 0 },
// //   formCard: { backgroundColor: '#E6E6E6', borderRadius: '20px', padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', maxWidth: '600px', margin: '0 auto' },
// //   label: { fontSize: '13px', fontWeight: 'bold', color: '#1A243A', marginBottom: '6px', display: 'block' },
// //   input: { backgroundColor: '#FFF', borderRadius: '10px', padding: '12px', border: '1px solid #DDD', width: '100%', boxSizing: 'border-box' },
// //   row: { display: 'flex', justifyContent: 'space-between' },
// //   formGroup: { marginBottom: '15px' },
// //   saveBtn: { backgroundColor: '#7D58C1', color: '#FFF', padding: '18px', borderRadius: '15px', border: 'none', width: '100%', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' },
// // };


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DataService from "../../services/axios"; // Utilizing DataService for integration

// const AddCourse = () => {


//   // UPDATED
// const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

//     const [formData, setFormData] = useState({
//         Course_no: "",
//         Discipline: "",
//         Course_desc: "",
//         Credit_hrs: "",
//         Course_type: "",
//         SOS: "",
//         SOS_DESC: ""
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleAddCourse = async (e) => {
//         e.preventDefault();

//         if (!formData.Course_no || !formData.Discipline) {
//             alert("Course Number and Discipline are required.");
//             return;
//         }

//         setLoading(true);

//         // Prepare data to match the SQL demo requirements
//         const dataToSend = {
//             ...formData,
//             // Ensure these are included even as null to avoid validation errors
//             Elective_course: null,
//             Old_SOS: null
//         };

//         try {
//             const response = await DataService.post("/AdminCourse/AddCourse", dataToSend);
            
//             if (response.status === 200) {
//                 alert("Success ✅: Course added successfully!");
//                 navigate(-1);
//             }
//         } catch (error) {
//             // Updated to show the specific DB error if you apply the C# fix below
//             const errorMessage = error.response?.data?.Message || "Database Validation Failed.";
//             alert(`Error ❌: ${errorMessage}`);
//             console.error("Validation Error Details:", error.response?.data);
//         } finally {
//             setLoading(false);
//         }
//     };

//   // OLDY GOLDY
//     // const navigate = useNavigate();
//     // const [loading, setLoading] = useState(false);

//     // // Form State matching the CRSMTR model
//     // const [formData, setFormData] = useState({
//     //     Course_no: "",
//     //     Discipline: "",
//     //     Course_desc: "",
//     //     Credit_hrs: "",
//     //     Course_type: "",
//     //     SOS: "",
//     //     SOS_DESC: ""
//     // });

//     // const handleChange = (e) => {
//     //     setFormData({ ...formData, [e.target.name]: e.target.value });
//     // };

//     // const handleAddCourse = async (e) => {
//     //     e.preventDefault();

//     //     // Validation logic
//     //     if (!formData.Course_no || !formData.Discipline || !formData.Course_desc) {
//     //         alert("Please fill in all required fields.");
//     //         return;
//     //     }

//     //     setLoading(true);
//     //     try {
//     //         // Using DataService to POST to AdminCourseController
//     //         const response = await DataService.post("/AdminCourse/AddCourse", formData);
            
//     //         if (response.status === 200) {
//     //             alert("Success ✅: Course added successfully!");
//     //             navigate(-1); // Go back like navigation.goBack()
//     //         }
//     //     } catch (error) {
//     //         console.error("Detailed Error:", error);
//     //         // Handling specific C# error responses like "Course already exists"
//     //         const errorMessage = error.response?.data?.Message || "Check your API connection.";
//     //         alert(`Error ❌: ${errorMessage}`);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

// //     const handleAddCourse = async (e) => {
// //     e.preventDefault(); // Prevents the page from reloading

// //     // 1. Validation (Same as your Native logic)
// //     if (!formData.Course_no.trim() || !formData.Discipline.trim()) {
// //         alert("Please fill in required fields.");
// //         return;
// //     }

// //     setLoading(true);

// //     // --- ADD dataToSend HERE ---
// //     const dataToSend = {
// //         Course_no: formData.Course_no.trim(),
// //         Discipline: formData.Discipline.trim(),
// //         Course_desc: formData.Course_desc.trim(),
// //         // CRITICAL: Convert string to Number for C# Model
// //         Credit_hrs: parseInt(formData.Credit_hrs) || 0, 
// //         Course_type: formData.Course_type.trim(),
// //         SOS: formData.SOS.trim(),
// //         SOS_DESC: formData.SOS_DESC.trim()
// //     };
// //     // ---------------------------

// //     try {
// //         // Use dataToSend instead of formData in the post call
// //         const response = await DataService.post("/AdminCourse/AddCourse", dataToSend);
        
// //         if (response.status === 200) {
// //             alert("Success ✅: Course added successfully!");
// //             navigate(-1);
// //         }
// //     } catch (error) {
// //         console.error("Detailed Error:", error);
// //         // This will now catch that DbEntityValidationException more gracefully
// //         const errorMessage = error.response?.data?.Message || "Check database constraints.";
// //         alert(`Error ❌: ${errorMessage}`);
// //     } finally {
// //         setLoading(false);
// //     }
// // };

//     return (
//         <div style={styles.container}>
//             <div style={styles.header}>
//                 <div style={styles.iconContainer}>
//                     <span style={{ fontSize: "40px" }}>📖</span>
//                 </div>
//                 <h2 style={styles.title}>Add Course</h2>
//             </div>

//             <form onSubmit={handleAddCourse} style={styles.formCard}>
//                 <label style={styles.label}>Course Number</label>
//                 <input
//                     name="Course_no"
//                     style={styles.input}
//                     placeholder="e.g. COURSE-2024-001"
//                     value={formData.Course_no}
//                     onChange={handleChange}
//                 />

//                 <div style={styles.row}>
//                     <div style={{ flex: 1, marginRight: "10px" }}>
//                         <label style={styles.label}>Discipline</label>
//                         <input
//                             name="Discipline"
//                             style={styles.input}
//                             placeholder="e.g. Computer Science"
//                             value={formData.Discipline}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div style={{ flex: 1 }}>
//                         <label style={styles.label}>Course Description</label>
//                         <input
//                             name="Course_desc"
//                             style={styles.input}
//                             placeholder="Description"
//                             value={formData.Course_desc}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>

//                 <label style={styles.label}>Credit Hours</label>
//                 <input
//                     name="Credit_hrs"
//                     type="number"
//                     style={styles.input}
//                     placeholder="e.g. 3"
//                     value={formData.Credit_hrs}
//                     onChange={handleChange}
//                 />

//                 <label style={styles.label}>Course Type</label>
//                 <input
//                     name="Course_type"
//                     style={styles.input}
//                     placeholder="e.g. Lecture or Lab"
//                     value={formData.Course_type}
//                     onChange={handleChange}
//                 />

//                 <label style={styles.label}>SOS</label>
//                 <input
//                     name="SOS"
//                     style={styles.input}
//                     placeholder="SOS"
//                     value={formData.SOS}
//                     onChange={handleChange}
//                 />

//                 <label style={styles.label}>SOS Description</label>
//                 <input
//                     name="SOS_DESC"
//                     style={styles.input}
//                     placeholder="SOS Description"
//                     value={formData.SOS_DESC}
//                     onChange={handleChange}
//                 />

//                 <button 
//                     type="submit" 
//                     style={styles.saveBtn} 
//                     disabled={loading}
//                 >
//                     {loading ? "Saving..." : "Save Course"}
//                 </button>
//             </form>
//         </div>
//     );
// };

// const styles = {
//     container: { 
//         backgroundColor: "#1A243A", 
//         minHeight: "100vh", 
//         display: "flex", 
//         flexDirection: "column", 
//         alignItems: "center",
//         paddingBottom: "40px" 
//     },
//     header: { 
//         backgroundColor: "#7D58C1", 
//         width: "100%", 
//         padding: "40px 0", 
//         textAlign: "center", 
//         borderBottomLeftRadius: "35px", 
//         borderBottomRightRadius: "35px", 
//         marginBottom: "25px" 
//     },
//     iconContainer: { 
//         backgroundColor: "#FFF", 
//         display: "inline-block", 
//         padding: "15px", 
//         borderRadius: "20px", 
//         marginBottom: "10px" 
//     },
//     title: { color: "#FFF", margin: 0, fontWeight: "bold" },
//     formCard: { 
//         backgroundColor: "#E6E6E6", 
//         width: "90%", 
//         maxWidth: "500px", 
//         borderRadius: "20px", 
//         padding: "25px", 
//         boxShadow: "0 4px 10px rgba(0,0,0,0.3)" 
//     },
//     label: { display: "block", fontSize: "13px", fontWeight: "bold", color: "#1A243A", marginBottom: "6px" },
//     input: { 
//         width: "100%", 
//         padding: "12px", 
//         marginBottom: "15px", 
//         borderRadius: "10px", 
//         border: "1px solid #DDD", 
//         boxSizing: "border-box" 
//     },
//     row: { display: "flex", justifyContent: "space-between" },
//     saveBtn: { 
//         width: "100%", 
//         padding: "15px", 
//         backgroundColor: "#7D58C1", 
//         color: "#FFF", 
//         border: "none", 
//         borderRadius: "12px", 
//         fontSize: "18px", 
//         fontWeight: "bold", 
//         cursor: "pointer",
//         marginTop: "10px" 
//     }
// };

// export default AddCourse;