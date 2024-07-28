'use client'
import { BiArchiveOut } from "react-icons/bi";

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
      <div className="mt-14 flex justify-center items-center">
        <div className="px-60 py-20 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center space-y-3 cursor-pointer hover:border-gray-400">
          <BiArchiveOut className="h-10 w-10 text-gray-500" />
          <text className="text-gray-600 whitespace-nowrap" style={{fontWeight: "500"}}>Upload a voice recording file</text>
        </div>
    </div>
      {/* <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/question"
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          style={{ backgroundColor: 'rgba(118, 32, 214, 1)' }}
        >
          분석 시작하기
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div> */}
    </div>
  )
}
