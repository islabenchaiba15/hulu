import React from 'react'
import Thumbnail from './Thumbnail'

interface Props{
  results:{
    results:any[]
  }
}
const ResultsComponent = ({ results }: Props) => {
  const data=results.results;
  return (
    <div className='px-1 my-10 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 '>
        {data.map((result) =>(
          <div className="" key={result.id}>
            <Thumbnail result={result}/>
          </div>
        ))}
    </div>
  )
}

export default ResultsComponent