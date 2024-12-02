const NewLaws = () => {
  const laws = [
    { title: 'Digital Privacy Act', description: 'Ensures better control over personal data and stricter penalties for breaches.' },
    { title: 'Environmental Protection Bill', description: 'Aims to curb industrial emissions and promote renewable energy.' },
    { title: 'Equal Pay Act', description: 'Mandates equal pay for equal work across all genders and sectors.' },
  ];

  return (
    <section style={styles.newLaws}>
      <h2 style={styles.newLawsTitle}>Newly Added Laws</h2>
      <div style={styles.lawCards}>
        {laws.map((law, index) => (
          <div key={index} style={styles.lawCard}>
            <h3 style={styles.lawCardTitle}>{law.title}</h3>
            <p style={styles.lawCardText}>{law.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  newLaws: {
    backgroundColor: '#f5f5f5',
    padding: '40px',
    textAlign: 'center',
  },
  newLawsTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  lawCards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  lawCard: {
    flex: '0 1 30%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  lawCardTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#0072ff', // Blue for law card titles
  },
  lawCardText: {
    fontSize: '16px',
    color: '#555',
  },
};

export default NewLaws;
