import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import './Searcharticle.css'; // Import the CSS file

const ArticleSearch = () => {
  const [articleId, setArticleId] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [jsonData, setJsonData] = useState([]);

  // Function to fetch and parse JSON data
  const fetchData = async () => {
    try {
      const response = await fetch('/art.json'); // Fetch from the public folder
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  // Debounced search function
  const handleSearch = debounce(() => {
    const searchQuery = articleId.trim().toLowerCase();
    const article = jsonData.find((item) => {
      const articleText = String(item.article || '');
      return articleText.trim().toLowerCase().includes(searchQuery);
    });

    if (article) {
      setArticleDescription(`Title: ${article.title}\nDescription: ${article.description}`);
    } else {
      setArticleDescription('Article not found');
    }
  }, 300);

  // Function to trigger search on Enter key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="article-search-container">
      <h1 className="heading">Article Search</h1>
      <div className="search-bar">
        <input
          type="text"
          value={articleId}
          onChange={(e) => setArticleId(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for the Enter key
          placeholder="Enter Article ID (e.g., 1 or 1A)"
          className="search-input"
        />
      </div>
      <div className="article-description">
        <h3>Article Description:</h3>
        <pre>{articleDescription}</pre>
      </div>
    </div>
  );
};

export default ArticleSearch;
