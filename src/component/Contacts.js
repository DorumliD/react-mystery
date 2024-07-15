import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contacts() {
  const id = useParams();
  return (
    <div>
      Bilolxon
        
        <h1>This is {id} - page </h1>
    </div>
  )
}
