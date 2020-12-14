import React from "react"
import { useParams } from "react-router-dom"

export const New = () => {
  let props = useParams()
  console.log("newId", props)
  return (
    <div>
      <h1>New</h1>
    </div>
  )
}
