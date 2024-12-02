// News.jsx
import React from 'react';

const News = ({ NewsData }) => {
  console.log("Received NewsData:", NewsData); // Debug line to check if data is coming correctly

  return (
    <section style={styles.latestNews}>
      <h2 style={styles.newsTitle}>Latest News on Laws</h2>
      <div style={styles.newsContainer}>
        {NewsData && NewsData.length > 0 ? (
          NewsData.map((news, index) => (
            <div key={index} style={styles.newsCard}>
              <h3 style={styles.newsCardTitle}>{news.title}</h3>
              <p style={styles.newsCardDescription}>{news.description}</p>
              <a
                href={news.link}
                style={styles.readMoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          ))
        ) : (
          <p style={styles.noNews}>No news available at the moment.</p>
        )}
      </div>
    </section>
  );
};

const styles = {
  latestNews: {
    backgroundColor: '#d2e0fc',
    backgroundImage:
      'radial-gradient(at 47% 33%, hsl(274.78, 93%, 35%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(280.54, 79%, 77%) 0, transparent 55%)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '1000px',
  },
  newsTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  newsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  newsCard: {
    backdropFilter: 'blur(5px) saturate(141%)',
    WebkitBackdropFilter: 'blur(5px) saturate(141%)',
    backgroundColor: 'rgba(17, 25, 40, 0.38)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    color: '#fff',
  },
  newsCardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  newsCardDescription: {
    fontSize: '1rem',
    color: '#ccc',
    marginBottom: '15px',
  },
  readMoreLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  noNews: {
    textAlign: 'center',
    fontSize: '1rem',
    color: '#888',
  },
};

export default News;
