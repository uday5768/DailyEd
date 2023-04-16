import React from "react"
import "./heading.css"

export default function Heading ({ title }){
  return (
    <>
      <div className='heading'>
        <h6>{title}</h6>
      </div>
    </>
  )
}

