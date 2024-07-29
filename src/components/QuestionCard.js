// QuestionCard.js

import React, { useState, useEffect } from 'react';
import { BiArchiveOut } from 'react-icons/bi';

const data = [
  { id: 1, action: "이 실험의 종속 변수는 무엇인가요?", comment: "앱 내 페이지 뷰에서는 폴리 기능이 Treated 그룹에서만 존재하기 때문에, 해당 기능에서 집계된 뷰 카운트는 제외한 값을 사용했습니다.",date: "06:30" },
  { id: 2, action: "실험에서 트리트먼트 그룹과 컨트롤 그룹의 차이는 Poly라는 새로운 기능을 제공했는지 여부인가요?", comment: "네, 맞습니다.",date: "12:20" },
  { id: 3, action: "트리트먼트 그룹이 앱의 기존 기능도 사용할 수 있는데, 그렇다면 새로운 기능인 폴리에 대한 수용률도 확인해야 하지 않을까요?", comment:"네, 맞습니다. 그 부분은 Robust Checkness 항목에서 확인했습니다.",date: "15:45" },
  { id: 4, action: "앱에 있는 커뮤니티 기능이 Spillover 효과를 일으킬 가능성에 대해 걱정해야 할까요?", comment: "저는 IP 주소를 사용해 해당 부분을 확인했고 문제가 없다는 것을 확인했습니다.", date: "25:14" },
  { id: 5, action: "컨트롤 그룹이 트리트먼트 그룹과 동일한 질문을 올렸을 때, 폴리의 답변과 기존 서비스의 답변은 얼마나 차이가 나나요?", comment: "제가 알기로는, 이것이 정말 훌륭한 기능이라고 생각합니다. 검색 기능이 RAG에 그대로 적용되었고, 동일한 검색 데이터가 프롬프트에 반영되기 때문에 GPT가 같은 내용을 바탕으로 솔루션을 만들어내고 있습니다.",date: "32:26" },
  { id: 6, action: "그렇다면 두 답변이 매우 유사할 경우, 다른 차이점이 있을까요?", comment:"네, Treated 그룹은 대화 형식으로 쉽게 설명해 주는 점이 특징입니다.",date: "34:27", isPaid: true }
];

function QuestionList() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // 0.3초 후에 로딩

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[800px] h-auto p-10 bg-white shadow-2xl rounded-lg">
        {data.map((item, index) => (
          <div key={item.id} className={`relative mb-4 fadeInQuestion`} style={{ animationDelay: `${index * 0.2}s` }}>
            {index < data.length - 1 && (
              <div className="absolute top-6 bottom-2 w-0.5 bg-gray-100" style={{ marginLeft: '5px' }}></div>
            )}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className={`w-3 h-3 rounded-full mt-2 ${item.isPaid ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex-1 ml-4 mt-1">
                <span className="text-xs text-gray-500 block">{item.date}</span>
                <p className="text-md">{item.action}</p>
                {item.comment ? (
                  <div className="mt-2 p-4 bg-gray-100 rounded-lg shadow-sm relative">
                    <p className="text-sm">{item.comment}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
