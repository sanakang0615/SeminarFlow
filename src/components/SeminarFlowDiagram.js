// src/SeminarFlowDiagram.js
import React, { useState } from 'react';
import ContentDividers from './ContentDividers';

const SeminarFlowDiagram = () => {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  // Function to show tooltip
  const showTooltip = (e, text, cx, cy) => {
      const svgRect = e.target.nearestViewportElement.getBoundingClientRect();
      setTooltip({
          visible: true,
          text: text,
          x: svgRect.left + cx - window.scrollX,
          y: svgRect.top + cy + 20 - window.scrollY
      });
  };

  // Function to hide tooltip
  const hideTooltip = () => {
      setTooltip({ visible: false });
  };

  // Function to toggle tooltip on click
  const toggleTooltip = (e, text, cx, cy) => {
      if (tooltip.visible) {
          hideTooltip();
      } else {
          showTooltip(e, text, cx, cy);
      }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[800px] h-[700px] p-10 bg-white shadow-2xl rounded-lg">
        <svg viewBox="0 0 800 720" className="w-full h-auto"> {/* Increased height in viewBox */}
          
          <g transform="translate(0, 700)"> {/* Adjust this to position time scale within new layout */}
            {[...Array(10)].map((_, i) => (
              <g key={i} transform={`translate(${100 + i * 66.6}, 0)`}>
              {/* Move line above the text by adjusting y1 and y2 up */}
              <line x1="0" y1="-20" x2="0" y2="-10" stroke="#111827" strokeWidth="1" />
            
              {/* Move text below the line by adjusting y down */}
              <text x="0" y="3" textAnchor="middle" fontSize="10" fill="#111827">
                {`${i * 5}`}m
              </text>
            </g>
            ))}
          </g>
          {/* Lines */}
          <g>
            <text x="65" y="55" fill="black" textAnchor="end" fontSize="16">Page 03</text>
            <line x1="100" y1="50" x2="700" y2="50" stroke="black" strokeWidth="2" />
          </g>
          <g>
            <text x="65" y="155" fill="black" textAnchor="end" fontSize="16">Page 05</text>
            <line x1="100" y1="150" x2="700" y2="150" stroke="black" strokeWidth="2" />
          </g>
          <g>
            <text x="65" y="255" fill="black" textAnchor="end" fontSize="16">Page 09</text>
            <line x1="100" y1="250" x2="700" y2="250" stroke="black" strokeWidth="2" />
          </g>
          <g>
            <text x="65" y="355" fill="black" textAnchor="end" fontSize="16">Page 10</text>
            <line x1="100" y1="350" x2="700" y2="350" stroke="black" strokeWidth="2" />
          </g>
          <g>
            <text x="65" y="455" fill="black" textAnchor="end" fontSize="16">Page 13</text>
            <line x1="100" y1="450" x2="700" y2="450" stroke="black" strokeWidth="2" />
          </g>
          <g>
            <text x="65" y="555" fill="black" textAnchor="end" fontSize="16">Page 14</text>
            <line x1="100" y1="550" x2="700" y2="550" stroke="black" strokeWidth="2" />
          </g>
          <g>
            <text x="65" y="655" fill="black" textAnchor="end" fontSize="16">Page 18</text>
            <line x1="100" y1="650" x2="700" y2="650" stroke="black" strokeWidth="2" />
          </g>
          
          <path d="M 100 50 C 150 50, 150 150, 200 150" stroke="black" strokeWidth="2" fill="none" className="line-animation"/>
          <path d="M 270 250 C 300 250, 330 350, 360 350" stroke="black" strokeWidth="2" fill="none" className="line-animation" />
          <path d="M 480 450 A 20 20 0 0 1 520 450" stroke="black" strokeWidth="2" fill="none" className="line-animation"/>
          <path d="M 400 350 C 430 350, 430 150, 500 150" stroke="black" strokeWidth="2" fill="none" className="line-animation" />
          <path d="M 520 450 C 545 450, 565 550, 570 550" stroke="black" strokeWidth="2" fill="none" className="line-animation" />
          <path d="M 520 450 C 600 450, 680 600, 700 650" stroke="black" strokeWidth="2" fill="none" className="line-animation" />
          <path d="M 200 150 A 20 20 0 0 1 310 150" stroke="black" strokeWidth="2" fill="none" className="line-animation"/>
          <path d="M 570 550 A 20 20 0 0 1 620 550" stroke="black" strokeWidth="2" fill="none" className="line-animation"/>

          
          {/* Circles */}
          <circle cx="100" cy="50" r="10" fill="#99ccff"
            onMouseEnter={(e) => showTooltip(e, 'Page 1 Start', 100, 50)} 
            onMouseLeave={hideTooltip}
            onClick={(e) => toggleTooltip(e, 'Page 1 Start', 100, 50)}
            className="circle-animation"
          />
          <circle cx="200" cy="150" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="310" cy="150" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="270" cy="250" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="340" cy="250" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="360" cy="350" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="400" cy="350" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="500" cy="150" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="480" cy="450" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="520" cy="450" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="570" cy="550" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="595" cy="550" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="620" cy="550" r="10" fill="#99ccff" className="circle-animation"/>
          <circle cx="700" cy="650" r="10" fill="#99ccff" className="circle-animation"/>

          </svg>
        
        {tooltip.visible && (
        <div 
          className="absolute"
          style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
        >
          <ContentDividers
            item={{
              id: 1,
              details: [
                { label: '슬라이드 번호', value: '3' },
                { label: '슬라이드 주제', value: 'Research Questions' },
                { label: '질문한 사람', value: 'Anonymous 3' },
                { label: '질문 내용', value: '이 실험에서 Treatment Group과 Control Group의 차이는 이 새로운 기능을 사용했는지의 여부인가요?' },
                { label: '연관 질문', value: '이 질문에 대한 답변에 기반하여 두 번째 질문이 제기됩니다.' },
                { label: '연관 이유', value: '이 질문은 본 연구의 실험세팅에서 Treatment와 Control Group간의 차이를 명확히 하기 위해 제기되었습니다. 이 질문에 대한 답변을 통해 청중은 이 답변을 통해 청중은 Treatment Group이 어플리케이션의 새로운 기능을 사용할 수 있었을 뿐만 아니라 기존의 모든 기능 또한 사용할 수 있었음을 알게 됩니다. 따라서 이 답변에 바로 이어서 두 번째 질문이 나오게 되었습니다. Treatment Group이 기존 기능과 새로운 기능을 모두 사용할 수 있었다는 점을 강조하며, 이에 따라 이 새로운 기능의 수용률(acceptance rate)을 확인할 필요성을 제기합니다. 이는 Treatment Group이 새로운 기능을 얼마나 수용하고 실제로 사용했는지를 평가하기 위한 중요한 지표가 될 수 있습니다.' }
              ]
            }}
            {...tooltip.question}
          />
                  </div>
      )}
      </div>
    </div>
  );
};

export default SeminarFlowDiagram;