'use client'
import React, { useState } from "react";
import { BiArchiveOut } from "react-icons/bi";
import FileUpload from "./FileUpload";

export default function Example() {
  const phrase = "Uncover New Insights in Every Lab Seminar"
  const words = phrase.split(" ");

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {words.map((word, index) => (
          <span key={index} className="fadeInLeft inline-block mr-2">
            {word}
          </span>
        ))}
      </h1>
      <p className="mt-8 text-lg leading-8 text-gray-600">
        Seminar Flow는 랩 세미나의 모든 질문을 AI 기반 음성 인식과 자연어 처리 기술로 분석하고 시각화합니다. 연구 노트의 버전 관리를 간소화하고 자료 조사 시간을 줄여 연구 효율을 높여보세요.
      </p>
      <FileUpload />
      
    </div>
  )
}
