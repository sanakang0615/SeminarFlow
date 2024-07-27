import React from 'react';

const ContentDividers = ({item}) => {

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow-sm">
        <h3 className="font-semibold text-xl mb-5" style={{color: "black"}}>
          {`📖 Question ${item.id}`}</h3>
        {item.details.map((detail, index) => (
          <div key={index} className="p-2 mb-2 border-b last:border-b-0">
            <text style={{color: 'black'}}><strong>{detail.label}:</strong> {detail.value}</text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentDividers;
