import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

export default function AddStudentScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [routes, setRoutes] = useState([]);

  // Consolidated State
  const [formData, setFormData] = useState({
    regNo: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    Section: "",
    selectedRoute: "",
    startDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD format for web
    endDate: new Date().toISOString().split('T')[0],
    parentCnic: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
  });

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const response = await DataService.get("/AdminRouteStop/GetRoutes");
      setRoutes(response.data);
    } catch (error) {
      console.error("Route Fetch Error:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.regNo || !formData.firstName || !formData.selectedRoute || !formData.parentCnic) {
      alert("Please fill essential fields (Reg No, Name, Route, Parent CNIC)");
      return;
    }

    setLoading(true);

    const payload = {
      reg_no: formData.regNo,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      Section: formData.Section,
      route_id: parseInt(formData.selectedRoute),
      pass_start_date: formData.startDate,
      pass_end_date: formData.endDate,
      parent_cnic: formData.parentCnic,
      parent_name: formData.parentName,
      parent_email: formData.parentEmail,
      parent_phone: formData.parentPhone,
    };

    try {
      await DataService.post("/AdminStudent/AddStudent", payload);
      alert("Success ✅: Student and Parent records created successfully!");
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.Message || "Failed to save. Check server connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Add New Student</h1>
      </div>

      <form onSubmit={handleAddStudent} style={styles.scrollContent}>
        {/* STUDENT SECTION */}
        <div style={styles.sectionCard}>
          <h3 style={styles.sectionTitle}>🎓 Student Details</h3>
          <input style={styles.input} name="regNo" placeholder="Registration No (e.g. 21-Arid-123)" value={formData.regNo} onChange={handleInputChange} />
          <div style={styles.row}>
            <input style={{...styles.input, flex: 1, marginRight: '5px'}} name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
            <input style={{...styles.input, flex: 1}} name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
          </div>
          <input style={styles.input} name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
          <input style={styles.input} name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
          <input style={styles.input} name="Section" placeholder="Enter Section" value={formData.Section} onChange={handleInputChange} />
        </div>

        {/* TRANSPORT SECTION */}
        <div style={styles.sectionCard}>
          <h3 style={styles.sectionTitle}>🚌 Transport & Pass</h3>
          <label style={styles.label}>Assigned Route</label>
          <select style={styles.select} name="selectedRoute" value={formData.selectedRoute} onChange={handleInputChange}>
            <option value="">Select Route</option>
            {routes.map(r => <option key={r.route_id} value={r.route_id}>{r.route_name}</option>)}
          </select>

          <div style={styles.row}>
            <div style={{flex: 1, marginRight: '5px'}}>
              <label style={styles.label}>Pass Start</label>
              <input style={styles.input} name="startDate" type="date" value={formData.startDate} onChange={handleInputChange} />
            </div>
            <div style={{flex: 1}}>
              <label style={styles.label}>Pass End</label>
              <input style={styles.input} name="endDate" type="date" value={formData.endDate} onChange={handleInputChange} />
            </div>
          </div>
        </div>

        {/* PARENT SECTION */}
        <div style={styles.sectionCard}>
          <h3 style={styles.sectionTitle}>👨‍👩‍👦 Parent Details</h3>
          <input style={styles.input} name="parentCnic" placeholder="Parent CNIC (Unique ID)" value={formData.parentCnic} onChange={handleInputChange} />
          <input style={styles.input} name="parentName" placeholder="Parent Full Name" value={formData.parentName} onChange={handleInputChange} />
          <input style={styles.input} name="parentEmail" type="email" placeholder="Parent Email" value={formData.parentEmail} onChange={handleInputChange} />
          <input style={styles.input} name="parentPhone" type="tel" placeholder="Parent Phone" value={formData.parentPhone} onChange={handleInputChange} />
        </div>

        <button type="submit" style={styles.saveBtn} disabled={loading}>
          {loading ? "Saving..." : "Save Student Record"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#1A243A', paddingBottom: '40px' },
  header: { padding: '30px', backgroundColor: '#7A60E0', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', marginBottom: '20px' },
  title: { color: '#FFF', fontSize: '24px', fontWeight: 'bold', textAlign: 'center', margin: 0 },
  scrollContent: { maxWidth: '600px', margin: '0 auto', padding: '0 20px' },
  sectionCard: { backgroundColor: '#FFF', borderRadius: '15px', padding: '20px', marginBottom: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  sectionTitle: { fontSize: '18px', fontWeight: 'bold', color: '#7A60E0', marginBottom: '15px', marginTop: 0 },
  label: { fontSize: '12px', color: '#666', marginBottom: '5px', display: 'block' },
  input: { backgroundColor: '#F5F6FA', borderRadius: '10px', padding: '12px', marginBottom: '12px', border: '1px solid #DDD', width: '100%', boxSizing: 'border-box' },
  select: { backgroundColor: '#F5F6FA', borderRadius: '10px', padding: '12px', marginBottom: '15px', border: '1px solid #DDD', width: '100%' },
  row: { display: 'flex', justifyContent: 'space-between' },
  saveBtn: { backgroundColor: '#7A60E0', width: '100%', padding: '18px', borderRadius: '15px', border: 'none', color: '#FFF', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
};



















// import React from "react";

// function AddNewStudent() {
//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundColor: "#1A243A",
//     paddingBottom: "40px",
//     position: "relative",
//     boxSizing: "border-box",
//     overflowY: "auto",
//   };

//   const adminContainerStyle = {
//     position: "absolute",
//     top: "20px",
//     right: "20px",
//     alignItems: "center",
//     zIndex: 10,
//     display: "flex",
//     flexDirection: "column",
//   };

//   const adminIconStyle = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//   };

//   const adminTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "12px",
//     marginTop: "4px",
//   };

//   const avatarContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: "100px",
//     marginBottom: "30px",
//   };

//   const avatarCircleStyle = {
//     width: "160px",
//     height: "160px",
//     borderRadius: "80px",
//     backgroundColor: "#9C8CF0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const avatarImageStyle = {
//     width: "80px",
//     height: "80px",
//     filter: "brightness(0.55)", // equivalent to tintColor
//   };

//   const titleStyle = {
//     color: "#FFFFFF",
//     fontSize: "22px",
//     fontWeight: "bold",
//     marginTop: "16px",
//   };

//   const formSectionStyle = {
//     padding: "0 30px",
//   };

//   const inputStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "15px",
//     marginBottom: "16px",
//     fontSize: "16px",
//     width: "100%",
//     boxSizing: "border-box",
//     border: "none",
//     outline: "none",
//   };

//   const labelStyle = {
//     color: "#FFFFFF",
//     fontSize: "16px",
//     marginBottom: "8px",
//     marginTop: "10px",
//   };

//   const dateRowStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "16px",
//   };

//   const dateInputStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "12px",
//     width: "30%",
//     textAlign: "center",
//     border: "none",
//     outline: "none",
//   };

//   const dropdownStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "15px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "24px",
//     cursor: "pointer",
//   };

//   const dropdownTextStyle = {
//     fontSize: "16px",
//     color: "#000",
//   };

//   const dropdownArrowStyle = {
//     fontSize: "14px",
//     color: "#555",
//   };

//   const saveButtonStyle = {
//     backgroundColor: "#7A60E0",
//     borderRadius: "10px",
//     padding: "10px",
//     marginBottom: "12px",
//     fontSize: "18px",
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     border: "none",
//     cursor: "pointer",
//     width: "100%",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Admin Profile Top Right */}
//       <div style={adminContainerStyle}>
//         <img
//           src={require("../../assets/images/UserL.png")}
//           alt="Admin"
//           style={adminIconStyle}
//         />
//         <div style={adminTextStyle}>Admin</div>
//       </div>

//       {/* Main Avatar */}
//       <div style={avatarContainerStyle}>
//         <div style={avatarCircleStyle}>
//           <img
//             src={require("../../assets/images/UserL.png")}
//             alt="Student Avatar"
//             style={avatarImageStyle}
//           />
//         </div>
//         <div style={titleStyle}>Add new Student</div>
//       </div>

//       {/* Form Section */}
//       <div style={formSectionStyle}>
//         <div style={dropdownStyle}>
//           <div style={dropdownTextStyle}>Student</div>
//           <div style={dropdownArrowStyle}>▼</div>
//         </div>

//         <div style={dropdownStyle}>
//           <div style={dropdownTextStyle}>Status</div>
//           <div style={dropdownArrowStyle}>▼</div>
//         </div>

//         <input type="text" placeholder="Enter Parents Name" style={inputStyle} />
//         <input type="text" placeholder="Rollno" style={inputStyle} />
//         <input type="text" placeholder="Department" style={inputStyle} />

//         <div style={labelStyle}>Pass Expiry date</div>
//         <div style={dateRowStyle}>
//           <input type="text" placeholder="DD" style={dateInputStyle} />
//           <input type="text" placeholder="MM" style={dateInputStyle} />
//           <input type="text" placeholder="YYYY" style={dateInputStyle} />
//         </div>

//         <input type="number" placeholder="max tickets" style={inputStyle} />

//         {/* Save Button */}
//         <button style={saveButtonStyle}>Add</button>
//       </div>
//     </div>
//   );
// }

// export default AddNewStudent;

