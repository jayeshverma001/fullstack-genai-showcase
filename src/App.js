import React, { useState } from 'react';
import './App.css';

const projects = [
  { id: 1, name: "AI-Powered Assistant" },
  { id: 2, name: "Document Summarizer" },
  { id: 3, name: "E-commerce Recommender" },
  { id: 4, name: "Image Caption Generator" },
  { id: 5, name: "Voice-to-Text AI" },
  { id: 6, name: "Text-to-Image Generator" },
  { id: 7, name: "Chatbot for Support" },
  { id: 8, name: "PDF Summarizer" },
  { id: 9, name: "Resume Ranker" },
  { id: 10, name: "Portfolio Analyzer" }
];

const PROJECTS_PER_PAGE = 4;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="left-section">
          <a href="#" className="home-link">🏠 <strong>Home</strong></a>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
            />
            <button>🔍</button>
          </div>
        </div>
        <div className="right-section">
          <h1 className="title">MY AI Projects</h1>
        </div>
      </header>

      {/* Tiles Section */}
      <main className="tiles-container">
        {currentProjects.map(project => (
          <div key={project.id} className="tile">
            {project.name}
          </div>
        ))}
      </main>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>⬅ Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next ➡</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2025 Your Name – AI Developer | 
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"> LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
