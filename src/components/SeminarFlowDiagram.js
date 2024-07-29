// src/SeminarFlowDiagram.js
import React, { useState } from 'react';
import ContentDividers from './ContentDividers';
import Modal from './Modal';

const SeminarFlowDiagram = () => {
  const data = [
    {
      index: 1,
      details: [
        { label: '질문 순서', value: '1'},
        { label: '슬라이드 주제', value: 'Research Design' },
        { label: '질문한 사람', value: 'Anonymous' },
        { label: '질문 내용', value: '이 실험에서 종속변수는 무엇인가요?' },
      ]
    },
    {
      index: 2,
      details: [
        { label: '질문 순서', value: '2'},
        { label: '슬라이드 주제', value: 'Research Design' },
        { label: '질문한 사람', value: 'Anonymous' },
        { label: '질문 내용', value: '실험에서 Treatment group과 Control group의 차이는 Poly라는 새로운 기능을 제공했는지 안했는지의 여부인 것인가요?' },
      ]
    },
    {
      index: 3,
      details: [
        { label: '질문 순서', value: '3'},
        { label: '슬라이드 주제', value: 'Robustness Check' },
        { label: '질문한 사람', value: 'Anonymous' },
        { label: '질문 내용', value: 'Treatment Group가 앱의 기존 기능도 쓸 수 있었기 때문에, 새로 도입된 기능인 Poly에 대한 acceptance rate에 대한 값을 확인해 보아야 하는 것 아닌가요?' },
        { label: '연관 질문', value: '2'},
        { label: '연관 이유', value: '2번 질문 내용인 Treatment Group과 Control Group의 차이점이 Poly 기능의 존재 여부인지를 묻는 내용과 연관되어있습니다. 기능이 단순히 추가된 것과 사용자들이 실제로 그 기능을 사용하였는지의 여부는 차이가 있을 수 있기에 이 내용에 대한 추가적인 질문으로 이어지게 됩니다.' }
      ]
    },
    {
      index: 4,
      details: [
        { label: '질문 순서', value: '4'},
        { label: '슬라이드 주제', value: 'Robustness Check' },
        { label: '질문한 사람', value: 'Anonymous' },
        { label: '질문 내용', value: 'Community 기능으로 인한 spillover을 걱정해야 할 필요가 있을까요?' },
      ]
    },
    {
      index: 5,
      details: [
        { label: '질문 순서', value: '5'},
        { label: '슬라이드 주제', value: 'Research Design' },
        { label: '질문한 사람', value: 'Anonymous' },
        { label: '질문 내용', value: 'Control group이 treatment group과 똑같은 질문을 올리면 Poly와 기존 서비스의 답안이 얼마나 차이가 있나요?' },
      ]
    },
    {
      index: 6,
      details: [
        { label: '질문 순서', value: '6'},
        { label: '슬라이드 주제', value: 'Research Design' },
        { label: '질문한 사람', value: 'Anonymous' },
        { label: '질문 내용', value: '만약 두 답변이 굉장히 근사하다면 뭐가 다른 것인가요?' },
        { label: '연관 질문', value: '5'},
        { label: '연관 이유', value: '5번 질문 내용인 Control group과 Treatment group의 답변 차이에 대한 답안을 바탕으로 더 깊은 분석을 통해 새로운 서비스의 도입이 실제로 어떤 변화를 가져왔는지, 그리고 이러한 변화가 얼마나 유의미한지를 평가하는 단계로 이어집니다. 답변이 거의 동일하다면, 새로운 서비스 도입의 효과가 미미하다는 결론을 내릴 수 있습니다. 이 경우, 본 질문을 통해 표면적인 답변의 질 외에 어떤 요소들이 다른지를 분석할 수 있습니다. 예를 들어, 새로운 서비스의 사용자 경험, 응답 속도, 인터페이스의 차이 등이 고려될 수 있습니다.' }
      ]
    }];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const toggleModal = (content) => {
    setIsModalOpen(!isModalOpen);
    setModalContent(content || []); // Ensure content is never undefined
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[800px] h-auto p-10 bg-white shadow-2xl rounded-lg" style={{ marginTop: '-200px' }}>
        <svg viewBox="0 0 800 720" className="w-full h-auto" > {/* Increased height in viewBox */}
          
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
          
          <path d="M 100 50 C 150 50, 150 150, 200 150" stroke="#353535" strokeWidth="2" fill="none" className="line-animation"/>
          <path d="M 270 250 C 300 250, 330 350, 360 350" stroke="#353535" strokeWidth="2" fill="none" className="line-animation" />
          <path d="M 480 450 A 20 20 0 0 1 520 450" stroke="#353535" strokeWidth="2" fill="none" className="line-animation"/>
          <path d="M 400 350 C 430 350, 430 150, 500 150" stroke="#353535" strokeWidth="2" fill="none" className="line-animation" />
          <path d="M 520 450 C 545 450, 565 550, 570 550" stroke="#353535" strokeWidth="2" fill="none" className="line-animation" />
          <path d="M 520 450 C 600 450, 680 600, 700 650" stroke="#353535" strokeWidth="2" fill="none" className="line-animation" />
          <path d="M 200 150 A 20 20 0 0 1 310 150" stroke="#353535" strokeWidth="2" fill="none" className="line-animation"/>
          <path d="M 570 550 A 20 20 0 0 1 620 550" stroke="#353535" strokeWidth="2" fill="none" className="line-animation"/>

          
          {/* Circles */}
          <circle cx="100" cy="50" r="10" fill="#5AC1A7"
            className="circle-animation"
          />
          <circle cx="200" cy="150" r="10" fill="#5AC1A7" className="circle-animation"
            onClick={() => toggleModal(data[0]['details'])}
          />
          <circle cx="310" cy="150" r="10" fill="#5AC1A7" className="circle-animation"
            onClick={() => toggleModal(data[1]['details'])}/>
          <circle cx="270" cy="250" r="10" fill="#5AC1A7" className="circle-animation"
            onClick={() => toggleModal(data[4]['details'])}/>
          <circle cx="340" cy="250" r="10" fill="#5AC1A7" className="circle-animation"
            onClick={() => toggleModal(data[3]['details'])}/>
          <circle cx="360" cy="350" r="10" fill="#5AC1A7" className="circle-animation"
            onClick={() => toggleModal(data[2]['details'])}/>
          <circle cx="400" cy="350" r="10" fill="#5AC1A7" className="circle-animation"/>
          <circle cx="500" cy="150" r="10" fill="#5AC1A7" className="circle-animation"
          onClick={() => toggleModal(data[5]['details'])}/>
          <circle cx="480" cy="450" r="10" fill="#5AC1A7" className="circle-animation"/>
          <circle cx="520" cy="450" r="10" fill="#5AC1A7" className="circle-animation"/>
          <circle cx="570" cy="550" r="10" fill="#5AC1A7" className="circle-animation"/>
          <circle cx="595" cy="550" r="10" fill="#5AC1A7" className="circle-animation"/>
          <circle cx="620" cy="550" r="10" fill="#5AC1A7" className="circle-animation"/>
          <circle cx="700" cy="650" r="10" fill="#5AC1A7" className="circle-animation"/>

          </svg>
          <Modal isOpen={isModalOpen} content={modalContent} onClose={() => setIsModalOpen(false)} />
        
      </div>
    </div>
  );
};

export default SeminarFlowDiagram;