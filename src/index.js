import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import CrimeDatasetApp from './Components/CrimeDatasetApp';
import TeamMembers from './Components/TeamMembers';
import ArticleSearch from './Components/SearchArticle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


reportWebVitals();
