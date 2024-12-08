import React from 'react'
import RelatedCard from '../components/RelatedCard'
type RelatedBoxProps ={
  placeholders:unknown[]
}
const RelatedBox: React.FC<RelatedBoxProps> = React.memo(({ placeholders }) => {
  return (
    <div className="lg:col-span-3 h-max col-span-12  shadow-lg rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
    <div className="grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
      {placeholders.map((_,index:number) => (
        <RelatedCard
        key={index}
        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ut necessitatibus, neque modi laudantium magnam obcaecati unde. Maiores, nisi quasi."
        />
      ))}
    </div>
  </div>
  )
})

export default RelatedBox