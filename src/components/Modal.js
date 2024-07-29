import React from 'react';

const Modal = ({ isOpen, content = [], onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden" onClick={e => e.stopPropagation()}
        style={{ width: '60%', padding: '4px'}}>
        <div className="p-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">1️⃣ 첫 번째 질문</h3>
          <div className="mt-2" style={{marginTop: "23px"}}>
                {content.map((detail, index) => (
                <p key={index} className="text-sm text-gray-700 mt-2">
                    <strong>{detail.label}:</strong> {detail.value}
                </p>
                ))}
            </div>
        </div>
        <div className="bg-gray-50 p-4 flex justify-end">
          <button onClick={onClose} className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;