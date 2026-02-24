function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Web Tasarımı ve Programlama</h1>
          <div style={styles.badge}>LAB-1</div>
        </header>
        
        <main style={styles.content}>
          <div style={styles.infoBox}>
            <p style={styles.label}>Öğrenci Bilgileri</p>
            <h2 style={styles.name}>[Abdullah Can Deliat]</h2>
            <p style={styles.studentId}>ID: [220542002]</p>
          </div>

          <div style={styles.statusBox}>
            <span style={styles.dot}></span>
            <p style={styles.statusText}>Vite + React + TypeScript Ortamı Hazır</p>
          </div>
        </main>

        <footer style={styles.footer}>
          <p>© 2024 Geliştirme Ortamı Kurulumu Başarıyla Tamamlandı</p>
        </footer>
      </div>
    </div>
  );
}

// Görünümü güzelleştiren stil objeleri
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    width: '400px',
    padding: '30px',
    textAlign: 'center',
  },
  header: {
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '20px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5rem',
    color: '#1a73e8',
    margin: 0,
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#e8f0fe',
    color: '#1a73e8',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  content: {
    textAlign: 'left',
  },
  infoBox: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  label: {
    fontSize: '0.75rem',
    color: '#70757a',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 0 5px 0',
  },
  name: {
    fontSize: '1.2rem',
    color: '#202124',
    margin: '0 0 5px 0',
  },
  studentId: {
    fontSize: '1rem',
    color: '#5f6368',
    margin: 0,
  },
  statusBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  dot: {
    width: '10px',
    height: '10px',
    backgroundColor: '#34a853',
    borderRadius: '50%',
    display: 'inline-block',
  },
  statusText: {
    fontSize: '0.9rem',
    color: '#34a853',
    margin: 0,
  },
  footer: {
    marginTop: '30px',
    fontSize: '0.7rem',
    color: '#9aa0a6',
  }
};

export default App;