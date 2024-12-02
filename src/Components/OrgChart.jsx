import React, { useEffect } from 'react';

const OrgChart = () => {
  useEffect(() => {
    addHoverEffect();
  }, []);

  return (
    <div style={styles.flowchart}>
      <div style={styles.constitution}>The Constitution</div>

      <Section title="Legislative" colorClass="legislative">
        <Card title="President" />
        <Card title="Parliament">
          <NestedSection>
            <Card title="Rajya Sabha" />
            <Card title="Lok Sabha" />
          </NestedSection>
        </Card>
      </Section>

      <Section title="Executive" colorClass="executive">
        <Card title="Prime Minister and the Council of Ministers" />
      </Section>

      <Section title="Judicial" colorClass="judicial">
        <Card title="Supreme Court">
          <NestedSection>
            <Card title="High Courts in the States" />
            <Card title="District Court" />
          </NestedSection>
        </Card>
      </Section>
    </div>
  );
};

const Section = ({ title, colorClass, children }) => (
  <div style={{ ...styles.section }}>
    <div
      style={{
        ...styles.sectionTitle,
        backgroundColor: styles[colorClass].backgroundColor,
      }}
    >
      {title}
    </div>
    <div style={styles.subSection}>{children}</div>
  </div>
);

const Card = ({ title, children }) => (
  <div style={styles.card}>
    <div>{title}</div>
    {children && <div style={styles.nestedSection}>{children}</div>}
  </div>
);

const NestedSection = ({ children }) => (
  <div style={styles.nestedSection}>{children}</div>
);

const styles = {
  flowchart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Roboto', sans-serif",
    gap: '20px',
    backgroundColor: '#000', // Background set to black
    padding: '20px',
    color: 'white', // Adjust text color to contrast with the black background
  },
  constitution: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '15px 30px',
    marginBottom: '30px',
    fontSize: '1.8em',
    fontWeight: 'bold',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
  },
  sectionTitle: {
    color: 'white',
    padding: '12px 20px',
    fontSize: '1.5em',
    fontWeight: 'bold',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    width: 'fit-content',
  },
  subSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    color: '#333',
    padding: '10px 20px',
    fontSize: '1.1em',
    borderRadius: '8px',
    textAlign: 'center',
    width: 'fit-content',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  nestedSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  legislative: {
    backgroundColor: '#e74c3c',
  },
  executive: {
    backgroundColor: '#3498db',
  },
  judicial: {
    backgroundColor: '#2ecc71',
  },
};

// Add hover styles dynamically
const addHoverEffect = () => {
  const cards = document.querySelectorAll('[style*="card"]');
  cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
  });
};

export default OrgChart;
