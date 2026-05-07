
import React from 'react';

function StudentTransportStatusScreen() {
  const students = [
    { id: 1, name: "Qasim Mumtaz", course: "CS102", section: "A", boarded: false },
    { id: 2, name: "Jameel Ahmed", course: "CS102", section: "B", boarded: false },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Transport Status</h2>
      <p style={styles.subtitle}>Today's Boarding Activity</p>

      {students.map((student) => (
        <div key={student.id} style={styles.studentCard}>
          <div style={styles.courseHeader}>{student.course} - Section {student.section}</div>
          <div style={styles.studentRow}>
            <span>{student.name}</span>
            <span style={styles.status}>
              {student.boarded ? "Boarded ✓" : "Not Boarded ❌"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh',minWidth:"100vw", backgroundColor: '#26A69A', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  title: { color: '#FFF', fontSize: '22px', fontWeight: 'bold' },
  subtitle: { color: '#FFF', marginBottom: '20px' },
  studentCard: { backgroundColor: '#FFF', width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '15px', marginBottom: '15px' },
  courseHeader: { fontSize: '16px', fontWeight: 'bold', textAlign: 'center', borderBottom: '1px solid #EEE', paddingBottom: '10px', marginBottom: '10px' },
  studentRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  status: { color: '#D32F2F', fontWeight: 'bold' } // Red for not boarded
};

export default StudentTransportStatusScreen;
