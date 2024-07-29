import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { PiPlantThin } from "react-icons/pi";

const Modal = ({ isOpen, content = [], onClose }) => {
  const [show, setShow] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => {
        setAnimationClass('opacity-100 translate-y-0 scale-100');
        document.body.style.overflow = 'hidden';
      }, 10); // 소량의 딜레이를 추가하여 애니메이션이 적용되도록 함
    } else {
      setAnimationClass('opacity-0 -translate-y-10 scale-95');
      setTimeout(() => {
        setShow(false);
        document.body.style.overflow = 'auto';
      }, 300); // 애니메이션 지속 시간과 일치하도록 설정
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 bg-opacity-60' : 'opacity-0 bg-opacity-0'
      } bg-gray-600`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform ${animationClass}`}
        style={{ width: '80%', padding: '4px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900"> 질문 상세 </h3>
          <div className="mt-2" style={{ marginTop: '12px' }}>
            {content.map((detail, index) => (
              <div key={index} className="py-2">
                <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-all">
                  {/* <div className="flex-shrink-0">
                    <PiPlantThin className="text-4xl text-gray-500" />
                  </div> */}
                  <div className="ml-4">
                    <p className="text-md font-semibold text-gray-900">{detail.label}</p>
                    <p className="text-md text-gray-700 mt-1">{detail.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
