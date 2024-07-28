import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingComponent from './components/LandingComponent';
import SeminarFlowDiagram from './components/SeminarFlowDiagram';
import QuestionCard from './components/QuestionCard';
import Layout from './components/Layout';
import Status from './components/Status'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><LandingComponent /></Layout>} />
          <Route path="/question" element={<Layout><Status textHead="질의응답 톺아보기." textBody="Body"/><QuestionCard/></Layout>} />
          <Route path="/diagram" element={<Layout><SeminarFlowDiagram/></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
