  
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import './LiveNews.css'; // Import the CSS file
  
  const Cap = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(6); // Display only 6 news items initially
  
    const fetchNews = async () => {
      const apiKey = '9ae48c6933e74d86ab7c904cff6c31e3'; // Replace with your actual NewsAPI key
      const url = `https://newsapi.org/v2/everything?q=crime OR politics&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
  
      try {
        setLoading(true); // Start loading
        const response = await axios.get(url);
        if (response.status === 200 && response.data.articles.length > 0) {
          setArticles(response.data.articles);
          setVisible(6); // Reset visible count to 6 whenever news is fetched
        } else {
          setError('No news found for this query.');
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError('Unauthorized: Check your API key.');
        } else {
          setError('Error fetching the news. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchNews(); // Fetch news on component mount
    }, []);
  
    const showMoreNews = () => {
      setVisible((prevVisible) => Math.min(prevVisible + 6, articles.length)); // Show 6 more news items on click
    };
  
    const handleRefresh = () => {
      fetchNews(); // Fetch new news when button is clicked
    };
  
    if (loading) {
      return <div className="no-news">Loading news...</div>;
    }
  
    if (error) {
      return <div className="no-news">Error: {error}</div>;
    }
  
    return (
      <div className="latest-news">
        <h2 className="news-title">Crime and Political News from India</h2>
        <div className="news-container">
          <div className="news-card"> {/* Single card for all news */}
            <div className="grid-container"> {/* Added grid container */}
              {articles.slice(0, visible).map((article, index) => (
                <div key={index} className="grid-item">
                  <h3 className="news-card-title">{article.title}</h3>
                  <p className="news-card-description">{article.description}</p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="read-more-link"
                  >
                    Read more
                  </a>
                  <hr className="news-divider" /> {/* Added horizontal line */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="button-container">
        
          {visible < articles.length && (
            <button className="show-more" onClick={showMoreNews}>
              Show More
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default Cap;
  