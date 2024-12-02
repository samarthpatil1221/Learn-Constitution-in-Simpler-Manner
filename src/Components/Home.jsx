import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewLaws from './NewLaws';
import News from './News';
import NewsData from './NewsData';
import Cap from './Cap';
import Papa from 'papaparse';
import xyzCsv from './article.csv';


// Header Component
const Header = ({ onAboutClick, onMoreClick }) => {
  return (
    <header style={styles.header}>
      
      <div style={styles.navContainer}>
        <div style={styles.logoContainer}>
<h1 style={styles.logo}>📜Learn Constutution</h1>
        </div>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
          />
        </div>
        <nav style={styles.nav}>
          <div style={styles.navItem}>
            <a href="/" style={styles.navLink}>Home</a>
          </div>
          <div style={styles.navItem}>
            <button style={styles.navLink} onClick={onAboutClick}>
              About
            </button>
          </div>
          <div style={styles.navItem}>
            <button style={styles.navLink} onClick={onMoreClick}>
              More
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Let's Learn Constitution. All rights reserved.</p>
      <div style={styles.socialIcons}>
        <a href="#" style={styles.socialIcon}><i className="fab fa-facebook"></i></a>
        <a href="#" style={styles.socialIcon}><i className="fab fa-twitter"></i></a>
        <a href="#" style={styles.socialIcon}><i className="fab fa-instagram"></i></a>
      </div>
      <p style={styles.footerText}>"If any data appears incorrect or sensitive, please contact us at sampatil1221@gmail.com for further assistance, and we'll address the issue promptly."</p>

    </footer>
  );
};

// Home Page Component
const Home = () => {
  const [isLearnHovered, setIsLearnHovered] = useState(false);
  const [isQuizHovered, setIsQuizHovered] = useState(false);
  const navigate = useNavigate();
  

  const handleAboutClick = () => {
    navigate('/teammembers');
  };

  const handleMoreClick = () => {
    navigate('/orgchart');
  };

  return (
    <div style={styles.container}>
      <Header onAboutClick={handleAboutClick} onMoreClick={handleMoreClick} />
      <main style={styles.main}>
        <section style={styles.content}>
          <div
            style={{
              ...styles.fullScreenCardLearn,
              ...(isLearnHovered ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setIsLearnHovered(true)}
            onMouseLeave={() => setIsLearnHovered(false)}
          >
            <h2 style={styles.cardTitle}>Learn Articles</h2>
            <p style={styles.text}>
              Explore the fundamental principles of the Constitution. Learn about your rights, civic duties, and government.
            </p>
            <button style={styles.ctaButton}
            onClick={() => navigate('/CrimedatasetApp')}

            >Explore Articles</button>
          </div>
          <div
            style={{
              ...styles.fullScreenCardQuiz,
              ...(isQuizHovered ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setIsQuizHovered(true)}
            onMouseLeave={() => setIsQuizHovered(false)}
          >
            <h2 style={styles.cardTitle}>Take a Quiz</h2>
            <p style={styles.text}>
              Test your knowledge of the Constitution with interactive quizzes. Challenge yourself and improve your understanding.
            </p>
            <button
              style={styles.ctaButton}
              onClick={() => navigate('/quiz')}
            >
              Start Quiz
            </button>
          </div>
        </section>
        <Cap />
        <NewLaws />
      </main>
      <Footer />
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    fontFamily: "'Roboto', sans-serif",
    background: '#f9f9f9',
    color: '#333',
  },
  header: {
    backgroundColor: '#212529',
    color: 'white',
    padding: '10px 20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1,
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffcc00',
    marginBottom:'10px',
    marginLeft: '-100px',
  },
  searchContainer: {
    flex: 2,
    textAlign: 'center',
  },
  searchInput: {
    padding: '10px',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    width: '60%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  nav: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s, background 0.3s',
  },
  content: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    boxSizing: 'border-box',
    marginTop: '80px',
    marginBottom: '40px',
  },
  fullScreenCardLearn: {
    flex: '0 1 48%',
    minHeight: '400px',
    padding: '30px',
    background: 'linear-gradient(135deg, #0072ff, #00c6ff)',
    color: '#fff',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '700px',
  },
  fullScreenCardQuiz: {
    flex: '0 1 48%',
    minHeight: '400px',
    padding: '30px',
    background: 'linear-gradient(135deg, #ff512f, #dd2476)',
    color: '#fff',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '700px',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
  },
  ctaButton: {
    background: '#fff',
    color: '#0072ff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background 0.3s, color 0.3s',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#212529',
    color: 'white',
  },
  socialIcons: {
    marginTop: '10px',
  },
  socialIcon: {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none',
  },
};

export default Home;
