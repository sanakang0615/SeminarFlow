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
          <Route path="/" element={<Layout component={<LandingComponent />} buttonText="분석 시작하기" buttonLink="/question"/>} />
          <Route
            path="/question"
            element={
              <Layout
              component={
                <>
                  <Status
                    textHead="질의응답 톺아보기"
                    textBody={
                      <div className='image-text-container' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '40px'}}>
                        <img src={ImageClova} alt="" style={{ marginRight: "5px" }} />
                        <text> 그리고 </text>
                        <img src={ImageGpt} style={{ marginLeft: "5px", marginRight: "5px" }} alt="" />
                        <text>를 사용하여 세미나에서 나왔던 모든 질문과 답변을 시간 순서대로 정리하였습니다.</text>
                      </div>
                      }
                  />
                  <QuestionCard/>
                </>
                }
               buttonText="다이어그램으로 확인하기"
               buttonLink="/diagram"
              />
              } />
          <Route path="/diagram" element={<Layout component={<><Status
                    textHead="나의 세미나 플로우"
                    textBody={
                      <div className='image-text-container' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '40px'}}>
                        <img src={ImageGpt} style={{ marginLeft: "5px", marginRight: "5px" }} alt="" />
                        <text >를 사용하여 여러 질문이 서로 어떠한 관계를 가지고 있는지 다이어그램으로 나타내 보았습니다.</text>
                      </div>
                      }
                  /><SeminarFlowDiagram/></>}></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
