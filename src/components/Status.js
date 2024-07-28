'use client'
import { BiArchiveOut } from "react-icons/bi";

export default function Example({textHead, textBody}) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
       {textHead}
      </h1>
      <p className="my-8 text-lg leading-8 text-gray-600">
       {textBody}
      </p>
    </div>
  )
}
