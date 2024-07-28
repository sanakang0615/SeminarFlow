import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingComponent from './components/LandingComponent';
import SeminarFlowDiagram from './components/SeminarFlowDiagram';
import QuestionCard from './components/QuestionCard';
import Layout from './components/Layout';
import Status from './components/Status'
import ImageGpt from './assets/gpt.webp'
import ImageClova from './assets/clova.png'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><LandingComponent /></Layout>} />
          <Route
            path="/question"
            element={
              <Layout>
                <Status
                  textHead="질의응답 톺아보기."
                  textBody={
                    <div className='image-text-container' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '10px'}}>
                      <img src={ImageClova} alt="" style={{ marginRight: "5px" }} />
                      <text> 그리고 </text>
                      <img src={ImageGpt} style={{ marginLeft: "5px", marginRight: "5px" }} alt="" />
                      <text>를 사용하여 세미나에서 나왔던 모든 질문과 답변을 시간 순서대로 정리하였습니다.</text>
                    </div>
                    }
                />
                <QuestionCard/>
              </Layout>} />
          <Route path="/diagram" element={<Layout><SeminarFlowDiagram/></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
