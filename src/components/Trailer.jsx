import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Trailer = ({movie}) => {
  const params = useParams()
  console.log(params)
  const el = movie.find(m=>m.name===params.name)
  console.log(el)
  return (
    <div>
      <h2 className='trailer'>{el.name}</h2>
      <h2 className='trailer' >{el.description}</h2>
      <iframe src={el.Trailer} frameborder="0"></iframe>
    
    </div>
  )
}

export default Trailer
