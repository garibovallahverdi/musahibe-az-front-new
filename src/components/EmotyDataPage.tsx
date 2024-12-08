import React from 'react'
import RelatedBox from '../shared/RelatedBox'

type EmptyPage ={
    placeholders:unknown[]
  }
const EmotyDataPage:React.FC<EmptyPage> = ({placeholders}) => {
  return (
    <div className="bg-background py-4">
    <div className="w-full grid grid-cols-12 gap-3">
      <div className="lg:col-span-9 col-span-12 bg-backgroundSecond shadow-lg rounded-lg p-6">
        <h1 className="text-xl text-red-500">This news is not available or has been deleted.</h1>
        <p className="text-sm text-gray-500 mt-4">Sorry, the news article you're looking for is no longer available.</p>
      </div>
      <RelatedBox placeholders={placeholders} />
    </div>
  </div>
  )
}

export default EmotyDataPage